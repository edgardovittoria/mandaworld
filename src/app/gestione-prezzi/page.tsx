'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface PiscinaInfo {
  id: string;
  categoria: string;
  etichetta: string;
  contenuto: string;
  ordine: number;
  visibile: boolean;
}

function itemExistsInDb(item: PiscinaInfo): boolean {
  return !item.id.startsWith("temp-");
}

const categorieDisponibili = ['orari', 'servizi', 'prezzi', 'dotazioni'];

export default function GestionePrezziPage() {
  const [voci, setVoci] = useState<PiscinaInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('piscina_info')
        .select('*')
        .order('categoria', { ascending: true })
        .order('ordine', { ascending: true });
      if (!error && data) setVoci(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (index: number, field: keyof PiscinaInfo, value: any) => {
    const updated = [...voci];
    updated[index][field] = field === 'ordine' ? parseInt(value) : value;
    setVoci(updated);
  };

  const handleSave = async (item: PiscinaInfo) => {
    await supabase.from('piscina_info').update(item).eq('id', item.id);
  };

  const handleDelete = async (id: string) => {
    await supabase.from('piscina_info').delete().eq('id', id);
    setVoci((prev) => prev.filter((i) => i.id !== id));
  };

  const handleAddNew = () => {
    const nuova: PiscinaInfo = {
      id: `temp-${crypto.randomUUID()}`,
      categoria: 'prezzi',
      etichetta: '',
      contenuto: '',
      ordine: voci.length + 1,
      visibile: true,
    };
    setVoci([...voci, nuova]);
  };

  const handleCreate = async (item: PiscinaInfo) => {
    const { data, error } = await supabase.from('piscina_info').insert([item]).select().single();
    if (!error && data) {
      setVoci((prev) => prev.map((i) => (i.id === item.id ? data : i)));
    }
  };

  if (loading) return <p className="text-white p-4">Caricamento...</p>;

  const vociPerCategoria = (categoria: string) => voci.filter((v) => v.categoria === categoria);

  return (
    <div className="min-h-screen bg-backgroundColor text-white p-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold mb-6">Gestione Prezzi Piscina</h1>
        <button onClick={handleAddNew} className="mb-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
          ➕ Nuova Voce
        </button>

        {categorieDisponibili.map((categoria) => (
          <div key={categoria}>
            <div className="bg-white/10 border border-white/20 px-4 py-2 rounded mt-10 mb-4">
              <h2 className="text-xl font-bold uppercase tracking-wide">{categoria}</h2>
            </div>
            {vociPerCategoria(categoria).map((item, index) => (
              <div key={item.id} className="bg-white/5 border border-white/20 p-4 rounded-lg shadow space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    className="text-black p-2 rounded w-full"
                    value={item.categoria}
                    onChange={(e) => handleChange(index, 'categoria', e.target.value)}
                  >
                    {categorieDisponibili.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <input
                    className="text-black p-2 rounded w-full"
                    placeholder="Etichetta"
                    value={item.etichetta}
                    onChange={(e) => handleChange(index, 'etichetta', e.target.value)}
                  />
                  <textarea
                    className="text-black p-2 rounded w-full col-span-2"
                    placeholder="Contenuto"
                    rows={3}
                    value={item.contenuto}
                    onChange={(e) => handleChange(index, 'contenuto', e.target.value)}
                  />
                  <input
                    className="text-black p-2 rounded w-full"
                    type="number"
                    placeholder="Ordine"
                    value={item.ordine}
                    onChange={(e) => handleChange(index, 'ordine', e.target.value)}
                  />
                  <label className="flex items-center gap-2 text-white">
                    <input
                      type="checkbox"
                      checked={item.visibile}
                      onChange={(e) => handleChange(index, 'visibile', e.target.checked)}
                    />
                    Visibile
                  </label>
                </div>
                <div className="flex justify-end gap-2 pt-3">
                  {!itemExistsInDb(item) ? (
                    <button onClick={() => handleCreate(item)} className="bg-yellow-600 px-4 py-2 rounded">➕ Crea</button>
                  ) : (
                    <>
                      <button onClick={() => handleSave(item)} className="bg-green-600 px-4 py-2 rounded">💾 Salva</button>
                      <button onClick={() => handleDelete(item.id)} className="bg-red-600 px-4 py-2 rounded">❌ Elimina</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}