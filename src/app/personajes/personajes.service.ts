import { Personaje } from './personajes.model';
import { Observable } from 'rxjs/Observable';
import { HttpToolsService } from  './../shared/http-tools-service.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonajesService {

  private urlBase: string = 'http://swapi.co/api/people/';

  constructor(private http: Http, private httpToolsService: HttpToolsService) { }

  // com puc formatejar les dades que em passen a al meu model de dades?
  getPersonajes$(): Observable<Personaje[]> {
    return this.http
      .get(this.urlBase)
      .map(this.httpToolsService.obtenerDatos)
  }

  getPersonaje(id: number): Observable<Personaje> {
    return this.http
      .get(`${this.urlBase}/${id}`)
      .map(this.httpToolsService.obtenerDatos);
  }
}
