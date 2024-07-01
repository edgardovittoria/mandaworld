"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState<string>("Home");
  return (
    <div className="inline-flex px-24 flex-row justify-between items-center w-full py-4 fixed top-0 navbar z-50">
      <div className="flex flex-row items-center gap-8 relative z-50">
        <Image src="/logo.png" alt="alt" width={100} height={100} />
        <Image src="/mandaworld.png" alt="alt" width={100} height={100} />
      </div>
      <div className="flex flex-row items-center gap-10 relative z-50">
        <Link
          href="/#home"
          className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
          onClick={() => {
            setSelectedItem("Home");
          }}
        >
          <div className="h-[30px] flex flex-col items-center">
            <span className="uppercase text-white text-2xl mandaFont">
              Home
            </span>
            {selectedItem === "Home" && (
              <Image src="/disco.gif" alt="alt" width={50} height={50} />
            )}
          </div>
        </Link>
        <Link
          href="/#piscina"
          className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
          onClick={() => {
            setSelectedItem("Piscina");
          }}
        >
          <div className="h-[30px] flex flex-col items-center">
            <span className="uppercase text-white text-2xl mandaFont">
              Piscina
            </span>
            {selectedItem === "Piscina" && (
              <Image src="/disco.gif" alt="alt" width={50} height={50} />
            )}
          </div>
        </Link>
        <Link
          href="/#disco"
          className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
          onClick={() => {
            setSelectedItem("Disco");
          }}
        >
          <div className="h-[30px] flex flex-col items-center">
            <span className="uppercase text-white text-2xl mandaFont">
              Disco
            </span>
            {selectedItem === "Disco" && (
              <Image src="/disco.gif" alt="alt" width={50} height={50} />
            )}
          </div>
        </Link>
        <Link
          href="/#eventi"
          className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
          onClick={() => {
            setSelectedItem("Eventi");
          }}
        >
            <div className="h-[30px] flex flex-col items-center">
          <span className="uppercase text-white text-2xl mandaFont">
            Eventi
          </span>
          {selectedItem === "Eventi" && (
            <Image src="/disco.gif" alt="alt" width={50} height={50} />
          )}
          </div>
        </Link>
        <Link
          href="/#contatti"
          className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
          onClick={() => {
            setSelectedItem("Contatti");
          }}
        >
            <div className="h-[30px] flex flex-col items-center">
          <span className="uppercase text-white text-2xl mandaFont">
            Contatti
          </span>
          {selectedItem === "Contatti" && (
            <Image src="/disco.gif" alt="alt" width={50} height={50} />
          )}
          </div>
        </Link>
      </div>
    </div>
  );
}
