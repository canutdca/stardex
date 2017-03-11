import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesComponent } from './naves.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NavesComponent],
  exports: [NavesComponent]
})
export class NavesModule { }
