import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './loading-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingPageComponent],
  exports: [
    LoadingPageComponent
  ]
})
export class LoadingPageModule { }
