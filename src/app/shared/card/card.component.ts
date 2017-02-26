import { Pelicula } from './../../peliculas/peliculas.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit, OnChanges {

  @Input()
  private peliculas: Pelicula[];

  constructor() { }

  ngOnInit() {
    console.log('hola');
    console.log(JSON.stringify(this.peliculas));
  }

  ngOnChanges() {
      console.log(JSON.stringify(this.peliculas));
  }

}
