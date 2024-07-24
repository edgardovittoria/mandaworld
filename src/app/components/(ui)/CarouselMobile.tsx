import Image from "next/image";
import evento1 from "../../../../public/eventi/evento1.jpg";
import evento2 from "../../../../public/eventi/evento2.jpg";
import evento3 from "../../../../public/eventi/evento3.jpg";
import evento4 from "../../../../public/eventi/evento4.jpg";
import { ImgEvento, ImgPiscina } from "@/app/model/model";

export interface CarouselMobileProps {
  images: ImgPiscina[] | ImgEvento[]
  section: string
}

const CarouselMobile:React.FC<CarouselMobileProps> = ({images, section}) => {
  return (
    <div className="xl:hidden carousel carousel-center bg-transparent rounded-box max-w-md space-x-4 p-4 z-20">
      {images.map(img => (
        <div className="border rounded-2xl relative w-[90%] carousel-item">
        <Image
          src={img.src}
          alt={img.alt}
          className="rounded-2xl  border"
          width={img.width}
          height={img.height}
        />
        <div className="rounded-2xl border w-full h-full absolute top-0 bg-backgroundColor opacity-40" />
        {section === "eventi" &&
          <div className="rounded-2xl border w-full h-full absolute top-0 flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col justify-center items-center leading-[70px]">
            <span className="text-white z-20 mandaFont uppercase text-[80px]">
              {(img as ImgEvento).giorno}
            </span>
            <span className="text-white z-20 mandaFont uppercase text-[80px]">
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
        }
      </div>
      ))}
    </div>
  );
}

export default CarouselMobile
