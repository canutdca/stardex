import { Item } from './../shared/item.model';
import { Pelicula, PeliculaApi } from './peliculas.model';
import { Observable } from 'rxjs/Observable';
import { HttpToolsService } from  './../shared/http-tools-service.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeliculasService {

  private urlPeliculas: string = 'http://swapi.co/api/films/';
  private urlSpecies: string = 'http://swapi.co/api/films/';

  constructor(private http: Http, private httpToolsService: HttpToolsService) { }

  // com puc formatejar les dades que em passen a al meu model de dades?
  getPeliculas$(): Observable<Pelicula[]> {
    return this.http
      .get(this.urlPeliculas)
      .map(this.httpToolsService.obtenerDatos);
  }

  getPelicula$(id: number): Observable<Pelicula> {
    return this.http
      .get(`${this.urlPeliculas}/${id}`)
      .map(this.httpToolsService.obtenerDatos);
  }

  getEspeciesPelicula(pelicula: Pelicula, species: string[]): Observable<Array<Item>> {
    species.forEach(element => {
      let specie = this.http
                        .get(this.urlSpecies)
                        .map(this.httpToolsService.obtenerDatos).onCompleted
                        
      pelicula.especies.push(new Item (specie.))
    });
  }
}
