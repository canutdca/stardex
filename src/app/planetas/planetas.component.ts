import { DatosService } from './../shared/datos.service';
import { Observable } from 'rxjs/Observable';
import { Planeta } from './planetas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.sass']
})
export class PlanetasComponent implements OnInit {

  planetas: Planeta[] = [];
  planetas$: Observable<Planeta[]>;
  pelis: number[];
  item1: string;
  item2: string;
  item3: string;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.planetas$ = this.datosService.getPlanetas$();
    this.planetas$.subscribe(planeta => this.planetas = planeta);

    this.item1 = 'Diametro';
    this.item2 = 'Gravedad';
    this.item3 = 'Contaminación';
  }

}
