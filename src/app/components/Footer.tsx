'use client';

import Image from "next/image";
import { IoIosCall, IoIosPin } from "react-icons/io";
import logo from "../../../public/logomanda.png";
import Link from "next/link";
import FooterInfoBlock from "./FooterInfoBlock";

export default function Footer() {
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="footer relative overflow-x-hidden flex flex-col">
      {/* Sfondo animato */}
      <Image
        src="/footer-bg-long-2-scaled.jpg"
        alt="footer background"
        width={4645}
        height={355}
        className="absolute top-0 left-0 footerAnimation z-10 max-w-[4645px] max-h-[355px] opacity-30"
      />

      {/* Contenuto principale */}
      <div className="xl:px-96 lg:px-10 w-full flex xl:flex-row flex-col gap-10 xl:justify-evenly items-center relative z-20 pt-[10px]">
        <Image src={logo} alt="Logo Manda" className="xl:w-1/5 w-1/3" />
        <FooterInfoBlock />
      </div>

      {/* Copyright e go-top */}
      <div className="flex xl:px-96 flex-row justify-between pb-10 relative z-20 w-full px-10 mb-20 xl:mb-0">
        <span className="text-white text-sm">
          Mandaworld © All Rights Reserved - {new Date().getFullYear()}
        </span>
        <div className="flex flex-col items-center hover:cursor-pointer hover:opacity-60">
          <button
            className="h-[30px] flex flex-col items-center"
            onClick={scrollToTop}
          >
            <Image src="/disco.gif" alt="go top" width={50} height={50} unoptimized />
            <span className="text-secondary text-xl mandaFont">go top</span>
          </button>
        </div>
      </div>
    </div>
  );
}
