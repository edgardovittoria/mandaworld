'use client';

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { IoIosCall, IoIosPin } from "react-icons/io";

interface FooterItem {
  id: string;
  label: string;
  content: string;
  tipo: string;
  order_index: number;
  visibile: boolean;
}

export default function FooterInfoBlock() {
  const [items, setItems] = useState<FooterItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("footer_info")
        .select("*")
        .eq("visibile", true)
        .order("order_index", { ascending: true });

      if (!error && data) setItems(data);
    };

    fetchData();
  }, []);

  const description = items.find((i) => i.tipo === "text");
  const phones = items.filter((i) => i.tipo === "tel");
  const links = items.filter((i) => i.tipo === "link");
  const socials = items.filter((i) => i.tipo === "social");

  return (
    <>
      {/* Descrizione */}
      {description && (
        <span className="text-secondary xl:w-1/4 w-1/2 text-sm text-justify">
          {description.content}
        </span>
      )}

      {/* Telefono e indirizzo */}
      <div className="flex flex-col items-center gap-4 text-white xl:w-1/4 w-1/2">
        {phones.map((p) => (
          <div key={p.id} className="flex flex-row gap-2 items-center">
            <IoIosCall size={25} className="text-primary" />
            <Link href={`tel:${p.content}`} className="md:text-base text-sm">
              {p.content}
            </Link>
          </div>
        ))}

        {links.map((l) => (
          <Link key={l.id} href={l.content} className="flex flex-row gap-2 items-center">
            <IoIosPin size={25} className="text-primary" />
            <span className="md:text-base text-sm">{l.label}</span>
          </Link>
        ))}
      </div>

      {/* Social */}
      <div className="flex flex-row gap-3 justify-center items-center xl:w-1/4 w-1/2">
        {socials.map((s) => (
          <Link key={s.id} href={s.content} className="p-2 bg-secondary">
            {s.label.toLowerCase().includes("instagram") && <FaInstagram className="text-blue-950" size={30} />}
            {s.label.toLowerCase().includes("facebook") && <FaFacebook className="text-blue-950" size={30} />}
            {s.label.toLowerCase().includes("whatsapp") && <FaWhatsapp className="text-blue-950" size={30} />}
          </Link>
        ))}
      </div>
    </>
  );
}
