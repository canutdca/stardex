import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PeliculasComponent],
  exports: [PeliculasComponent]
})

export class PeliculasModule { }
