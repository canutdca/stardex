import { Item } from './../shared/item.model';

export class EspecieApi {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: string;      // url
    people: string[];
    films: string[];
    url: string;
    created: string;
    edited: string;
}

export class Especie {
    nombre: string;
    clasificacion: string;
    designacion: string;
    altura_media: number;
    edad_media: number;
    color_ojos: string;
    color_pelo: string;
    color_piel: string;
    idioma: string;
    planeta: Item;
    personajes: Array<Item>;
    peliculas: Array<Item>;
    url: string;
    creacion: string;
    edicion: string;


    constructor(ea: EspecieApi) {
        this.nombre = ea.name;
        this.clasificacion = ea.classification;
        this.designacion = ea.designation;
        this.altura_media = Number(ea.average_height);
        this.edad_media = Number(ea.average_lifespan);
        this.color_ojos = ea.eye_colors;
        this.color_pelo = ea.hair_colors;
        this.color_piel = ea.skin_colors;
        this.idioma = ea.language;
        this.planeta = new Item();
        this.personajes = Array<Item>();
        this.peliculas = Array<Item>();
        this.url = ea.url;
        this.creacion = ea.created;
        this.edicion = ea.edited;
     }
}
