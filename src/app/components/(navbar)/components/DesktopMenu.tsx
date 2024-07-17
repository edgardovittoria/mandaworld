'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface DesktopMenuProps{
    selectedItem: string, 
    setSelectedItem: (v:string) => void
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({selectedItem, setSelectedItem}) => {

  return (
    <>
      <div className="hidden xl:flex xl:flex-row xl:items-center xl:gap-10 xl:relative xl:z-20">
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
    </>
  );
}
