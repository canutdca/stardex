import { Item } from './../shared/item.model';

export class VehiculoApi {
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];
    pilots: string[];
    url: string;
    created: string;
    edited: string;
}

export class Vehiculo {
    id: number;
    nombre: string;
    modelo: string;
    clase: string;
    fabricado: string;
    longitud: number;
    precio: number;
    crew: string;
    pasajeros: number;
    velocidad: number;
    capacidad: number;
    consumibles: string;
    peliculas: Array<Item>;
    pilotos: Array<Item>;
    url: string;
    creacion: Date;
    edicion: Date;

    constructor(ve: VehiculoApi) {
        let aux: string[] = ve.url.split('/');
        this.id = Number(aux[aux.length - 1]);
        this.nombre = ve.name;
        this.modelo = ve.model;
        this.clase = ve.vehicle_class;
        this.fabricado = ve.manufacturer;
        this.longitud = Number(ve.length);
        this.precio = Number(ve.cost_in_credits);
        this.crew = ve.crew;
        this.pasajeros = Number(ve.passengers);
        this.velocidad = Number(ve.max_atmosphering_speed);
        this.capacidad = Number(ve.cargo_capacity);
        this.consumibles = ve.consumables;
        this.peliculas = new Array<Item>();
        this.pilotos = new Array<Item>();
        this.url = ve.url;
        this.creacion = new Date(ve.created);
        this.edicion = new Date(ve.edited);
     }
}
