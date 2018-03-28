import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOpacityModule } from '../loading/loading-opacity/loading-opacity.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { RouterModule } from '@angular/router';
import { routes } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoadingOpacityModule,
    RouterModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
