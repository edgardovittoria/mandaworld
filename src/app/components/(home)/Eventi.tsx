'use client';

import { CalendarDays, Clock } from "lucide-react";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

type Evento = {
  id: string;
  titolo: string;
  descrizione: string;
  data: string;
  ora: string;
  immagine: string;
  tipo_contenuto?: 'immagine' | 'video';
  video_url?: string;
};

export default function Eventi() {
  const [eventi, setEventi] = useState<Evento[]>([]);
  const [eventiConFoto, setEventiConFoto] = useState<Record<string, boolean>>({});
  const [visibili, setVisibili] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventi = async () => {
      const { data: eventiData, error: eventiError } = await supabase
        .from('events')
        .select('*')
        .order('data', { ascending: true });

      if (eventiError) {
        console.error("Errore nel recupero eventi:", eventiError.message);
        setLoading(false);
        return;
      }

      setEventi(eventiData || []);

      const { data: fotoData, error: fotoError } = await supabase
        .from('event_photos')
        .select('event_id');

      if (fotoError) {
        console.error("Errore nel recupero foto eventi:", fotoError.message);
      }

      const fotoMap: Record<string, boolean> = {};
      if (fotoData) {
        fotoData.forEach((f) => {
          fotoMap[f.event_id] = true;
        });
        setEventiConFoto(fotoMap);
      }

      setLoading(false);
    };

    fetchEventi();
  }, []);

  const mostraAltri = () => {
    setVisibili(prev => prev + 3);
  };

  return (
    <section id="eventi" className="py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="uppercase text-white font-bold text-4xl md:text-6xl xl:text-7xl mandaFont">
          Estate 2025
        </h2>
      </div>

      {loading ? (
        <p className="text-white text-center">Caricamento eventi...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {eventi.slice(0, visibili).map(evento => (
            <div
              key={evento.id}
              className="bg-[#111827] text-white rounded-2xl overflow-hidden w-full max-w-xs transition-transform hover:scale-105 border border-fuchsia-500"
              style={{
                boxShadow: '0 0 12px 2px rgba(236, 72, 153, 0.6)',
              }}
            >
              {evento.tipo_contenuto === 'video' && evento.video_url ? (
                <video
                  src={evento.video_url}
                  controls
                  className="w-full rounded-t-2xl bg-black"
                  style={{ maxHeight: 400 }}
                />
              ) : (
                <img
                  src={evento.immagine}
                  alt={evento.titolo}
                  className="w-full object-contain rounded-t-2xl bg-[#111827]"
                  style={{ maxHeight: 400 }}
                />
              )}

              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{evento.titolo}</h3>
                <p className="text-sm text-gray-300">{evento.descrizione}</p>
                <div className="flex items-center gap-2 text-gray-400 mt-2 text-sm">
                  <CalendarDays size={16} />
                  {new Intl.DateTimeFormat('it-IT', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  }).format(new Date(evento.data))}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock size={16} /> {evento.ora}
                </div>

                {eventiConFoto[evento.id] && (
                  <div className="text-center mt-4">
                    <Link
                      href={`/gallery/${evento.id}`}
                      className="inline-block px-4 py-1 border border-pink-500 rounded-full text-sm hover:bg-pink-500 hover:text-white transition"
                    >
                      Vai alla Galleria
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && visibili < eventi.length && (
        <div className="text-center mt-10">
          <button
            onClick={mostraAltri}
            className="px-6 py-2 bg-white text-black rounded-full text-lg shadow hover:bg-gray-200 transition"
          >
            + Vedi altri eventi
          </button>
        </div>
      )}
    </section>
  );
}
