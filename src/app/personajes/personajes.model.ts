export class Personaje {
    id: number;
    edad: string;
    ojos: string;
    peliculas: ItemPersonaje[]; // "http://swapi.co/api/films/1/",
    films: ItemPersonaje[];
    género: string;
    pelo: string;
    height: number;
    origen: ItemPersonaje; // ex: "http://swapi.co/api/planets/1/",
    peso: number;
    nombre: string;
    piel: string;
    creado: Date; // ex: "2014-12-09T13:50:51.644000Z",
    editado: Date; // ex: "2014-12-10T13:52:43.172000Z",
    especies: ItemPersonaje[]; // "http://swapi.co/api/species/1/"
    navesEspaciales: ItemPersonaje[]; // "http://swapi.co/api/starships/12/",
    url: string; // ex: "http://swapi.co/api/people/1/",
    vehiculos: ItemPersonaje[]; // "http://swapi.co/api/vehicles/14/"
}

export interface ItemPersonaje {
    id: number;
    nombre: string;
}
