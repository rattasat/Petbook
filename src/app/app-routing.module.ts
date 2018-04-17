import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { RegisterComponent } from './register/register.component';
import { PublicPetComponent } from './public-pet/public-pet.component';
import { ErrorModule } from './error/error.module';
import { ErrorComponent } from './error/error.component';
import { PublicReportComponent } from './public-report/public-report.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'pet/:petid',
    component: PublicPetComponent
  },
  {
    path: 'report/daily',
    component: PublicReportComponent
  },
  {
    path: '**',
    redirectTo: 'petlist',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'admin',
    loadChildren: './admin-home/admin-home.module#AdminHomeModule'
  },
  {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }
];
