import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetasComponent } from './planetas.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PlanetasComponent],
  exports: [PlanetasComponent]
})
export class PlanetasModule { }
