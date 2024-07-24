"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImgEvento, ImgPiscina } from "@/app/model/model";
import { fetchImagesEventi } from "@/data/immaginiEventi";

export interface CarouselProps {
  images: ImgEvento[] | ImgPiscina[];
  section: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, section }) => {
  return (
    <div className="hidden xl:carousel xl:rounded-box xl:space-x-10 overflow-x-visible">
      {images.map((img) => (
        <div className="carousel-item" id={`slide${img.id%3}`}>
          <div className="border rounded-2xl relative">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="rounded-2xl border"
            />
            <div className="rounded-2xl border w-full h-full absolute top-0 bg-backgroundColor opacity-40" />
            {section === "eventi" && (
              <div className="rounded-2xl border w-full h-full absolute top-0 flex flex-col gap-10 items-center justify-center">
                <div className="flex flex-col justify-center items-center leading-[70px]">
                  <span className="text-white z-20 mandaFont uppercase text-[100px]">
                    {(img as ImgEvento).giorno}
                  </span>
                  <span className="text-white z-20 mandaFont uppercase text-[100px]">
                    {(img as ImgEvento).mese}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center leading-7">
                  <span className="text-white z-20 mandaFont uppercase text-[30px]">
                    {(img as ImgEvento).nome}
                  </span>
                  <span className="text-white z-20 mandaFont uppercase text-[30px]">
                    Satrt: {(img as ImgEvento).start}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
