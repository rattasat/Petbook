import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error.component';
import { ErrorRouting } from './error.routing';

@NgModule({
  imports: [
    CommonModule,
    ErrorRouting
  ],
  declarations: [ErrorComponent, NotFoundComponent],
  exports: [ErrorComponent]
})
export class ErrorModule { }
