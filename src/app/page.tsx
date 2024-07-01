import Image from "next/image";
import Hero from "@/app/components/(home)/Hero";
import Navbar from "./components/(home)/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  px-24 bg-[#03051A]">
      <Navbar/>
      <Hero/>
    </main>
  );
}
