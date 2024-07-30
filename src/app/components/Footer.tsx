"use client";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { IoIosCall, IoIosPin } from "react-icons/io";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import logo from "../../../public/logomanda.png";
import Link from "next/link";

export default function Footer() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="footer relative overflow-x-hidden flex flex-col">
      <Image
        src="/footer-bg-long-2-scaled.jpg"
        alt="alt"
        width={4645}
        height={355}
        className="absolute top-0 left-0 footerAnimation z-10 max-w-[4645px] max-h-[355px] opacity-30"
      />
      <div className="xl:px-96  lg:px-10 w-full flex xl:flex-row flex-col gap-10 xl:justify-evenly items-center relative z-20 pt-[10px]">
        <Image src={logo} alt="alt" className="xl:w-1/5 w-1/3" />
        <span className="text-secondary xl:w-1/4 w-1/2 text-sm text-justify">
          Goditi un'estate indimenticabile presso la
          nostra piscina con vista mozzafiato sulle montagne. MANDA SUMMER POOL è
          il luogo perfetto per te. Vieni a trovarci e vivi un'esperienza unica,
          dove natura e benessere si incontrano!
        </span>
        <div className="flex flex-col items-center gap-4 text-white xl:w-1/4 w-1/2">
          <div className="flex flex-row gap-2 items-center">
            <IoIosCall size={25} className="text-primary" />
            <Link href="tel:+393293306094" className="md:text-base text-sm">
              +39 3293306094
            </Link>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <IoIosCall size={25} className="text-primary" />
            <Link href="tel:+393293306094" className="md:text-base text-sm">
              +39 3283108595
            </Link>
          </div>
          <Link
            href="https://maps.app.goo.gl/Tm4bBPiGBShiioFp9"
            className="flex flex-row gap-2 items-center"
          >
            <IoIosPin size={25} className="text-primary" />
            <span className="md:text-base text-sm">
              Rione Frentano 4 Palena
            </span>
          </Link>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center xl:w-1/4 w-1/2">
          <Link
            href="https://www.facebook.com/people/Manda-Summer-Pool/61562635065987/"
            className="p-2 bg-secondary"
          >
            <TiSocialFacebook className="text-blue-950" size={30} />
          </Link>
          <Link
            href="https://www.instagram.com/manda_summerpool/"
            className="p-2 bg-secondary"
          >
            <FaInstagram className="text-blue-950" size={30} />
          </Link>
          {/* <div className="p-2 bg-secondary">
                <FaTiktok className="text-blue-950" size={30}/>
            </div>
            <div className="p-2 bg-secondary">
                <FaYoutube className="text-blue-950" size={30}/>
            </div> */}
        </div>
      </div>
      <div className="flex xl:px-96 flex-row justify-between pb-10 relative z-20 w-full px-10 mb-20 xl:mb-0">
        <span className="text-white text-sm">
          Mandaworld © All Rights Reserved - {new Date().getFullYear()}
        </span>
        <div className="flex flex-col items-center hover:cursor-pointer hover:opacity-60">
          <button
            className="h-[30px] flex flex-col items-center"
            onClick={() => {
              scrollToTop();
            }}
          >
            <Image src="/disco.gif" alt="alt" width={50} height={50} />
            <span className=" text-secondary text-xl mandaFont">go top</span>
          </button>
        </div>
      </div>
    </div>
  );
}
