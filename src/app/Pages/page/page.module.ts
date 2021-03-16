import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ContacComponent } from '../contac/contac.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContacComponent,
    HomeComponent,
  ],
  exports:[
    AboutComponent,
    ContacComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PageModule { }
