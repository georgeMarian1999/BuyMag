import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

const routes = [
  {
    path: '',
    component: HomeComponent
  },
]

@NgModule({
  declarations: [
    HomeComponent,
    CustomNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ]
})
export class HomeModule { }
