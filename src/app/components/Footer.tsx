'use client'
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { IoIosCall, IoIosPin } from "react-icons/io";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

export default function Footer() {
const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="footer relative overflow-x-hidden">
      <Image
        src="/footer-bg-long-2-scaled.jpg"
        alt="alt"
        width={4645}
        height={355}
        className="absolute top-0 left-0 footerAnimation z-10 max-w-[4645px] max-h-[355px] opacity-30"
      />
      <div className="px-96 flex flex-row gap-10 justify-evenly items-center relative z-50 pt-[80px] pb-[85px]">
        <div className="flex flex-row items-center gap-8 w-1/4">
          <Image src="/logo.png" alt="alt" width={100} height={100} />
          <Image src="/mandaworld.png" alt="alt" width={100} height={100} />
        </div>
        <span className="text-secondary w-1/4">
          Praesent vel lectus eget turpis aliquam commodo. Aenean pharetra
          lobortis enim at aliquet. Nam sit amet molestie urna, at luctus lorem.
          Vestibulum at consectetur libero.
        </span>
        <div className="flex flex-col gap-4 text-white w-1/4">
            <div className="flex flex-row gap-2 items-center">
                <IoIosCall size={25} className="text-primary"/>
                <span>+39 3983930391</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <FaWhatsapp size={25} className="text-primary"/>
                <span>+39 3983930391</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <IoIosPin size={25} className="text-primary"/>
                <span>Rione Frentano, 4, 66017 Palena CH</span>
            </div>
        </div>
        <div className="flex flex-row gap-3 items-center w-1/4">
            <div className="p-2 bg-secondary">
                <TiSocialFacebook className="text-blue-950" size={30}/>
            </div>
            <div className="p-2 bg-secondary">
                <FaInstagram className="text-blue-950" size={30}/>
            </div>
            <div className="p-2 bg-secondary">
                <FaThreads className="text-blue-950" size={30}/>
            </div>
            <div className="p-2 bg-secondary">
                <FaYoutube className="text-blue-950" size={30}/>
            </div>
        </div>
      </div>
      <div className="flex px-96 flex-row justify-between py-4 pb-10 relative z-50">
        <span className="text-white">Mandaworld © All Rights Reserved - {new Date().getFullYear()}</span>
        <div
          className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
        >
          <button className="h-[30px] flex flex-col items-center"
            onClick={() => {
                scrollToTop()
            }}
          >
            <Image src="/disco.gif" alt="alt" width={50} height={50} />
            <span className=" text-secondary text-xl mandaFont">
              go top
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
