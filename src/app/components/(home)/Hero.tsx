import Image from "next/image";
import logoscuro from '../../../../public/logomandabluscuro.png'
export default function Hero() {
    return (
        <div id="home" className="w-full h-[100vh] flex flex-row justify-center items-center hero relative">
            <div className="flex flex-col items-center gap-5 text-center w-1/2 z-50">
                <span className="uppercase text-secondary font-bold text-2xl mandaFont">Palena</span>
                <div className="flex flex-col leading-[.8]">
                    <h1 className="uppercase text-primary font-bold text-[140px] mandaFont">Manda World</h1>
                    <h2 className="uppercase text-white font-bold text-[100px] mandaFont">Divertiti con noi</h2>
                </div>
                <p className="text-white text-lg font-thin w-2/3">
                    Scopri i nostri spazi e lasciati trasportare dell'atmosfera di divertimento che si respira nel mondo MANDA.
                </p>
            </div>
            {/* <Image src={logoscuro} alt="alt" className="w-[45%] absolute top-10 right-1/2 translate-x-1/2 boxShadowAnimation rounded-full" /> */}
        </div>
    );
}