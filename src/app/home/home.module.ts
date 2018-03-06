import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from './home.component';
import { RoutingModule } from './home.routing';
import { UserComponent } from './user/user/user.component';
import { PetlistComponent } from './pet/petlist/petlist.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [NavbarComponent, HeaderComponent, HomeComponent, PetlistComponent, UserComponent, IndexComponent],
  exports: [
    HomeComponent,
    UserComponent,
    NavbarComponent,
    HeaderComponent,
  ]
})
export class HomeModule { }
