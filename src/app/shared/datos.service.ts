import { HttpToolsService } from './http-tools-service.service';
import { ApiService } from './api.service';
import { Especie, EspecieApi } from './../especies/especies.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Pelicula, PeliculaApi } from './../peliculas/peliculas.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  peliculas: Pelicula[] = [];
  peliculas$: Observable<Pelicula[]>;
  peliculasApi$: Observable<PeliculaApi[]>;

  especies: Especie[] = [];
  especiesApi$: Observable<EspecieApi[]>;

  constructor(private apiService: ApiService, private httpToolsService: HttpToolsService) { }

  CargarDatos() {
    this.peliculasApi$ = this.apiService.getPeliculas$();
    this.peliculasApi$.subscribe(peliculasApi => {
      //this.peliculas$.map(this.httpToolsService.copiarDatosApi(peliculasApi));
      peliculasApi.forEach(x => this.peliculas.push(new Pelicula(x)));
      this.peliculas$ = this.asObservable(this.peliculas);
    });

    this.especiesApi$ = this.apiService.getEspecies$();
    this.especiesApi$.subscribe(especiesApi => {
      especiesApi.forEach(x => this.especies.push(new Especie(x)));
    });
  }

  getPeliculas$(): Observable<Pelicula[]> {
    return this.asObservable(this.peliculas);
  }

  asObservable(subject: any) {
     return new Observable(fn => subject.subscribe(fn));
 }
}
