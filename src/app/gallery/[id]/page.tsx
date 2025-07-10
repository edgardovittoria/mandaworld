'use client';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";
import { Facebook, Instagram, Share2, Trash2, X, Download, MessageCircle, Clapperboard } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Photo {
  id: string;
  url: string;
  path: string;
  visible: boolean;
}

function LazyImage({
  photo,
  onClick,
  onError,
  session,
  handleDelete,
}: {
  photo: Photo;
  onClick: (p: Photo) => void;
  onError: (url: string) => void;
  session: any;
  handleDelete: (p: Photo) => void;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-4 break-inside-avoid relative group">
      {inView && (
        <img
          src={photo.url}
          alt="Foto evento"
          className="w-full rounded-2xl shadow-md hover:scale-105 transition cursor-pointer"
          onClick={() => onClick(photo)}
          onError={() => onError(photo.url)}
        />
      )}
      {session && (
        <button
          onClick={() => handleDelete(photo)}
          className="absolute bottom-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <Trash2 size={16} />
        </button>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const { data: session } = useSession();
  const params = useParams();
  const eventId = params?.id as string;

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [showShare, setShowShare] = useState<string | null>(null);

  useEffect(() => {
    if (eventId) fetchData();
  }, [eventId]);

  const fetchData = async () => {
    const { data: photoData } = await supabase
      .from("event_photos")
      .select("id, url, event_id")
      .eq("event_id", eventId);

    const { data: eventData } = await supabase
      .from("events")
      .select("titolo, data")
      .eq("id", eventId)
      .single();

    if (photoData) {
      const mapped = photoData.map((d: any) => ({
        id: d.id,
        url: d.url,
        path: d.url.split("/event-media/")[1],
        visible: true,
      }));
      setPhotos(mapped);
    }

    if (eventData) {
      setEventTitle(eventData.titolo);
      setEventDate(eventData.data);
    }
  };

  const handleDelete = async (photo: Photo) => {
    if (!confirm("Vuoi davvero eliminare questa foto?")) return;

    const { error: dbError } = await supabase
      .from("event_photos")
      .delete()
      .eq("id", photo.id);

    if (dbError) {
      console.error("Errore DB:", dbError.message);
      return;
    }

    const filePath = photo.url.split("/storage/v1/object/public/event-media/")[1];
    const { error: storageError } = await supabase.storage
      .from("event-media")
      .remove([filePath]);

    if (storageError) {
      console.error("Errore Storage:", storageError.message);
      return;
    }

    setPhotos((prev) => prev.filter((p) => p.id !== photo.id));
  };

  const handleImageError = (url: string) => {
    setPhotos((prev) =>
      prev.map((p) => (p.url === url ? { ...p, visible: false } : p))
    );
  };

  const shareUrls = (url: string) => ({
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
    instagram: `https://www.instagram.com/`,
    tiktok: `https://www.tiktok.com/`,
  });

  return (
    <div className="min-h-screen bg-backgroundColor text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        {eventTitle && eventDate
          ? `${eventTitle} – ${new Date(eventDate).toLocaleDateString("it-IT")}`
          : "Galleria Evento"}
      </h1>

      <Link
        href="/#eventi"
        className="inline-block mb-4 text-sm text-blue-400 hover:underline transition"
      >
        ← Torna agli eventi
      </Link>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-2">
        {photos.filter(p => p.visible).map((photo, index) => (
          <LazyImage
            key={index}
            photo={photo}
            onClick={setSelectedPhoto}
            onError={handleImageError}
            session={session}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-5xl w-full p-6"
            >
              <img
                src={selectedPhoto.url}
                alt="Ingrandimento"
                className="w-full max-h-[90vh] object-contain rounded-xl"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <a
                  href={selectedPhoto.url}
                  download
                  className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white px-3 py-1 rounded-xl shadow flex items-center space-x-1 hover:scale-105 transition"
                >
                  <Download size={16} /> <span>Scarica</span>
                </a>
                <button
                  onClick={() => setShowShare(selectedPhoto.url)}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-xl shadow flex items-center space-x-1 hover:scale-105 transition"
                >
                  <Share2 size={16} /> <span>Condividi</span>
                </button>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white px-2 rounded-full shadow transition"
                >
                  <X size={18} />
                </button>
              </div>

              {showShare === selectedPhoto.url && (
                <div className="absolute top-20 right-4 bg-neutral-900 rounded-xl p-4 shadow-xl space-y-3 w-48">
                  <a href={shareUrls(selectedPhoto.url).facebook} target="_blank" className="flex items-center gap-2 text-white hover:text-fuchsia-400"><Facebook size={18} /> Facebook</a>
                  <a href={shareUrls(selectedPhoto.url).whatsapp} target="_blank" className="flex items-center gap-2 text-white hover:text-green-400"><MessageCircle size={18} /> WhatsApp</a>
                  <a href={shareUrls(selectedPhoto.url).instagram} target="_blank" className="flex items-center gap-2 text-white hover:text-pink-500"><Instagram size={18} /> Instagram</a>
                  <a href={shareUrls(selectedPhoto.url).tiktok} target="_blank" className="flex items-center gap-2 text-white hover:text-white"><Clapperboard size={18} /> TikTok</a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
