import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { PetlistComponent } from './pet/petlist/petlist.component';
import { AddpetComponent } from './pet/addpet/addpet.component';
import { LoadingPageComponent } from '../loading/loading-page/loading-page.component';
import { MypetComponent } from './pet/mypet/mypet.component';
import { PetlocationComponent } from './pet/mypet/petlocation/petlocation.component';
import { MypetModule } from './pet/mypet/mypet.module';
import { ProfileComponent } from './user/profile/profile.component';
import { LoadingPageModule } from '../loading/loading-page/loading-page.module';
import { HeaderModule } from '../header/header.module';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddpetModule } from './pet/addpet/addpet.module';
import { ReportListComponent } from './report/report-list/report-list.component';
import { ReportListModule } from './report/report-list/report-list.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HomeRouting,
    MypetModule,
    AddpetModule,
    LoadingPageModule,
    HeaderModule,
    ReportListModule
  ],
  declarations: [HomeComponent,
    NavbarComponent,
    PetlistComponent,
    ProfileComponent
  ],
  exports: [
    HomeComponent,
    NavbarComponent,
  ]
})

export class HomeModule { }
