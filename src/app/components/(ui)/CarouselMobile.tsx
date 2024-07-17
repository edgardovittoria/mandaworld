import Image from "next/image";
import evento1 from "../../../../public/evento1.jpg";
import evento2 from "../../../../public/evento2.jpg";
import evento3 from "../../../../public/evento3.jpg";
import evento4 from "../../../../public/evento4.jpg";

export default function CarouselMobile() {
  return (
    <div className="xl:hidden carousel carousel-center bg-transparent rounded-box max-w-md space-x-4 p-4 z-20">
      <div className="border border-pink-300 rounded-2xl relative w-[90%] carousel-item">
        <Image
          src={evento1}
          alt="alt"
          className="rounded-2xl  border border-pink-300"
        />
        <div className="rounded-2xl border border-pink-300 w-full h-full absolute top-0 bg-backgroundColor opacity-40" />
        <div className="rounded-2xl border border-pink-300 w-full h-full absolute top-0 flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col justify-center items-center leading-[70px]">
            <span className="text-white z-20 mandaFont uppercase text-[100px]">
              10
            </span>
            <span className="text-white z-20 mandaFont uppercase text-[100px]">
              AGO
            </span>
          </div>
          <div className="flex flex-col justify-center items-center leading-7">
            <span className="text-white z-20 mandaFont uppercase text-[30px]">
              Nome evento
            </span>
            <span className="text-white z-20 mandaFont uppercase text-[30px]">
              Satrt: 17:00
            </span>
          </div>
        </div>
      </div>
      <div className=" border border-pink-300 rounded-2xl relative w-[90%] carousel-item">
        <Image
          src={evento2}
          alt="alt"
          className="rounded-2xl   border border-pink-300"
        />
        <div className="rounded-2xl border border-pink-300 w-full h-full absolute top-0 bg-backgroundColor opacity-40" />
        <div className="rounded-2xl border border-pink-300 w-full h-full absolute top-0 flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col justify-center items-center leading-[70px]">
            <span className="text-white z-20 mandaFont uppercase text-[100px]">
              12
            </span>
            <span className="text-white z-20 mandaFont uppercase text-[100px]">
              AGO
            </span>
          </div>
          <div className="flex flex-col justify-center items-center leading-7">
            <span className="text-white z-20 mandaFont uppercase text-[30px]">
              Nome evento
            </span>
            <span className="text-white z-20 mandaFont uppercase text-[30px]">
              Satrt: 17:00
            </span>
          </div>
        </div>
      </div>
      <div className=" border border-pink-300 rounded-2xl relative w-[90%] carousel-item">
        <Image
          src={evento3}
          alt="alt"
          className="rounded-2xl  border border-pink-300"
        />
        <div className="rounded-2xl  border border-pink-300 w-full h-full absolute top-0 bg-backgroundColor opacity-40" />
        <div className="rounded-2xl  border border-pink-300 w-full h-full absolute top-0 flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col justify-center items-center leading-[70px]">
            <span className="text-white z-20 mandaFont uppercase text-[100px]">
              15
            </span>
            <span className="text-white z-20 mandaFont uppercase text-[100px]">
              AGO
            </span>
          </div>
          <div className="flex flex-col justify-center items-center leading-7">
            <span className="text-white z-20 mandaFont uppercase text-[30px]">
              Nome evento
            </span>
            <span className="text-white z-20 mandaFont uppercase text-[30px]">
              Satrt: 22:00
            </span>
          </div>
        </div>
      </div>
      <div className=" border border-pink-300 rounded-2xl relative w-[90%] carousel-item">
        <Image
          src={evento4}
          alt="alt"
          className="rounded-2xl  border border-pink-300"
        />
        <div className="rounded-2xl border-pink-300 w-full h-full absolute top-0 bg-backgroundColor opacity-40" />
        <div className="rounded-2xl border-pink-300 w-full h-full absolute top-0 flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col justify-center items-center leading-[70px]">
            <span className="text-white z-20 mandaFont uppercase text-[100px]">
              20
            </span>
            <span className="text-white z-20 mandaFont uppercase text-[100px]">
              AGO
            </span>
          </div>
          <div className="flex flex-col justify-center items-center leading-7">
            <span className="text-white z-20 mandaFont uppercase text-[30px]">
              Nome evento
            </span>
            <span className="text-white z-20 mandaFont uppercase text-[30px]">
              Satrt: 22:00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
