'use client'
import Image from "next/image";
import { FaFacebookMessenger, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Contatti() {
  return (
    <div id="contatti" className="w-full py-20">
      <div className="flex flex-col  items-center gap-8">
        <div className="flex flex-col items-center gap-5 text-center w-3/4">
          <div className="flex flex-col leading-[.8] items-center">
            <span className="uppercase text-secondary font-bold text-base mandaFont mb-2">
              Manda world
            </span>
            <h1 className="uppercase text-white font-bold xl:text-[100px] lg:text-[60px] sm:text-[50px] text-[40px] mandaFont">
              Contatti
            </h1>
            <Image src="/line-white.png" alt="alt" width={120} height={120} />
          </div>
          <p className="text-white text-xl font-thin">
            Contattaci attraverso i nostri canali social
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 lg:gap-20 xl:gap-[200px] mt-10">
          <div className="flex flex-col gap-4 items-center" onClick={() => {
            window.open(`whatsapp://send?phone=+393293306094`);
          }}>
            <span className="text-secondary lg:text-xl">WhatsApp</span>
            <div className="lg:p-10 p-5 border-[2px] border-secondary text-secondary rounded-full hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer shadow-secondary shadow-lg">
              <FaWhatsapp className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]" />
            </div>
          </div>
          <Link href="https://www.instagram.com/manda_summerpool/" className="flex flex-col gap-4 items-center">
            <span className="text-secondary lg:text-xl">Instagram</span>
            <div className="lg:p-10 p-5 border-[2px] border-secondary text-secondary rounded-full hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer shadow-secondary shadow-lg">
              <FaInstagram className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]" />
            </div>
          </Link>
          <Link href="https://www.facebook.com/messages/t/391720900684752" className="flex flex-col gap-4 items-center">
            <span className="text-secondary lg:text-xl">Messenger</span>
            <div className="lg:p-10 p-5 border-[2px] border-secondary text-secondary rounded-full hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer shadow-secondary shadow-lg">
              <FaFacebookMessenger className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]" />
            </div>
          </Link>
          <Link href="https://t.me/+393293306094" className="flex flex-col gap-4 items-center">
            <span className="text-secondary lg:text-xl">Telegram</span>
            <div className="lg:p-10 p-5 border-[2px] border-secondary text-secondary rounded-full hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer shadow-secondary shadow-lg">
              <FaTelegram className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]" />
            </div>
          </Link>
        </div>
        <Link href="tel:+393293306094" className="rounded-full mb-20 xl:mb-0 flex items-center justify-center flex-row gap-4 md:w-1/3 w-2/3 lg:py-3 py-2 border-[2px] border-secondary text-secondary lg:text-2xl text-xl mt-10 lg:mt-20 hover:bg-secondary hover:text-backgroundColor hover:cursor-pointer">
          <IoIosCall className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]" />
          <span>CHIAMA</span>
        </Link>
      </div>
    </div>
  );
}
