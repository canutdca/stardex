import { DatosService } from './../shared/datos.service';
import { Observable } from 'rxjs/Observable';
import { Personaje } from './personajes.model';
import { PersonajesService } from './personajes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass']
})
export class PersonajesComponent implements OnInit {

  personajes: Personaje[] = [];
  personajes$: Observable<Personaje[]>;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.personajes$ = this.datosService.getPersonajes$();
    this.personajes$.subscribe(personajes => this.personajes = personajes);
  }

}
