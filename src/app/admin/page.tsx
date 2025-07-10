'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="text-white p-4">Caricamento...</p>;
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-backgroundColor text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Pannello Admin</h1>
      <p className="mb-4">Benvenuto, <strong>{session.user?.email}</strong></p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Link
          href="/gestione-eventi"
          className="bg-lime-600 p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">Gestione Eventi</h2>
          <p className="text-sm mt-2 text-white/80">Crea, modifica o elimina eventi</p>
        </Link>

        <Link
          href="/upload-gallery"
          className="bg-purple-600 p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">Gestione Galleria</h2>
          <p className="text-sm mt-2 text-white/80">Carica o rimuovi foto eventi</p>
        </Link>

        <Link
          href="/gestione-footer"
          className="bg-sky-600 p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">Gestione Footer</h2>
          <p className="text-sm mt-2 text-white/80">Modifica contenuti del footer dinamico</p>
        </Link>

        <Link
          href="/gestione-prezzi"
          className="bg-emerald-600 p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold">Gestione Prezzi Piscina</h2>
          <p className="text-sm mt-2 text-white/80">Modifica orari, costi e servizi piscina</p>
        </Link>
      </div>
    </div>
  );
}
