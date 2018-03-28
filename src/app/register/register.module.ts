import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingOpacityModule } from '../loading/loading-opacity/loading-opacity.module';
import { RegisterComponent } from './register.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from '../app-routing.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoadingOpacityModule,
    RouterModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    RegisterComponent
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
