import { HttpToolsService } from './http-tools-service.service';
import { ApiService } from './api.service';
import { Especie, EspecieApi } from './../especies/especies.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Pelicula, PeliculaApi } from './../peliculas/peliculas.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  peliculas$: BehaviorSubject<Pelicula[]> = new BehaviorSubject([]);
  peliculasApi$: Observable<PeliculaApi[]>;

  especies$: Especie[] = [];
  especiesApi$: Observable<EspecieApi[]>;

  constructor(private apiService: ApiService, private httpToolsService: HttpToolsService) { }

  CargarDatos() {
    this.peliculasApi$ = this.apiService.getPeliculas$();
    this.peliculasApi$.subscribe(peliculasApi => {
      //this.peliculas$.map(this.httpToolsService.copiarDatosApi(peliculasApi));
      let pelis = []
      peliculasApi.forEach(x => pelis.push(new Pelicula(x)));
      this.peliculas$.next(pelis)
    });
  }

  getPeliculas$(): Observable<Pelicula[]> {
    return this.peliculas$.asObservable();
  }
}
