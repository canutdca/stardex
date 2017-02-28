import { Item } from './../shared/item.model';

export class PlanetaApi {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: string;
    films: string;
    url: string;
    created: string;
    edited: string;
}

export class Planeta {
    id: number;
    nombre: string;
    diametro: number;
    periodo_rotacion: number;
    periodo_orbita: number;
    gravedad: number;
    contaminacion: number;
    clima: string[];
    terreno: string[];
    agua: number;
    poblacion: Array<Item>;
    peliculas: Array<Item>;
    url: string;
    creacion: Date;
    edicion: Date;

    constructor (pl: PlanetaApi) {
        let aux: string[] = pl.url.split('/');
        this.id = Number(aux[aux.length - 1]);
        this.nombre = pl.name;
        this.diametro = Number(pl.diameter);
        this.periodo_rotacion = Number(pl.rotation_period);
        this.periodo_orbita = Number(pl.orbital_period);
        this.gravedad = Number(pl.gravity);
        this.contaminacion = pl.population === '"unknown' ? 0 : Number(pl.population);

        aux = pl.climate.split(', ');
        this.clima = new Array<string>();
        aux.forEach(item => this.clima.push(item));

        aux = pl.terrain.split(', ');
        this.terreno = new Array<string>();
        aux.forEach(item => this.terreno.push(item));

        this.agua = Number(pl.surface_water);
        this.poblacion = new Array<Item>();
        this.peliculas = new Array<Item>();
        this.url = pl.url;
        this.creacion = new Date(pl.created);
        this.edicion = new Date(pl.edited);
    }
}
