"use client";
import Image from "next/image";
import piscina from "../../../../public/piscina.jpg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiBed } from "react-icons/gi";
import { useEffect, useState } from "react";
import Carousel from "../(ui)/Carousel";
import { ImgPiscina } from "@/app/model/model";
import { fetchImagesPiscina } from "@/data/immaginiPiscina";
import CarouselMobile from "../(ui)/CarouselMobile";
import { BsClockHistory } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { HiCurrencyEuro } from "react-icons/hi2";
import { AiOutlineEuro } from "react-icons/ai";

export default function Piscina() {
  const [numOmbrelloni, setnumOmbrelloni] = useState<number>(
    0
  );
  const [numLettini, setnumLettini] = useState<number>(0);
  const [data, setData] = useState<string | undefined>(undefined);
  const [images, setImages] = useState<ImgPiscina[]>([])
    useEffect(() => {
        fetchImagesPiscina().then(res => {
            setImages(res)
        })
    }, []);

  return (
    <div className="w-full py-20 relative" id="piscina">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-5 text-center w-3/4">
          <div className="flex flex-col leading-[.8] items-center">
            <div className="flex flex-col gap-0 items-center mb-10 lg:mb-20">
              <span className="uppercase text-secondary font-bold text-base mandaFont mb-2">
                Manda world
              </span>
              <h1 className="uppercase text-white font-bold mandaFont">
                PISCINA
              </h1>
              <Image src="/line-white.png" alt="alt" width={120} height={120} />
            </div>
            <Carousel images={images} section="piscina"/>
            <CarouselMobile images={images} section="piscina"/>
            <div className="relative flex xl:flex-row flex-col gap-10 justify-evenly xl:items-start w-full mt-20">
              <div className="relative flex w-full xl:w-1/5 flex-col items-center px-3 py-10  border rounded-lg border-secondary">
                {/* <h2 className="uppercase text-white font-bold md:text-[60px] text-[40px] mandaFont">
                  ORARI
                </h2> */}
                <BsClockHistory size={40} className="text-secondary absolute top-[-20px] bg-backgroundColor"/>
                <span className="uppercase text-white font-bold md:text-[25px] text-[20px] mandaFont mt-3">
                  mattina: 9:00 - 13:00
                </span>
                <span className="uppercase text-white font-bold md:text-[25px] text-[20px] mandaFont mt-2">
                  pomeriggio: 13:00 - 18:00
                </span>
              </div>
              <div className="relative flex w-full xl:w-1/5 flex-col items-center px-3 py-10  border rounded-lg border-secondary">
                {/* <h2 className="uppercase text-white font-bold md:text-[60px] text-[40px] mandaFont">
                  STAGIONE
                </h2> */}
                <IoCalendarOutline size={40} className="text-secondary absolute top-[-20px] bg-backgroundColor"/>
                <span className="uppercase text-white font-bold md:text-[25px] text-[20px] mandaFont mt-3">
                  apertura: 25 luglio
                </span>
                <span className="uppercase text-white font-bold md:text-[25px] text-[20px] mandaFont mt-2">
                  chiusura: 30 settembre
                </span>
              </div>
              <div className="relative flex w-full xl:w-1/5 flex-col items-center px-3 py-10  border rounded-lg border-secondary">
                {/* <h2 className="uppercase text-white font-bold md:text-[60px] text-[40px] mandaFont">
                  COSTI
                </h2> */}
                <AiOutlineEuro size={40} className="text-secondary absolute top-[-20px] bg-backgroundColor"/>
                <span className="uppercase text-white font-bold md:text-[25px] text-[20px] mandaFont mt-2">
                  mezza giornata: 5€
                </span>
                <span className="uppercase text-white font-bold md:text-[25px] text-[20px] mandaFont mt-2">
                  Giornata intera: 8€
                </span>
              </div>
              <div className="relative w-full xl:w-1/5 flex flex-col items-center px-3 py-10  border rounded-lg border-secondary">
                {/* <h2 className="uppercase text-white font-bold md:text-[60px] text-[40px] mandaFont">
                  Disponibilità
                </h2> */}
                <FaUmbrellaBeach size={40} className="text-secondary absolute top-[-20px] bg-backgroundColor"/>
                <span className="uppercase text-white font-bold md:text-[25px] text-[20px] mandaFont mt-3">
                  ombrelloni: 20
                </span>
                <span className="uppercase text-white font-bold md:text-[25px] text-[20px] mandaFont mt-2">
                  lettini: 40
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center w-1/2 mt-20">
          <label className="input relative focus-within:shadow-2xl lg:w-1/4  w-full focus-within:shadow-secondary input-bordered bg-transparent border border-secondary flex items-center gap-2">
            <input
              type="number"
              className="grow placeholder:text-secondary text-secondary"
              placeholder="Numero Ombrelloni"
              min={1}
              max={20}
              defaultValue={numOmbrelloni}
              onChange={(e) => {
                setnumOmbrelloni(parseInt(e.target.value));
              }}
            />
            <span className="absolute px-1 font-bold top-[-10px] bg-backgroundColor text-sm text-secondary">Num. Ombrelloni</span>
            <FaUmbrellaBeach className="text-secondary" />
          </label>
          <label className="input relative focus-within:shadow-2xl lg:w-1/4 w-full focus-within:shadow-secondary input-bordered bg-transparent border border-secondary flex items-center gap-2">
            <input
              type="number"
              className="grow placeholder:text-secondary text-secondary"
              placeholder="Numero Lettini"
              min={1}
              max={40}
              defaultValue={numLettini}
              onChange={(e) => {
                setnumLettini(parseInt(e.target.value));
              }}
            />
            <span className="absolute px-1 font-bold top-[-10px] bg-backgroundColor text-sm text-secondary">Num. Lettini</span>
            <GiBed className="text-secondary" size={20} />
          </label>
          <label className="input relative focus-within:shadow-2xl lg:w-1/4 w-full focus-within:shadow-secondary input-bordered bg-transparent border border-secondary flex items-center gap-2">
            <input
              type="date"
              className="grow placeholder:text-secondary text-secondary"
              placeholder="Numero Lettini"
              defaultValue={data}
              onChange={(e) => {
                console.log(e.currentTarget.value);
                setData(e.currentTarget.value);
                //setnumLettini(parseInt(e.target.value))
              }}
            />
            {/* <GiBed className="text-secondary" size={20}/> */}
            <span className="absolute px-1 font-bold top-[-10px] bg-backgroundColor text-sm text-secondary">Data</span>
          </label>
        </div>
        <button
            className="rounded-xl mt-10 w-1/2 disabled:opacity-40 flex items-center justify-center flex-row gap-4 px-2 md:w-1/4 py-2 border-[1px] border-secondary text-secondary text-xl hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer"
            disabled={numLettini===0 || numOmbrelloni===0 || !data}
            onClick={() => {
              if (data) {
                let dataArray = data?.split("-");
                let text = `Salve, è possibile prenotare *${numOmbrelloni}* ombrelloni e *${numLettini}* lettini per il giorno *${
                  dataArray[2]}/${dataArray[1]}/${dataArray[0]}*?`;
                // if (navigator.userAgent.includes("WhatsApp")) {
                //   // WhatsApp is installed
                //   window.open(`whatsapp://send?phone=+393283108595&text=${text}`);
                //   setData(undefined)
                //   setnumLettini(undefined)
                //   setnumOmbrelloni(undefined)
                // } else {
                //   // WhatsApp is not installed, open WhatsApp Web
                //   //window.open('https://web.whatsapp.com/send?phone=3283108595', '_blank');
                //   window.open(`https://web.whatsapp.com/send?phone=+393283108595&text=${text}`);
                //   setData(undefined)
                //   setnumLettini(undefined)
                //   setnumOmbrelloni(undefined)
                // }
                window.open(`whatsapp://send?phone=+393283108595&text=${text}`);
                  setData(undefined)
                  setnumLettini(0)
                  setnumOmbrelloni(0)
              }
            }}
          >
            <span className="text-sm">Prenota</span>
          </button>
      </div>
    </div>
  );
}
