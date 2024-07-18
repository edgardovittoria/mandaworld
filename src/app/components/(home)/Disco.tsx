import Image from "next/image";
import wawesPad from "../../../../public/waves-pad.png"


export default function Disco() {
  return (
    <div className="welcomeContainer w-full py-20 relative bg-gradient-to-b from-primary to-backgroundColor" id="disco">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-5 text-center w-3/4">
          <div className="flex flex-col leading-[.8] items-center">
            <div className="flex flex-col gap-0 items-center mb-20">
              <span className="uppercase text-secondary font-bold text-base mandaFont mb-2">
                Manda world
              </span>
              <h1 className="uppercase text-white font-bold mandaFont">
                DISCO
              </h1>
              <Image src="/line-white.png" alt="alt" width={120} height={120} />
            </div>
            <div className="relative">
              <Image
                src="/blog6.jpg"
                alt="alt"
                width={900}
                height={600}
                className="rounded-3xl border-2 border-[#AC094B] relative z-20 boxShadowAnimation"
              />
              <div className="absolute z-20 bg-black opacity-50 w-full h-full top-0 right-1/2 translate-x-1/2 rounded-3xl border-2 border-[#AC094B] flex flex-row justify-center items-center boxShadowAnimation" />
              <h1 className="absolute top-1/3 right-1/2 translate-x-1/2 z-20 w-full uppercase text-white font-bold mandaFont">
                coming soon...
              </h1>
              <span className="absolute top-1/2 right-1/2 translate-x-1/2 loading loading-spinner xl:w-[150px] md:w-[100px] w-[50px] z-20 text-white"></span>
            </div>
          </div>
        </div>
        <Image src={wawesPad} alt="alt" className="absolute top-1/2"/>
      </div>
    </div>
  );
}
