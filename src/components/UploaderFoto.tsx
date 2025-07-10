'use client';

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function UploaderFoto({
  eventId,
  onUploadComplete,
}: {
  eventId: string;
  onUploadComplete?: () => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [applyLogo, setApplyLogo] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);

  const logoPath = "/logo_fronte.png";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  const drawImageWithLogo = async (imageFile: File) => {
    return new Promise<Blob>((resolve, reject) => {
      const img = new Image();
      const logo = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject("No canvas context");

        ctx.drawImage(img, 0, 0);

        logo.onload = () => {
          const desiredLogoWidth = img.width * 0.2;
          const aspectRatio = logo.width / logo.height;
          const logoHeight = desiredLogoWidth / aspectRatio;

          ctx.globalAlpha = 0.8;
          ctx.drawImage(
            logo,
            img.width - desiredLogoWidth - 20,
            img.height - logoHeight - 20,
            desiredLogoWidth,
            logoHeight
          );
          ctx.globalAlpha = 1.0;

          canvas.toBlob((blob) => {
            if (blob) resolve(blob);
            else reject("Blob conversion failed");
          }, "image/jpeg", 0.95);
        };

        logo.src = logoPath;
      };

      img.src = URL.createObjectURL(imageFile);
    });
  };

  const handleUpload = async () => {
    setUploading(true);
    setProgress(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const timestamp = Date.now();
      const filePath = `${eventId}/${timestamp}-${file.name}`;

      try {
        const finalFile = applyLogo
          ? new File([await drawImageWithLogo(file)], file.name, { type: "image/jpeg" })
          : file;

        const { error: uploadError } = await supabase.storage
          .from("event-media")
          .upload(filePath, finalFile, { upsert: true });

        if (uploadError) {
          console.error("Upload error:", uploadError.message);
          continue;
        }

        const { data: urlData } = supabase.storage
          .from("event-media")
          .getPublicUrl(filePath);

        const publicUrl = urlData?.publicUrl;

        const { error: dbError } = await supabase.from("event_photos").insert({
          event_id: eventId,
          url: publicUrl,
        });

        if (dbError) {
          console.error("DB insert error:", dbError.message);
          continue;
        }

        setProgress(Math.round(((i + 1) / files.length) * 100));
      } catch (err) {
        console.error("Errore nel processo:", err);
      }
    }

    setUploading(false);
    setProgress(null);
    setFiles([]);
    alert("✅ Upload completato!");

    if (onUploadComplete) onUploadComplete(); // ✅ callback finale
  };

  return (
    <div className="space-y-4">
      <label className="block font-semibold">Carica Foto Evento</label>
      <input type="file" multiple accept="image/*" onChange={handleFileChange} className="block text-white" />

      <div className="flex items-center space-x-2 mt-2">
        <input
          type="checkbox"
          checked={applyLogo}
          onChange={() => setApplyLogo(!applyLogo)}
          className="accent-purple-500"
        />
        <label>Applica logo piscina alle immagini</label>
      </div>

      {progress !== null && (
        <div className="w-full bg-neutral-700 h-6 rounded relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-fuchsia-600 to-violet-600 transition-all"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm text-white font-semibold">
            {progress}%
          </div>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`mt-4 px-4 py-2 rounded text-white font-bold ${
          uploading ? 'bg-gray-500 cursor-not-allowed' : 'bg-fuchsia-600 hover:bg-fuchsia-700'
        }`}
      >
        {uploading ? "Caricamento..." : "Carica immagini"}
      </button>
    </div>
  );
}
