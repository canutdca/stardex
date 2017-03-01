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
  item1: string;
  item2: string;
  item3: string;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.peliculas$ = this.datosService.getPeliculas$();
    this.peliculas$.subscribe(peliculas => this.peliculas = peliculas);

    this.item1 = 'Director';
    this.item2 = 'Productor';
    this.item3 = 'Fecha';
  }


}
