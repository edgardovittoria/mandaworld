import Image from "next/image";
import Hero from "@/app/components/(home)/Hero";
import Navbar from "./components/(navbar)/Navbar";
import Footer from "./components/Footer";
import Piscina from "./components/(home)/Piscina";
import Disco from "./components/(home)/Disco";
import Contatti from "./components/(home)/Contatti";
import Eventi from "./components/(home)/Eventi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Hero/>
      <Eventi/>
      <Piscina/>
      <Disco/>
      <Contatti/>
    </main>
  );
}
