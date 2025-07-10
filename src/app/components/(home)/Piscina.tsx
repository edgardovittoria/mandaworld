'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "../(ui)/MyCarousel";
import CarouselMobile from "../(ui)/CarouselMobile";
import { fetchImagesPiscina } from "@/data/immaginiPiscina";
import { ImgPiscina } from "@/app/model/model";
import { supabase } from "@/lib/supabaseClient";
import { BsClockHistory } from "react-icons/bs";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiBed } from "react-icons/gi";
import { AiOutlineEuro } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";

interface PiscinaInfo {
  id: string;
  categoria: string;
  etichetta: string;
  contenuto: string;
  ordine: number;
  visibile: boolean;
}

export default function Piscina() {
  const [images, setImages] = useState<ImgPiscina[]>([]);
  const [info, setInfo] = useState<PiscinaInfo[]>([]);
  const [numOmbrelloni, setnumOmbrelloni] = useState<number>(0);
  const [numLettini, setnumLettini] = useState<number>(0);
  const [data, setData] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchImagesPiscina().then(setImages);
    supabase
      .from("piscina_info")
      .select("*")
      .eq("visibile", true)
      .order("ordine", { ascending: true })
      .then(({ data }) => {
        if (data) setInfo(data);
      });
  }, []);

  const orari = info.filter(i => i.categoria === "orari");
  const servizi = info.filter(i => i.categoria === "servizi");
  const prezzi = info.filter(i => i.categoria === "prezzi");
  const dotazioni = info.filter(i => i.categoria === "dotazioni");

  return (
    <div className="w-full py-20 relative" id="piscina">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-5 text-center w-3/4">
          <div className="flex flex-col leading-[.8] items-center">
            <div className="flex flex-col gap-0 items-center mb-10 lg:mb-20">
              <span className="uppercase text-secondary font-bold text-base mandaFont mb-2">
                Manda world
              </span>
              <h1 className="uppercase text-white font-bold mandaFont">PISCINA</h1>
              <Image src="/line-white.png" alt="linea" width={120} height={120} />
            </div>

            <Carousel images={images} section="piscina" />
            <CarouselMobile images={images} section="piscina" />

            <div className="relative flex xl:flex-row flex-col gap-10 justify-evenly xl:items-center w-full mt-20">

              {/* ORARI */}
              <div className="relative flex w-full xl:w-1/5 flex-col items-center px-3 py-10 border rounded-lg border-secondary">
                <BsClockHistory size={40} className="text-secondary absolute top-[-20px] bg-backgroundColor" />
                {orari.map(item => (
                  <span key={item.id} className="uppercase text-white font-bold text-[20px] mandaFont mt-2">
                    {item.contenuto}
                  </span>
                ))}
              </div>

              {/* SERVIZI */}
              <div className="relative flex w-full xl:w-1/5 flex-col items-center px-3 py-10 border rounded-lg border-secondary">
                <CiCircleCheck size={40} className="text-secondary absolute top-[-20px] bg-backgroundColor" />
                {servizi.map(item => (
                  <span key={item.id} className="uppercase text-white font-bold text-[20px] mandaFont mt-2">
                    {item.contenuto}
                  </span>
                ))}
              </div>

              {/* DOTAZIONI */}
              <div className="relative w-full xl:w-1/5 flex flex-col items-center px-3 py-10 border rounded-lg border-secondary">
                <FaUmbrellaBeach size={40} className="text-secondary absolute top-[-20px] bg-backgroundColor" />
                {dotazioni.map(item => (
                  <span key={item.id} className="uppercase text-white font-bold text-[20px] mandaFont mt-2">
                    {item.contenuto}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COSTI */}
        <div className="relative flex w-3/4 text-center xl:w-1/2 mt-10 flex-col items-center px-3 py-10 border rounded-lg border-secondary">
          <AiOutlineEuro size={40} className="text-secondary absolute top-[-20px] bg-backgroundColor" />
          {prezzi.map(item => (
            <span key={item.id} className="uppercase text-white font-bold text-[20px] mandaFont mt-3">
              {item.contenuto}
            </span>
          ))}
        </div>

        {/* WHATSAPP FORM */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center w-1/2 mt-20">
          <label className="input relative focus-within:shadow-2xl lg:w-1/4 w-full input-bordered bg-transparent border border-secondary flex items-center gap-2">
            <input
              type="number"
              className="grow placeholder:text-secondary text-secondary"
              placeholder="Numero Ombrelloni"
              min={1}
              max={20}
              defaultValue={numOmbrelloni}
              onChange={(e) => setnumOmbrelloni(parseInt(e.target.value))}
            />
            <span className="absolute px-1 font-bold top-[-10px] bg-backgroundColor text-sm text-secondary">Num. Ombrelloni</span>
            <FaUmbrellaBeach className="text-secondary" />
          </label>
          <label className="input relative focus-within:shadow-2xl lg:w-1/4 w-full input-bordered bg-transparent border border-secondary flex items-center gap-2">
            <input
              type="number"
              className="grow placeholder:text-secondary text-secondary"
              placeholder="Numero Lettini"
              min={1}
              max={40}
              defaultValue={numLettini}
              onChange={(e) => setnumLettini(parseInt(e.target.value))}
            />
            <span className="absolute px-1 font-bold top-[-10px] bg-backgroundColor text-sm text-secondary">Num. Lettini</span>
            <GiBed className="text-secondary" size={20} />
          </label>
          <label className="input relative focus-within:shadow-2xl lg:w-1/4 w-full input-bordered bg-transparent border border-secondary flex items-center gap-2">
            <input
              type="date"
              className="grow placeholder:text-secondary text-secondary"
              defaultValue={data}
              onChange={(e) => setData(e.currentTarget.value)}
            />
            <span className="absolute px-1 font-bold top-[-10px] bg-backgroundColor text-sm text-secondary">Data</span>
          </label>
        </div>

        <button
          className="rounded-xl mt-10 w-1/2 disabled:opacity-40 flex items-center justify-center flex-row gap-4 px-2 md:w-1/4 py-2 border-[1px] border-secondary text-secondary text-xl hover:bg-secondary hover:text-backgroundColor"
          disabled={numLettini === 0 || numOmbrelloni === 0 || !data}
          onClick={() => {
            if (data) {
              const [yyyy, mm, dd] = data.split("-");
              const text = `Salve, è possibile prenotare *${numOmbrelloni}* ombrelloni e *${numLettini}* lettini per il giorno *${dd}/${mm}/${yyyy}*?`;
              window.open(`whatsapp://send?phone=+393293306094&text=${text}`);
              setData(undefined);
              setnumLettini(0);
              setnumOmbrelloni(0);
            }
          }}
        >
          <span className="text-sm">Prenota</span>
        </button>
      </div>
    </div>
  );
}