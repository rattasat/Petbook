import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { HeaderComponent } from './header.component';


@NgModule({
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    HeaderComponent],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
