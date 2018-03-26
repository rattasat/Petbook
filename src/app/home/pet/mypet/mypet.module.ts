import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypetComponent } from './mypet.component';
import { PetlocationComponent } from './petlocation/petlocation.component';
import { HomeModule } from '../../home.module';
import { LoadingPageModule } from '../../../loading/loading-page/loading-page.module';
import { PetlocationModule } from './petlocation/petlocation.module';
import { QRCodeModule } from 'angularx-qrcode';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { LoadingOpacityModule } from '../../../loading/loading-opacity/loading-opacity.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingPageModule,
    LoadingOpacityModule,
    PetlocationModule,
    QRCodeModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: [MypetComponent],
  exports: [MypetComponent]
})
export class MypetModule { }
