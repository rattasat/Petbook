import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ErrorModule } from './error/error.module';
import { HomeModule } from './home/home.module';

import { PublicPetModule } from './public-pet/public-pet.module';
import { PetService } from './service/pet.service';
import { UserService } from './service/user.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    PublicPetModule,
    ErrorModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PetService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }