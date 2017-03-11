import { DatosService } from './../shared/datos.service';
import { Observable } from 'rxjs/Observable';
import { Vehiculo } from './vehiculos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.sass']
})
export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  vehiculos$: Observable<Vehiculo[]>;
  pelis: number[];
  item1: string;
  item2: string;
  item3: string;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.vehiculos$ = this.datosService.getVehiculos$();
    this.vehiculos$.subscribe(vehiculo => this.vehiculos = vehiculo);

    this.item1 = 'Modelo';
    this.item2 = 'Clase';
    this.item3 = 'Velocidad';
  }

}
