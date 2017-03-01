import { Pelicula } from './../../peliculas/peliculas.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() private item1: string;
  @Input() private item2: string;
  @Input() private item3: string;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
