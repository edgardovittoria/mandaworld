import { ImgEvento } from "@/app/model/model";

export let immaginiEventi:ImgEvento[] = [
    {id:0, src: "/eventi/evento1.jpeg", giorno: 10, mese: "AGO", nome: "nome evento", start: "17:00", alt: "nome evento", width: 370, height:370},
    // {id:1, src: "/eventi/evento2.jpg", giorno: 12, mese: "AGO", nome: "nome evento", start: "12:00", alt: "nome evento", width: 370, height:370},
    // {id:2, src: "/eventi/evento3.jpg", giorno: 15, mese: "AGO", nome: "nome evento", start: "11:00", alt: "nome evento", width: 370, height:370},
    // {id:3, src: "/eventi/evento4.jpg", giorno: 18, mese: "AGO", nome: "nome evento", start: "22:00", alt: "nome evento", width: 370, height:370},
    // {id:4, src: "/eventi/evento4.jpg", giorno: 18, mese: "AGO", nome: "nome evento", start: "22:00", alt: "nome evento", width: 370, height:370},
    // {id:5, src: "/eventi/evento4.jpg", giorno: 18, mese: "AGO", nome: "nome evento", start: "22:00", alt: "nome evento", width: 370, height:370},
]

export async function fetchImagesEventi() {
    return immaginiEventi;
}