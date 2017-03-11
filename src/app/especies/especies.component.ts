import { DatosService } from './../shared/datos.service';
import { Observable } from 'rxjs/Observable';
import { Especie } from './especies.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.sass']
})
export class EspeciesComponent implements OnInit {

  especies: Especie[] = [];
  especies$: Observable<Especie[]>;
  pelis: number[];
  item1: string;
  item2: string;
  item3: string;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.especies$ = this.datosService.getEspecies$();
    this.especies$.subscribe(especie => this.especies = especie);

    this.item1 = 'Clasificación';
    this.item2 = 'Designación';
    this.item3 = 'Idioma';
  }

}
