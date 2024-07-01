import Image from "next/image";
import Hero from "@/app/components/(home)/Hero";
import Navbar from "./components/Navbar";
import Welcome from "./components/(home)/Welcome";
import Footer from "./components/Footer";
import Piscina from "./components/(home)/Piscina";
import Disco from "./components/(home)/Disco";
import Eventi from "./components/(home)/Eventi";
import Contatti from "./components/(home)/Contatti";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero/>
      <Welcome/>
      <Piscina/>
      <Disco/>
      <Eventi/>
      <Contatti/>
    </main>
  );
}
