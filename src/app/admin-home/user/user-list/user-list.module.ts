import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LoadingPageModule } from '../../../loading/loading-page/loading-page.module';
import { LoadingOpacityModule } from '../../../loading/loading-opacity/loading-opacity.module';
import { BtnDelComponent } from '../btn-del/btn-del.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    LoadingPageModule,
    LoadingOpacityModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserListComponent,
    BtnDelComponent
  ],
  exports: [
    UserListComponent,
  ],
  entryComponents: [
    BtnDelComponent
  ]
})
export class UserListModule { }
