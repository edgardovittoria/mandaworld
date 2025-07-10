"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoscrittamanda from '../../../../public/logo_esteso_no_BKG.png';
import { DesktopMenu } from "./components/DesktopMenu";
import { MobileMenu } from "./components/MobileMenu";
import { LogIn, LogOut } from "lucide-react";

export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState<string>("Home");
  const { data: session } = useSession();

  return (
    <>
      <div className="hidden xl:inline-flex xl:px-24 xl:flex-row xl:justify-between xl:items-center xl:w-full xl:py-4 xl:navbar xl:z-50">
        <div className="hidden xl:flex xl:flex-row xl:items-center xl:gap-8 xl:relative xl:z-50">
          <Image src={logoscrittamanda} alt="Logo MandaWorld" className="w-1/3" />
        </div>

        <div className="flex flex-row items-center gap-6">
          <DesktopMenu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="btn-neon border-pink-500"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          ) : (
            <Link href="/login" className="btn-neon border-cyan-400">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          )}
        </div>
      </div>

      <MobileMenu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
}
