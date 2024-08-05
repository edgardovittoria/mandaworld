import { ImgPiscina } from "@/app/model/model";

export let immaginiPiscina:ImgPiscina[] = [
    {id:0, src: "/piscina/piscina0.jpeg", alt: "piscina1" ,width: 500, height:522},
    {id:1, src: "/piscina/piscina1.jpeg", alt: "piscina1" ,width: 500, height:522},
    // {id:2, src: "/piscina/piscina2.jpeg", alt: "piscina1" ,width: 500, height:522},
    {id:3, src: "/piscina/piscina3.jpeg", alt: "piscina1" ,width: 500, height:522},
    {id:4, src: "/piscina/piscina4.jpeg", alt: "piscina1" ,width: 500, height:522},
    {id:5, src: "/piscina/piscina5.jpeg", alt: "piscina1" ,width: 500, height:522},
    {id:6, src: "/piscina/piscina6.jpeg", alt: "piscina1" ,width: 500, height:522},
    {id:7, src: "/piscina/piscina7.jpeg", alt: "piscina1" ,width: 500, height:522},
    {id:8, src: "/piscina/piscina8.jpeg", alt: "piscina1" ,width: 500, height:522},
]

export async function fetchImagesPiscina() {
    return immaginiPiscina;
}