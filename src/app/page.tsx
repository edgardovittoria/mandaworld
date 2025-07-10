import Image from "next/image";
import Hero from "@/app/components/(home)/Hero";
import Navbar from "./components/(navbar)/Navbar";
import Footer from "./components/Footer";
import Piscina from "./components/(home)/Piscina";
import Disco from "./components/(home)/Disco";
import Contatti from "./components/(home)/Contatti";
import Eventi from "./components/(home)/Eventi"; // ← Questo è corretto

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Hero />
      <Eventi /> {/* Mostra la sezione eventi */}
      <Piscina />
      <Disco />
      <Contatti />
    </main>
  );
}

