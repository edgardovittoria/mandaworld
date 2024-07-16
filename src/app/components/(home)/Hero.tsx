import Image from "next/image";
import wawesPad from '../../../../public/waves-pad.png'
export default function Hero() {
    return (
        <div id="home" className="w-full h-[100vh] flex flex-row justify-center items-center hero relative">
            <div className="flex flex-col items-center gap-5 text-center w-1/2 z-50">
                <span className="uppercase text-secondary font-bold text-2xl mandaFont">Palena</span>
                <div className="flex flex-col leading-[.8]">
                    <h1 className="uppercase text-primary font-bold xl:text-[140px] md:text-[100px] text-[90px] mandaFont">Manda World</h1>
                    <h2 className="uppercase text-white font-bold xl:text-[100px] md:text-[80px] text-[60px] mandaFont">Divertiti con noi</h2>
                </div>
                <p className="text-white xl:text-lg font-thin w-2/3">
                    Scopri i nostri spazi e lasciati trasportare dell'atmosfera di divertimento che si respira nel mondo MANDA.
                </p>
            </div>
            <Image src={wawesPad} alt="alt" className="absolute right-0 top-1/2 translate-y-[-100px]"/>
            {/* <Image src={logoscuro} alt="alt" className="w-[45%] absolute top-10 right-1/2 translate-x-1/2 boxShadowAnimation rounded-full" /> */}
        </div>
    );
}