import Image from "next/image";

export default function Piscina() {
  return (
    <div id="piscina" className="w-full pb-20 bg-backgroundColor">
      <div className="h-[80vh] flex flex-col  items-center gap-8">
        <div className="flex flex-col items-center gap-5 text-center w-3/4 xl:mt-24">
          <div className="flex flex-col leading-[.8] items-center">
            <span className="uppercase text-primary font-bold text-base mandaFont mb-2">
              Manda world
            </span>
            <h1 className="uppercase text-white font-bold text-[100px] mandaFont">
              Piscina
            </h1>
            <Image src="/line.png" alt="alt" width={120} height={120}/>
          </div>
          <p className="text-white text-xl font-thin">
            Scopri i nostri spazi e lasciati trasportare dell'atmosfera di
            divertimento che si respira nel mondo MANDA.
          </p>
        </div>
      </div>
    </div>
  );
}