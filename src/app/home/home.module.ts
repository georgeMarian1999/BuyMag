import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products-chart-view/products.component';
import { ProductComponent } from './product-chart-view/product.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ProductsGroupedViewComponent } from './products-grouped-view/products-grouped-view.component';
import { CaloriesPipe } from './pipes/calories.pipe';
import { PricePipe } from './pipes/price.pipe';
import { ProductGroupedViewComponent } from './product-grouped-view/product-grouped-view.component';
import {FormsModule} from "@angular/forms";
import { CartComponent } from './cart/cart.component';

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
    BreadcrumbsComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    ProductsGroupedViewComponent,
    CaloriesPipe,
    PricePipe,
    ProductGroupedViewComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
  ]
})
export class HomeModule { }
