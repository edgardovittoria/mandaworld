"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoscrittamanda from '../../../../public/logoscrittamanda.png'
import {DesktopMenu} from "./components/DesktopMenu";
import { MobileMenu } from "./components/MobileMenu";

export default function Navbar() {

  const [selectedItem, setselectedItem] = useState<string>("Home")

  return (
    <>
      <div className="hidden xl:inline-flex xl:px-24 xl:flex-row xl:justify-between xl:items-center xl:w-full xl:py-4 xl:navbar xl:z-50">
        <div className="hidden xl:flex xl:flex-row xl:items-center xl:gap-8 xl:relative xl:z-50">
          <Image src={logoscrittamanda} alt="alt" className="w-1/3"/>
          {/* <Image src="/mandaworld.png" alt="alt" width={100} height={100} /> */}
        </div>
        <DesktopMenu selectedItem={selectedItem} setSelectedItem={setselectedItem}/>
      </div>
      <MobileMenu selectedItem={selectedItem} setSelectedItem={setselectedItem}/>
    </>
    
  );
}
