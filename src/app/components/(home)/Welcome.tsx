import Image from "next/image";

export default function Welcome() {
  return (
    <div className="welcomeContainer w-full py-20 relative">
      <div className="h-[120vh] welcome flex flex-col  items-center gap-8">
        <div className="flex flex-col items-center gap-5 text-center w-3/4">
          <div className="flex flex-col leading-[.8] items-center">
            <span className="uppercase text-primary font-bold text-base mandaFont mb-2">
              Welcome
            </span>
            <h1 className="uppercase text-white font-bold text-[30px] mandaFont">
              About manda club
            </h1>
            <Image src="/line.png" alt="alt" width={120} height={120} />
          </div>
          <p className="text-white text-xl font-thin">
            Scopri i nostri spazi e lasciati trasportare dell'atmosfera di
            divertimento che si respira nel mondo MANDA.
          </p>
        </div>
      </div>
      <Image src="/blog6.jpg" alt="alt" width={900} height={600} className="absolute bottom-[-100px] right-1/2 translate-x-1/2 rounded-3xl border-2 border-secondary shadow-secondary shadow-2xl"/>
      <div className="absolute bg-black opacity-50 w-[900px] h-[600px] bottom-[-100px] right-1/2 translate-x-1/2 shadow-2xl rounded-3xl border-2 border-secondary shadow-secondary"/>
    </div>
  );
}
