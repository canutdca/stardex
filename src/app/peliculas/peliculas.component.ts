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


  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.peliculas$ = this.datosService.getPeliculas$();
    this.peliculas$.subscribe(peliculas => this.peliculas = peliculas);
    console.log("peliculas:" + JSON.stringify(this.peliculas));
  }


}
