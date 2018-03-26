import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetlocationComponent } from './petlocation.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { LoadingOpacityModule } from '../../../../loading/loading-opacity/loading-opacity.module';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzl3h5W4Tgr0N7p8khp1XptW_htMKzbI8'
    }),
    LoadingOpacityModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    PetlocationComponent],
  exports: [
    PetlocationComponent
  ]
})
export class PetlocationModule { }
