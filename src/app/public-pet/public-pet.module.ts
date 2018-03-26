import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from '../loading/loading-page/loading-page.component';
import { PublicPetComponent } from './public-pet.component';
import { LoadingPageModule } from '../loading/loading-page/loading-page.module';
import { LoadingOpacityModule } from '../loading/loading-opacity/loading-opacity.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    LoadingPageModule,
    LoadingOpacityModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: [PublicPetComponent],
  exports: [PublicPetComponent]
})
export class PublicPetModule { }
