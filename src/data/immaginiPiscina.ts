import { ImgPiscina } from "@/app/model/model";

export let immaginiPiscina:ImgPiscina[] = [
    {id:0, src: "/piscina/piscina.jpg", alt: "piscina1" ,width: 500, height:522},
    {id:1, src: "/piscina/piscina.jpg", alt: "piscina1" ,width: 500, height:522},
    {id:2, src: "/piscina/piscina.jpg", alt: "piscina1" ,width: 500, height:522},
    {id:3, src: "/piscina/piscina.jpg", alt: "piscina1" ,width: 500, height:522},
]

export async function fetchImagesPiscina() {
    return immaginiPiscina;
}