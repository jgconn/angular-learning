import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent // this cannot be declared from another module. It can be used anywhere be only declared once = like lib
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent // export to use in others
  ]
})
export class HomeModule { }
