import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspeciesComponent } from './especies.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [EspeciesComponent],
  exports: [EspeciesComponent]
})
export class EspeciesModule { }
