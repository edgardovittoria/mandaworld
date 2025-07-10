'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
      callbackUrl: "/admin", // 👈 forza la destinazione finale
    });

    console.log("Login result:", res);

    if (res?.ok && res.url) {
      toast.success("Login effettuato!");
      setTimeout(() => {
        router.push(res.url); // 👈 usa esattamente l'URL restituito
      }, 800);
    } else {
      toast.error("Credenziali non valide");
    }

    setLoading(false);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen flex items-center justify-center bg-backgroundColor text-white">
        <form
          onSubmit={handleLogin}
          className="space-y-4 p-8 border border-white rounded max-w-sm w-full bg-neutral-900 shadow-lg"
        >
          <h1 className="text-2xl font-bold text-center mb-4">Accedi a Mandaworld</h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 bg-neutral-800 rounded border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-neutral-800 rounded border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-bold py-2 rounded text-white transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-secondary hover:bg-pink-600"
            }`}
          >
            {loading ? "Accesso in corso..." : "Accedi"}
          </button>
        </form>
      </div>
    </>
  );
}
