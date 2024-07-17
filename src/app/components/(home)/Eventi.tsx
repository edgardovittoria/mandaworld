import Image from "next/image";
import Carousel from "../(ui)/Carousel";
import wawesPad from "../../../../public/waves-pad.png"
import CarouselMobile from "../(ui)/CarouselMobile";
export default function Welcome() {
  return (
    <div className="w-full pt-20 relative" id="eventi">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col items-center gap-5 text-center w-3/4">
          <div className="flex flex-col leading-[.8] items-center">
            <span className="uppercase text-secondary font-bold text-base mandaFont mb-2">
              Manda world
            </span>
            <h1 className="uppercase text-white font-bold mandaFont">
              Eventi
            </h1>
            <Image src="/line-white.png" alt="alt" width={120} height={120} />
          </div>
          <Carousel />
          <CarouselMobile/>
        </div>
      </div>
      <Image src={wawesPad} alt="alt" className="mt-[-150px]"/>
    </div>
  );
}
