import React, { useState } from "react";
import Link from "next/link";
import { FaInfoCircle, FaPhoneVolume, FaProjectDiagram } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { HiSquare3Stack3D } from "react-icons/hi2";
import Image from "next/image";
import logo from "../../../../../public/logomanda.png";
import { RiShieldStarLine } from "react-icons/ri";

interface MobileMenuProps {
  selectedItem: string;
  setSelectedItem: (v: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <>
      <div className="xl:hidden block overflow-x-hidden fixed inset-x-0 bottom-0 bg-backgroundColor py-4 z-[100] w-full">
        <div className="flex px-2 items-center justify-evenly">
          <Link
            href="/#eventi"
            className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
            onClick={() => {
              setSelectedItem("Eventi");
            }}
          >
            <div className="h-[30px] flex flex-col items-center">
              <span className="uppercase text-white text-lg md:text-2xl mandaFont">
                Eventi
              </span>
              {selectedItem === "Eventi" && (
                <Image src="/disco.gif" alt="alt" width={30} height={50} />
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
              <span className="uppercase text-white text-lg md:text-2xl mandaFont">
                Piscina
              </span>
              {selectedItem === "Piscina" && (
                <Image src="/disco.gif" alt="alt" width={30} height={50} />
              )}
            </div>
          </Link>
          <Link
            href="/#home"
            className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
            onClick={() => {
              setSelectedItem("Home");
            }}
          >
            <Image src={logo} alt="alt" width={60}/>
          </Link>
          <Link
            href="/#disco"
            className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
            onClick={() => {
              setSelectedItem("Disco");
            }}
          >
            <div className="h-[30px] flex flex-col items-center">
              <span className="uppercase text-white text-lg md:text-2xl mandaFont">
                Disco
              </span>
              {selectedItem === "Disco" && (
                <Image src="/disco.gif" alt="alt" width={30} height={50} />
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
              <span className="uppercase text-white text-lg md:text-2xl mandaFont">
                Contatti
              </span>
              {selectedItem === "Contatti" && (
                <Image src="/disco.gif" alt="alt" width={30} height={50} />
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
