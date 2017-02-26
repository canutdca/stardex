import { PersonajesService } from './personajes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonajesComponent],
  exports: [PersonajesComponent],
  providers: [PersonajesService]
})
export class PersonajesModule { }
