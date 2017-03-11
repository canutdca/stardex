import { Item } from './../shared/item.model';

export class NaveApi {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];
    pilots: string[];
    url: string;
    created: string;
    edited: string;
}

export class Nave {
    id: number;
    nombre: string;
    modelo: string;
    tipo: string;
    fabricado: string;
    precio: number;
    longitud: number;
    crew: string;
    pasajeros: number;
    velocidad: number;
    hypervelocidad: number;
    MGLT: string;
    capacidad: number;
    consumibles: string;
    peliculas: Array<Item>;
    pilotos: Array<Item>;
    url: string;
    creacion: Date;
    edicion: Date;

    constructor (na: NaveApi) {
        let aux: string[] = na.url.split('/');
        this.id = Number(aux[aux.length - 1]);
        this.nombre = na.name;
        this.modelo = na.model;
        this.tipo = na.starship_class;
        this.fabricado = na.manufacturer;
        this.precio = Number(na.cost_in_credits);
        this.longitud = Number(na.length);
        this.crew = na.crew;
        this.pasajeros = Number(na.passengers);
        this.velocidad = na.max_atmosphering_speed === 'N/A' || na.max_atmosphering_speed === 'n/a' ? 0 : Number(na.max_atmosphering_speed);
        this.hypervelocidad = Number(na.hyperdrive_rating);
        this.MGLT = na.MGLT;
        this.capacidad = Number(na.cargo_capacity);
        this.consumibles = na.consumables;
        this.peliculas = new Array<Item>();
        this.pilotos = new Array<Item>();
        this.url = na.url;
        this.creacion = new Date(na.created);
        this.edicion = new Date(na.edited);
    }
}
