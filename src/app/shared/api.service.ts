import { PersonajeApi } from './../personajes/personajes.model';
import { PeliculaApi } from './../peliculas/peliculas.model';
import { NaveApi } from './../naves/naves.model';
import { VehiculoApi } from './../vehiculos/vehiculos.model';
import { EspecieApi } from './../especies/especies.model';
import { PlanetaApi } from './../planetas/planetas.datos';
import { HttpToolsService } from './http-tools-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  private urlBase: string = 'http://swapi.co/api/';
  private urlPersonajes: string = this.urlBase + 'people';
  private urlPeliculas: string = this.urlBase + 'films/';
  private urlNaves: string = this.urlBase + 'starships/';
  private urlVehiculos: string = this.urlBase + 'vehicles/';
  private urlEspecies: string = this.urlBase + 'species/';
  private urlPlanetas: string = this.urlBase + 'planets/';

  constructor(private http: Http, private httpToolsService: HttpToolsService) { }

  // getRoot() {} para obtener las url's?

  getPersonajes$(): Observable<PersonajeApi[]> {
    return this.http
      .get(this.urlPersonajes)
      .map(this.httpToolsService.obtenerDatos);
  }

  getPeliculas$(): Observable<PeliculaApi[]> {
    return this.http
      .get(this.urlPeliculas)
      .map(this.httpToolsService.obtenerDatos);
  }

  getNaves$(): Observable<NaveApi[]> {
    return this.http
      .get(this.urlNaves)
      .map(this.httpToolsService.obtenerDatos);
  }

  getVehiculos$(): Observable<VehiculoApi[]> {
    return this.http
      .get(this.urlVehiculos)
      .map(this.httpToolsService.obtenerDatos);
  }

  getEspecies$(): Observable<EspecieApi[]> {
    return this.http
      .get(this.urlEspecies)
      .map(this.httpToolsService.obtenerDatos);
  }

  getPlanetas$(): Observable<PlanetaApi[]> {
    return this.http
      .get(this.urlPlanetas)
      .map(this.httpToolsService.obtenerDatos);
  }
}
