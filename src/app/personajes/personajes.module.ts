import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PersonajesComponent],
  exports: [PersonajesComponent]
})
export class PersonajesModule { }
