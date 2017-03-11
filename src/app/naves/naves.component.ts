import { DatosService } from './../shared/datos.service';
import { Observable } from 'rxjs/Observable';
import { Nave } from './naves.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.sass']
})
export class NavesComponent implements OnInit {

  naves: Nave[] = [];
  naves$: Observable<Nave[]>;
  pelis: number[];
  item1: string;
  item2: string;
  item3: string;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.naves$ = this.datosService.getNaves$();
    this.naves$.subscribe(nave => this.naves = nave);

    this.item1 = 'Modelo';
    this.item2 = 'Tipo';
    this.item3 = 'Velocidad';
  }

}
