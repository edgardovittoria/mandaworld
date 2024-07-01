import Image from "next/image";
import { FaFacebookMessenger, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

export default function Contatti() {
  return (
    <div id="contatti" className="w-full py-20">
      <div className="flex flex-col  items-center gap-8">
        <div className="flex flex-col items-center gap-5 text-center w-3/4">
          <div className="flex flex-col leading-[.8] items-center">
            <span className="uppercase text-primary font-bold text-base mandaFont mb-2">
              Manda world
            </span>
            <h1 className="uppercase text-white font-bold text-[100px] mandaFont">
              Contatti
            </h1>
            <Image src="/line.png" alt="alt" width={120} height={120} />
          </div>
          <p className="text-white text-xl font-thin">
            Contattaci attraverso i nostri canali social
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[200px] mt-20">
          <div className="flex flex-col gap-4 items-center">
            <span className="text-secondary text-xl">WhatsApp</span>
            <div className="p-10 border-[2px] border-secondary text-secondary rounded-xl hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer shadow-secondary shadow-2xl">
              <FaWhatsapp size={80} />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <span className="text-secondary text-xl">Instagram</span>
            <div className="p-10 border-[2px] border-secondary text-secondary rounded-xl hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer shadow-secondary shadow-2xl">
              <FaInstagram size={80} />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <span className="text-secondary text-xl">Messenger</span>
            <div className="p-10 border-[2px] border-secondary text-secondary rounded-xl hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer shadow-secondary shadow-2xl">
              <FaFacebookMessenger size={80} />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <span className="text-secondary text-xl">Telegram</span>
            <div className="p-10 border-[2px] border-secondary text-secondary rounded-xl hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer shadow-secondary shadow-2xl">
              <FaTelegram size={80} />
            </div>
          </div>
        </div>
        <button className="rounded-xl flex items-center justify-center flex-row gap-4 px-2 w-1/3 py-3 border-[2px] border-secondary text-secondary text-2xl mt-20 hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer shadow-secondary shadow-lg">
          <IoIosCall size={30} />
          <span>CHIAMA</span>
        </button>
      </div>
    </div>
  );
}
