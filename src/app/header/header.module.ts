import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot(),
    RouterModule
  ],
  declarations: [
    HeaderComponent],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
