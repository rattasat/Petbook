import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { HeaderModule } from '../header/header.module';
import { AdminRouting } from './admin.routing';
import { AdminHomeComponent } from './admin-home.component';
import { UserListModule } from './user/user-list/user-list.module';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { ReportdListModule } from './reportd/reportd-list/reportd-list.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    HeaderModule,
    UserListModule,
    ReportdListModule
  ],
  declarations: [
    AdminHomeComponent,
    AdminNavbarComponent
  ],
  exports: [
    AdminHomeComponent,
    AdminNavbarComponent
  ]
})
export class AdminHomeModule { }
