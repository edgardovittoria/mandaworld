"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImgEvento, ImgPiscina } from "@/app/model/model";
import { fetchImagesEventi } from "@/data/immaginiEventi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export interface CarouselProps {
  images: ImgEvento[] | ImgPiscina[];
  section: string;
}

const MyCarousel: React.FC<CarouselProps> = ({ images, section }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <Carousel
      showArrows
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      centerSlidePercentage={33}
      centerMode
      selectedItem={1}
      renderArrowPrev={(clickHandler, hasNext, label) => {
        return (
          <>
            {hasNext && (
              <div
                className="absolute top-1/2 left-0 z-50 p-2 rounded-full bg-white"
                onClick={clickHandler}
              >
                <RiArrowLeftSLine color="#03051A" size="25px" />
              </div>
            )}
          </>
        );
      }}
      renderArrowNext={(clickHandler, hasNext, label) => {
        return (
          <>
            {hasNext && (
              <div
                className="absolute top-1/2 right-0 z-30 hover:cursor-pointer p-2 rounded-full bg-white"
                onClick={clickHandler}
              >
                <RiArrowRightSLine color="#03051A" size="25px" />
              </div>
            )}
          </>
        );
      }}
    >
      {images.map((img) => {
        return (
          <div key={img.id} className="w-full px-6">
            <div className={`border rounded-2xl relative`}>
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={`rounded-2xl border ${
                  section === "piscina" ? "aspect-square" : "aspect-auto h-full"
                }`}
              />
            </div>
          </div>
        );
      })}
    </Carousel>
    // <div className="hidden xl:carousel xl:rounded-box xl:space-x-10 overflow-x-visible mt-10">
    //   {images.map((img) => (
    // <div className="carousel-item" id={`slide${img.id%3}`}>
    //   <div className={`border rounded-2xl relative`}>
    //     <Image
    //       src={img.src}
    //       alt={img.alt}
    //       width={img.width}
    //       height={img.height}
    //       className={`rounded-2xl border ${section === 'piscina' ? 'aspect-square' : 'aspect-auto h-full'}`}
    //     />
    //   </div>
    // </div>
    //   ))}
    // </div>
  );
};

export default MyCarousel;
