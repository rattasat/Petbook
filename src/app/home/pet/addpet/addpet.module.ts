import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AddpetComponent } from './addpet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  declarations: [
    AddpetComponent
  ],
  exports: [
    AddpetComponent
  ]
})
export class AddpetModule { }
