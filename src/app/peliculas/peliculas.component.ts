import { DatosService } from './../shared/datos.service';
import { Observable } from 'rxjs/Observable';
import { Pelicula } from './peliculas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.sass']
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[];
  peliculas$: Observable<Pelicula[]>;
  pelis: number[];

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.pelis = [1, 2, 3];
    this.peliculas$ = this.datosService.getPeliculas$();
    this.peliculas$.subscribe(peliculas => this.peliculas = peliculas);
  }


}
