'use client';

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { initSupabaseSession } from "@/lib/initSupabaseSession";
import UploaderFoto from "@/components/UploaderFoto";
import Link from 'next/link';

interface Evento {
  id: string;
  titolo: string;
  data: string;
}

export default function UploadGalleryPage() {
  const [eventi, setEventi] = useState<Evento[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    const init = async () => {
      await initSupabaseSession();

      const { data, error } = await supabase
        .from("events")
        .select("id, titolo, data")
        .order("data", { ascending: false });

      if (!error && data) setEventi(data);
    };

    init();
  }, []);

  const handleReset = () => {
    setSelectedId(null);
    setUploadSuccess(false);
  };

  return (
    <div className="min-h-screen bg-backgroundColor text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Upload Foto Evento</h1>

      <div className="max-w-xl space-y-4">
        <label className="block font-semibold text-lg">Seleziona un evento</label>
        <select
          value={selectedId || ""}
          onChange={(e) => {
            setSelectedId(e.target.value);
            setUploadSuccess(false);
          }}
          className="w-full p-2 bg-neutral-800 rounded text-white"
        >
          <option value="" disabled>-- Seleziona evento --</option>
          {eventi.map((evento) => (
            <option key={evento.id} value={evento.id}>
              {evento.titolo} – {evento.data}
            </option>
          ))}
        </select>

        {selectedId && !uploadSuccess && (
          <div className="mt-8">
            <UploaderFoto eventId={selectedId} onUploadComplete={() => setUploadSuccess(true)} />
          </div>
        )}

        {uploadSuccess && (
          <div className="mt-6 text-green-400 space-y-2">
            <p>✅ Caricamento completato con successo!</p>
			<Link
  href={`/gallery/${selectedId}`}
  className="inline-block px-4 py-2 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700"
>
  Vai alla galleria
</Link>

            <button
              onClick={handleReset}
              className="px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200"
            >
              Carica altre foto
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
