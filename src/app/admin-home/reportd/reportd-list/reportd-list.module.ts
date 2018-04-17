import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportdListComponent } from './reportd-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LoadingPageModule } from '../../../loading/loading-page/loading-page.module';
import { LoadingOpacityModule } from '../../../loading/loading-opacity/loading-opacity.module';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    LoadingPageModule,
    LoadingOpacityModule
  ],
  declarations: [
    ReportdListComponent
  ],
  exports: [
    ReportdListComponent
  ]
})
export class ReportdListModule { }
