import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingOpacityModule } from '../loading/loading-opacity/loading-opacity.module';
import { RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoadingOpacityModule,
    RouterModule
  ],
  declarations: [
    AdminLoginComponent
  ],
  exports: [
    AdminLoginComponent
  ]
})
export class AdminLoginModule { }
