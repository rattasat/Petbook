import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list.component';
import { LoadingPageModule } from '../../../loading/loading-page/loading-page.module';
import {
  LoadingPageComponent
} from '../../../loading/loading-page/loading-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    LoadingPageModule
  ],
  declarations: [
    ReportListComponent
  ],
  exports: [
    ReportListComponent
  ]
})
export class ReportListModule { }
