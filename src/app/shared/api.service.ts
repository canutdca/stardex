import { EspecieApi } from './../especies/especies.model';
import { PeliculaApi } from './../peliculas/peliculas.model';
import { HttpToolsService } from './http-tools-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  private urlBase: string = 'http://swapi.co/api/';
  private urlPeliculas: string = this.urlBase + 'films/';
  private urlEspecies: string = this.urlBase + 'species/';

  constructor(private http: Http, private httpToolsService: HttpToolsService) { }

  getPeliculas$(): Observable<PeliculaApi[]> {
    return this.http
      .get(this.urlPeliculas)
      .map(this.httpToolsService.obtenerDatos);
  }

  getEspecies$(): Observable<EspecieApi[]> {
    return this.http
      .get(this.urlEspecies)
      .map(this.httpToolsService.obtenerDatos);
  }

  GetIdFromUrl(url: string): number {
    let aux: string[] = url.split('/');
    return Number(aux[aux.length - 1]);
  }

}
