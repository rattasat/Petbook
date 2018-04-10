import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicReportComponent } from './public-report.component';
import { LoadingPageModule } from '../loading/loading-page/loading-page.module';
import { LoadingOpacityModule } from '../loading/loading-opacity/loading-opacity.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingPageModule,
    LoadingOpacityModule
  ],
  declarations: [
    PublicReportComponent
  ],
  exports: [
    PublicReportComponent
  ]
})
export class PublicReportModule { }
