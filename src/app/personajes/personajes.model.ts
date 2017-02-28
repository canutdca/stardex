import { Item } from './../shared/item.model';

export class PersonajeApi {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
    url: string;
    created: string;
    edited: string;
}

export class Personaje {
    id: number;
    nombre: string;
    nacimiento: string;
    color_ojos: string;
    género: string;
    color_pelo: string;
    altura: number;
    peso: number;
    color_piel: string;
    origen: Item; // ex: "http://swapi.co/api/planets/1/",
    peliculas: Item[]; // "http://swapi.co/api/films/1/",
    especies: Item[]; // "http://swapi.co/api/species/1/"
    navesEspaciales: Item[]; // "http://swapi.co/api/starships/12/",
    vehiculos: Item[]; // "http://swapi.co/api/vehicles/14/"
    url: string; // ex: "http://swapi.co/api/people/1/",
    creado: Date; // ex: "2014-12-09T13:50:51.644000Z",
    editado: Date; // ex: "2014-12-10T13:52:43.172000Z",

    constructor(pe: PersonajeApi) {
        let aux: string[] = pe.url.split('/');
        this.id = Number(aux[aux.length - 1]);
        this.nombre = pe.name;
        this.nacimiento = pe.birth_year;
        this.color_ojos = pe.eye_color;
        this.género = pe.gender;
        this.color_pelo = pe.hair_color;
        this.altura = Number(pe.height);
        this.peso = Number(pe.mass);
        this.color_piel = pe.skin_color;
        this.origen = new Item();
        this.peliculas = Array<Item>();
        this.especies = Array<Item>();
        this.navesEspaciales = Array<Item>();
        this.vehiculos = Array<Item>();
        this.url = pe.url;
        this.creado = new Date(pe.created);
        this.editado = new Date(pe.edited);
    }
}
