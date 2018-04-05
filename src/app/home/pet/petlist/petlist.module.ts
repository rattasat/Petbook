import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageModule } from '../../../loading/loading-page/loading-page.module';
import { PetlistComponent } from './petlist.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LoadingPageModule,
    RouterModule
  ],
  declarations: [
    PetlistComponent
  ],
  exports: [
    PetlistComponent
  ]
})
export class PetlistModule { }
