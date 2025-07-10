"use client";

import { useEffect, useState } from "react";
import { supabase, useSupabaseAuth } from "@/lib/supabaseClient";
import { useSession } from "next-auth/react";

interface Evento {
  id: string;
  titolo: string;
  descrizione: string;
  data: string;
  ora: string;
  immagine: string;
  tipo_contenuto?: "immagine" | "video";
  video_url?: string;
}

export default function GestioneEventi() {
  const { data: session } = useSession();
  const [eventi, setEventi] = useState<Evento[]>([]);
  const [formData, setFormData] = useState<Omit<Evento, "id">>({
    titolo: "",
    descrizione: "",
    data: "",
    ora: "",
    immagine: "",
    tipo_contenuto: "immagine",
    video_url: "",
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Evento>>({});
  const [editPreview, setEditPreview] = useState<string | null>(null);
  const [paginaCorrente, setPaginaCorrente] = useState(1);
  const EVENTI_PER_PAGINA = 5;

  useEffect(() => {
    const init = async () => {
      await useSupabaseAuth();
      fetchEventi();
    };
    init();
  }, []);

  const fetchEventi = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("data", { ascending: true });
    if (!error && data) setEventi(data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    isEdit = false
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const estensione = file.name.split(".").pop()?.toLowerCase();
    const isVideo = estensione === "mp4";
    const folder = isVideo ? "video" : "immagini";
    const filePath = `${folder}/${Date.now()}-${file.name}`;

    // anteprima
    const fileURL = URL.createObjectURL(file);
    isEdit ? setEditPreview(fileURL) : setPreview(fileURL);

    const { error } = await supabase.storage
      .from("event-media")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      alert("Errore caricamento file: " + error.message);
      return;
    }

    const { data } = supabase.storage
      .from("event-media")
      .getPublicUrl(filePath);
    const publicUrl = data.publicUrl;

    if (isEdit) {
      setEditForm((prev) => ({
        ...prev,
        immagine: publicUrl,
        tipo_contenuto: isVideo ? "video" : "immagine",
        video_url: isVideo ? publicUrl : "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        immagine: publicUrl,
        tipo_contenuto: isVideo ? "video" : "immagine",
        video_url: isVideo ? publicUrl : "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("events").insert([
      {
        ...formData,
        user_id: session?.user.id,
      },
    ]);
    if (!error) {
      alert("Evento creato!");
      setFormData({
        titolo: "",
        descrizione: "",
        data: "",
        ora: "",
        immagine: "",
        tipo_contenuto: "immagine",
        video_url: "",
      });
      setPreview(null);
      fetchEventi();
    } else {
      alert("Errore: " + error.message);
    }
  };
  const handleDelete = async (id: string) => {
    const conferma = window.confirm("Sei sicuro di voler eliminare questo evento?");
    if (!conferma) return;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (!error) {
      alert("Evento eliminato.");
      fetchEventi();
    } else {
      alert("Errore nella cancellazione: " + error.message);
    }
  };

  const startEdit = (evento: Evento) => {
    setEditingId(evento.id);
    setEditForm(evento);
    setEditPreview(evento.tipo_contenuto === "video" ? evento.video_url : evento.immagine);
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = async () => {
    if (!editingId) return;
    const eventoCompleto = eventi.find((e) => e.id === editingId);
    const aggiornato = { ...eventoCompleto, ...editForm };
    const { error } = await supabase.from("events").update(aggiornato).eq("id", editingId);
    if (!error) {
      alert("Evento modificato!");
      setEditingId(null);
      setEditPreview(null);
      fetchEventi();
    } else {
      alert("Errore salvataggio: " + error.message);
    }
  };

  const totalePagine = Math.ceil(eventi.length / EVENTI_PER_PAGINA);
  const eventiPaginati = eventi.slice(
    (paginaCorrente - 1) * EVENTI_PER_PAGINA,
    paginaCorrente * EVENTI_PER_PAGINA
  );

  return (
    <div className="min-h-screen bg-backgroundColor p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Gestione Eventi</h1>

      {/* FORM INSERIMENTO */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl border-b border-white pb-6 mb-10">
        <h2 className="text-2xl font-semibold mb-2">Aggiungi un evento</h2>
        <input type="text" name="titolo" placeholder="Titolo" value={formData.titolo} onChange={handleChange} className="w-full p-2 bg-neutral-800 rounded" required />
        <textarea name="descrizione" placeholder="Descrizione" value={formData.descrizione} onChange={handleChange} className="w-full p-2 bg-neutral-800 rounded" required />
        <input type="date" name="data" value={formData.data} onChange={handleChange} className="w-full p-2 bg-neutral-800 rounded" required />
        <input type="time" name="ora" value={formData.ora} onChange={handleChange} className="w-full p-2 bg-neutral-800 rounded" required />
        <input type="file" accept="image/*,video/mp4" onChange={(e) => handleFileUpload(e)} className="w-full p-2 bg-neutral-800 rounded" required />
        {preview && (
          <div className="mt-2">
            {formData.tipo_contenuto === "video" ? (
              <video src={preview} controls className="max-w-xs rounded" />
            ) : (
              <img src={preview} alt="Anteprima" className="max-w-xs rounded" />
            )}
          </div>
        )}
        <button type="submit" className="px-4 py-2 bg-secondary text-white font-bold rounded hover:opacity-80">Salva evento</button>
      </form>

      {/* EVENTI ESISTENTI */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-2">Eventi esistenti</h2>
        {eventiPaginati.map((evento) => (
          <div key={evento.id} className="bg-neutral-900 p-4 rounded border border-white">
            {editingId === evento.id ? (
              <>
                <input name="titolo" value={editForm.titolo || ""} onChange={handleEditChange} className="w-full p-2 bg-neutral-800 rounded mb-2" />
                <textarea name="descrizione" value={editForm.descrizione || ""} onChange={handleEditChange} className="w-full p-2 bg-neutral-800 rounded mb-2" />
                <input type="date" name="data" value={editForm.data || ""} onChange={handleEditChange} className="w-full p-2 bg-neutral-800 rounded mb-2" />
                <input type="time" name="ora" value={editForm.ora || ""} onChange={handleEditChange} className="w-full p-2 bg-neutral-800 rounded mb-2" />
                <input type="file" accept="image/*,video/mp4" onChange={(e) => handleFileUpload(e, true)} className="w-full p-2 bg-neutral-800 rounded mb-2" />
                {editPreview && (
                  <div className="mt-2">
                    {editForm.tipo_contenuto === "video" ? (
                      <video src={editPreview} controls className="max-w-xs rounded" />
                    ) : (
                      <img src={editPreview} alt="Anteprima" className="max-w-xs rounded" />
                    )}
                  </div>
                )}
                <div className="flex gap-2 mt-3">
                  <button onClick={saveEdit} className="bg-green-600 px-3 py-1 rounded">Salva</button>
                  <button onClick={() => { setEditingId(null); setEditPreview(null); }} className="bg-gray-500 px-3 py-1 rounded">Annulla</button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">{evento.titolo}</h3>
                <p>{evento.descrizione}</p>
                <p>📅 {evento.data} - 🕒 {evento.ora}</p>
                {evento.tipo_contenuto === "video" && evento.video_url ? (
                  <video src={evento.video_url} controls className="max-w-xs mt-2 rounded" />
                ) : (
                  <img src={evento.immagine} alt={evento.titolo} className="max-w-xs mt-2 rounded" />
                )}
                {session && (
                  <div className="flex gap-2 mt-3">
                    <button onClick={() => startEdit(evento)} className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600">Modifica</button>
                    <button onClick={() => handleDelete(evento.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800">Elimina</button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}

        {/* PAGINAZIONE */}
        <div className="flex justify-between mt-6">
          <button disabled={paginaCorrente === 1} onClick={() => setPaginaCorrente(p => p - 1)} className="px-4 py-2 bg-gray-600 rounded disabled:opacity-50">
            ◀️ Precedente
          </button>
          <span>Pagina {paginaCorrente} di {totalePagine}</span>
          <button disabled={paginaCorrente === totalePagine} onClick={() => setPaginaCorrente(p => p + 1)} className="px-4 py-2 bg-gray-600 rounded disabled:opacity-50">
            Successivo ▶️
          </button>
        </div>
      </div>
    </div>
  );
}
