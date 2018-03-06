import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PublicPetComponent } from './public-pet/public-pet.component';
import { routes } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PublicPetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
