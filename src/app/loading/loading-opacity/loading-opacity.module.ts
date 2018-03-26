import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOpacityComponent } from './loading-opacity.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingOpacityComponent],
  exports: [
    LoadingOpacityComponent
  ]
})
export class LoadingOpacityModule { }
