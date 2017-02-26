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

  constructor(private personajesService: PersonajesService) { }

  ngOnInit() {
    this.personajes$ = this.personajesService.getPersonajes$();
    this.personajes$.subscribe(personajes => this.personajes = personajes);
  }

}
