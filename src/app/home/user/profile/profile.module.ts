import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingPageModule } from '../../../loading/loading-page/loading-page.module';
import { LoadingOpacityModule } from '../../../loading/loading-opacity/loading-opacity.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoadingPageModule,
    LoadingOpacityModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
