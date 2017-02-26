import { Item } from '../shared/item.model';

export class PeliculaApi {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
    url: string;
    created: string;
    edited: string;
}

export class Pelicula {
    titulo: string;
    episodio: number;
    opening: string;
    director: string;
    productor: string;
    fecha: Date;
    especies: Array<Item>;
    naves: Array<Item>;
    vehiculos: Array<Item>;
    personajes: Array<Item>;
    planetas: Array<Item>;
    url: string;
    creacion: string;
    edicion: string;

    constructor(pa: PeliculaApi) {
        this.titulo = pa.title;
        this.episodio = pa.episode_id;
        this.opening = pa.opening_crawl;
        this.director = pa.director;
        this.productor = pa.producer;
        this.fecha = pa.release_date;
        this.especies = new Array<Item>();
        this.naves = new Array<Item>();
        this.vehiculos = new Array<Item>();
        this.personajes = new Array<Item>();
        this.planetas = new Array<Item>();
        this.url = pa.url;
        this.creacion = pa.created;
        this.edicion = pa.edited;
    }
}
