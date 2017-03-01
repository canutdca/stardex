import { Personaje, PersonajeApi } from './../personajes/personajes.model';
import { Pelicula, PeliculaApi } from './../peliculas/peliculas.model';
import { Nave, NaveApi } from './../naves/naves.model';
import { Vehiculo, VehiculoApi } from './../vehiculos/vehiculos.model';
import { Especie, EspecieApi } from './../especies/especies.model';
import { Planeta, PlanetaApi } from './../planetas/planetas.datos';

import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  personajes$: BehaviorSubject<Personaje[]> = new BehaviorSubject([]);
  personajesApi$: Observable<PersonajeApi[]>;

  peliculas$: BehaviorSubject<Pelicula[]> = new BehaviorSubject([]);
  peliculasApi$: Observable<PeliculaApi[]>;

  naves$: BehaviorSubject<Nave[]> = new BehaviorSubject([]);
  navesApi$: Observable<NaveApi[]>;

  vehiculos$: BehaviorSubject<Vehiculo[]> = new BehaviorSubject([]);
  vehiculosApi$: Observable<VehiculoApi[]>;

  especies$: BehaviorSubject<Especie[]> = new BehaviorSubject([]);
  especiesApi$: Observable<EspecieApi[]>;

  planetas$: BehaviorSubject<Planeta[]> = new BehaviorSubject([]);
  planetasApi$: Observable<PlanetaApi[]>;

  constructor(private apiService: ApiService) { }

  CargarDatos() {
    this.personajesApi$ = this.apiService.getPersonajes$();
    this.personajesApi$.subscribe(personajesApi => {
      let aux = [];
      personajesApi.forEach(x => aux.push(new Personaje(x)));
      this.personajes$.next(aux);
    });

    this.peliculasApi$ = this.apiService.getPeliculas$();
    this.peliculasApi$.subscribe(peliculasApi => {
      let aux = [];
      peliculasApi.forEach(x => aux.push(new Pelicula(x)));
      this.peliculas$.next(aux);
    });

    this.navesApi$ = this.apiService.getNaves$();
    this.navesApi$.subscribe(navesApi => {
      let aux = [];
      navesApi.forEach(x => aux.push(new Nave(x)));
      this.naves$.next(aux);
    });

    this.vehiculosApi$ = this.apiService.getVehiculos$();
    this.vehiculosApi$.subscribe(vehiculosApi => {
      let aux = [];
      vehiculosApi.forEach(x => aux.push(new Vehiculo(x)));
      this.vehiculos$.next(aux);
    });

    this.especiesApi$ = this.apiService.getEspecies$();
    this.especiesApi$.subscribe(especiesApi => {
      let aux = [];
      especiesApi.forEach(x => aux.push(new Especie(x)));
      this.peliculas$.next(aux);
    });

    this.planetasApi$ = this.apiService.getPlanetas$();
    this.planetasApi$.subscribe(planetasApi => {
      let aux = [];
      planetasApi.forEach(x => aux.push(new Planeta(x)));
      this.planetas$.next(aux);
    });
  }

  getPersonajes$(): Observable<Personaje[]> {
    return this.personajes$.asObservable();
  }
  

  getPeliculas$(): Observable<Pelicula[]> {
    return this.peliculas$.asObservable();
  }

  getNaves$(): Observable<Nave[]> {
    return this.naves$.asObservable();
  }

  getVehiculos$(): Observable<Vehiculo[]> {
    return this.vehiculos$.asObservable();
  }

  getEspecies$(): Observable<Especie[]> {
    return this.especies$.asObservable();
  }

  getPlanetas$(): Observable<Planeta[]> {
    return this.planetas$.asObservable();
  }

  GetIdFromUrl(url: string): number {
    let aux: string[] = url.split('/');
    return Number(aux[aux.length - 1]);
  }
}
