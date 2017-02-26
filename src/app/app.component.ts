import { DatosService } from './shared/datos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private datosService: DatosService) {
    this.datosService.CargarDatos();
  }


}
