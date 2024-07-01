'use client'

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar(){
    const [selectedItem, setSelectedItem] = useState<string>("Home")
    return(
    <div className="inline-flex flex-row justify-between items-center px-10 w-full py-4">
        <div className="flex flex-row items-center gap-8">
            <Image src="/logo.png" alt="alt" width={100} height={100} />
            <Image src="/mandaworld.png" alt="alt" width={100} height={100} />
        </div>
        <div className="flex flex-row items-center gap-10">
            <div className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
                onClick={() => {
                    setSelectedItem("Home")
                }}
            >
                <span className='uppercase text-white text-2xl mandaFont'>Home</span>
                {selectedItem === "Home" && <hr className='border border-secondary w-full'/>}
            </div>
            <div className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
                onClick={() => {
                    setSelectedItem("Piscina")
                }}
            >
                <span className='uppercase text-white text-2xl mandaFont'>Piscina</span>
                {selectedItem === "Piscina" && <hr className='border border-secondary w-full'/>}
            </div>
            <div className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
                onClick={() => {
                    setSelectedItem("Disco")
                }}
            >
                <span className='uppercase text-white text-2xl mandaFont'>Disco</span>
                {selectedItem === "Disco" && <hr className='border border-secondary w-full'/>}
            </div>
            <div className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
                onClick={() => {
                    setSelectedItem("Eventi")
                }}
            >
                <span className='uppercase text-white text-2xl mandaFont'>Eventi</span>
                {selectedItem === "Eventi" && <hr className='border border-secondary w-full'/>}
            </div>
            <div className="flex flex-col items-center hover:cursor-pointer hover:opacity-60"
                onClick={() => {
                    setSelectedItem("Contatti")
                }}
            >
                <span className='uppercase text-white text-2xl mandaFont'>Contatti</span>
                {selectedItem === "Contatti" && <hr className='border border-secondary w-full'/>}
            </div>
        </div>
    </div>
    )
}