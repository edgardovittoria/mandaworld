'use client'
import Image from "next/image";
import piscina from "../../../../public/piscina.jpg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiBed } from "react-icons/gi";
import { useState } from "react";

export default function Piscina() {

  const [numOmbrelloni, setnumOmbrelloni] = useState<number | undefined>(undefined)
  const [numLettini, setnumLettini] = useState<number | undefined>(undefined)

  return (
    <div className="w-full py-20 relative" id="piscina">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-5 text-center w-3/4">
          <div className="flex flex-col leading-[.8] items-center">
            <div className="flex flex-col gap-0 items-center mb-20">
              <span className="uppercase text-secondary font-bold text-base mandaFont mb-2">
                Manda world
              </span>
              <h1 className="uppercase text-white font-bold text-[100px] mandaFont">
                PISCINA
              </h1>
              <Image src="/line-white.png" alt="alt" width={120} height={120} />
            </div>
            <div className="relative grid grid-cols-12 gap-20 items-center">
              <div className="col-span-3 flex flex-col items-center">
                <h2 className="uppercase text-white font-bold text-[60px] mandaFont">
                  ORARI
                </h2>
                <span className="uppercase text-white font-bold text-[25px] mandaFont mt-3">
                  mattina: 9:00 - 13:00
                </span>
                <span className="uppercase text-white font-bold text-[25px] mandaFont mt-2">
                  pomeriggio: 13:00 - 18:00
                </span>
                <h2 className="uppercase text-white font-bold text-[60px] mandaFont mt-10">
                  STAGIONE
                </h2>
                <span className="uppercase text-white font-bold text-[25px] mandaFont mt-3">
                  apertura: 25 luglio
                </span>
                <span className="uppercase text-white font-bold text-[25px] mandaFont mt-2">
                  chiusura: 30 settembre
                </span>
              </div>
              <div className="col-span-6 relative">
                <Image
                  src={piscina}
                  alt="alt"
                  className="rounded-3xl relative z-20 shadow-2xl shadow-secondary"
                />
                <div className="absolute z-20 bg-black opacity-20 w-full h-full top-0 right-1/2 translate-x-1/2 rounded-3xl flex flex-row justify-center items-center shadow-2xl shadow-secondary" />
              </div>
              <div className="col-span-3 flex flex-col items-center">
                <h2 className="uppercase text-white font-bold text-[60px] mandaFont">
                  COSTI
                </h2>
                <span className="uppercase text-white font-bold text-[25px] mandaFont mt-3">
                  mattina: 5€
                </span>
                <span className="uppercase text-white font-bold text-[25px] mandaFont mt-2">
                  pomeriggio: 5€
                </span>
                <span className="uppercase text-white font-bold text-[25px] mandaFont mt-2">
                  Giornata intera: 8€
                </span>
                <h2 className="uppercase text-white font-bold text-[60px] mandaFont mt-10">
                  Disponibilità
                </h2>
                <span className="uppercase text-white font-bold text-[25px] mandaFont mt-3">
                  ombrelloni: 20
                </span>
                <span className="uppercase text-white font-bold text-[25px] mandaFont mt-2">
                  lettini: 40
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center w-1/2 mt-20">
          <label className="input focus-within:shadow-2xl w-1/4 focus-within:shadow-secondary input-bordered bg-transparent border border-secondary flex items-center gap-2">
            <input type="number" className="grow placeholder:text-secondary text-secondary" placeholder="Numero Ombrelloni" 
              min={1}
              max={20}
              defaultValue={numOmbrelloni}
              onChange={(e) => {
                setnumOmbrelloni(parseInt(e.target.value))
              }}
            />
            <FaUmbrellaBeach className="text-secondary"/>
          </label>
          <label className="input focus-within:shadow-2xl w-1/4 focus-within:shadow-secondary input-bordered bg-transparent border border-secondary flex items-center gap-2">
            <input type="number" className="grow placeholder:text-secondary text-secondary" placeholder="Numero Lettini" 
              min={1}
              max={40}
              defaultValue={numLettini}
              onChange={(e) => {
                setnumLettini(parseInt(e.target.value))
              }}
            />
            <GiBed className="text-secondary" size={20}/>
          </label>
          <button className="rounded-xl flex items-center justify-center flex-row gap-4 px-2 w-1/4 py-2 border-[1px] border-secondary text-secondary text-xl hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer">
            <span>Prenota</span>
          </button>
        </div>
      </div>
    </div>
  );
}
