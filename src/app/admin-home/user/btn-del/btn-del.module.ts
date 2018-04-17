import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnDelComponent } from './btn-del.component';
import { LoadingOpacityModule } from '../../../loading/loading-opacity/loading-opacity.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingOpacityModule
  ],
  declarations: [
    BtnDelComponent
  ],
  exports: [
    BtnDelComponent
  ],
  entryComponents: [
    BtnDelComponent
  ]
})
export class BtnDelModule { }
