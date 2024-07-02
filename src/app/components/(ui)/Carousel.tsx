import Image from 'next/image'
import evento1 from '../../../../public/evento1.jpg'
import evento2 from '../../../../public/evento2.jpg'
import evento3 from '../../../../public/evento3.jpg'
import evento4 from '../../../../public/evento4.jpg'

export default function Carousel() {
    return (
    <div className="grid grid-cols-4 gap-10 pt-20">
        <div className="shadow-backgroundColor shadow-2xl rounded-2xl relative">
            <Image src={evento1} alt="alt" className='rounded-2xl shadow-backgroundColor shadow-2xl'/>
            <div className="rounded-2xl shadow-backgroundColor shadow-2xl w-full h-full absolute top-0 bg-backgroundColor opacity-30"/>
            <div className="rounded-2xl shadow-backgroundColor shadow-2xl w-full h-full absolute top-0 flex flex-col gap-0 leading-[70px] items-center justify-center">
                <span className='text-white z-50 mandaFont text-[100px]'>06</span>
                <span className='text-white z-50 mandaFont text-[100px]'>AGO</span>
            </div>
        </div>
        <div className="shadow-backgroundColor shadow-2xl rounded-2xl relative">
            <Image src={evento2} alt="alt" className='rounded-2xl shadow-backgroundColor shadow-2xl'/>
            <div className="rounded-2xl shadow-backgroundColor shadow-2xl w-full h-full absolute top-0 bg-backgroundColor opacity-30"/>
            <div className="rounded-2xl shadow-backgroundColor shadow-2xl w-full h-full absolute top-0 flex flex-col gap-0 leading-[70px] items-center justify-center">
                <span className='text-white z-50 mandaFont text-[100px]'>10</span>
                <span className='text-white z-50 mandaFont text-[100px]'>AGO</span>
            </div>
        </div>
        <div className="shadow-backgroundColor shadow-2xl rounded-2xl relative">
            <Image src={evento3} alt="alt" className='rounded-2xl shadow-backgroundColor shadow-2xl'/>
            <div className="rounded-2xl shadow-backgroundColor shadow-2xl w-full h-full absolute top-0 bg-backgroundColor opacity-30"/>
            <div className="rounded-2xl shadow-backgroundColor shadow-2xl w-full h-full absolute top-0 flex flex-col gap-0 leading-[70px] items-center justify-center">
                <span className='text-white z-50 mandaFont text-[100px]'>15</span>
                <span className='text-white z-50 mandaFont text-[100px]'>AGO</span>
            </div>
        </div>
        <div className="shadow-backgroundColor shadow-2xl rounded-2xl relative">
            <Image src={evento4} alt="alt" className='rounded-2xl shadow-backgroundColor shadow-2xl'/>
            <div className="rounded-2xl shadow-backgroundColor shadow-2xl w-full h-full absolute top-0 bg-backgroundColor opacity-30"/>
            <div className="rounded-2xl shadow-backgroundColor shadow-2xl w-full h-full absolute top-0 flex flex-col gap-0 leading-[70px] items-center justify-center">
                <span className='text-white z-50 mandaFont text-[100px]'>17</span>
                <span className='text-white z-50 mandaFont text-[100px]'>AGO</span>
            </div>
        </div>
    </div>
    )
}