import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';

import { ErrorModule } from './error/error.module';
import { HomeModule } from './home/home.module';

import { PublicPetModule } from './public-pet/public-pet.module';
import { PetService } from './service/pet.service';
import { UserService } from './service/user.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { AgmCoreModule } from '@agm/core';
import { UploadService } from './service/upload.service';
import { AngularFireModule } from 'angularfire2/';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import { Ng2ImgMaxModule } from 'ng2-img-max';


firebase.initializeApp(environment.firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Ng2ImgMaxModule,
    FormsModule,
    HttpModule,
    LoginModule,
    HomeModule,
    RegisterModule,
    PublicPetModule,
    ErrorModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzl3h5W4Tgr0N7p8khp1XptW_htMKzbI8'
    }),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    PetService,
    UserService,
    UploadService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }