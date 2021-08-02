import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {FoodType} from "../model/food-type";
import {Allergies} from "../model/allergies";
import {Product} from "../model/product";
import {Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products?: Product[];
  productsType:string = 'Food & Stuff';
  loading : boolean = true;
  chartView : boolean = true;
  foodTypes: (FoodType | string)[] = [];
  allergies: (Allergies | string)[] = [];



  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.foodTypes = Object.values(FoodType);
    // @ts-ignore
    this.allergies = Object.values(Allergies);
    this.dataService.getProducts()
      .subscribe((data:Product[])=>{
        this.products = data;
        this.loading = false;
      })
  }
  showFood(): void{
    this.loading = true;
    this.products = [];
    this.dataService.getFoods()
      .subscribe((data:Product[])=>{
        this.products = data;
        this.loading = false;
      })
    this.productsType = 'Food';
  }
  showStuff():void {
    this.loading = true;
    this.products = [];
    this.dataService.getStuff()
      .subscribe((data:Product[])=>{
        this.products = data;
        this.loading = false;
      })
    this.productsType = 'Stuff';
  }
  showFoodStuff() {
    this.loading = true;
    this.products = [];
    this.dataService.getProducts()
      .subscribe((data:Product[])=>{
        this.products = data;
        this.loading = false;
      })
    this.productsType = 'Food & Stuff';
  }
  filterByFoodType(type:string):void{
    this.loading = true;
    this.products = [];
    this.dataService.getFoodByType(type)
      .subscribe((data:Product[])=>{
        this.products = data;
        this.loading = false;
      });
  }
  filterByAllergy(allergy:string):void {
    this.loading = true;
    this.products = [];
    this.dataService.getFoodByAllergy(allergy)
      .subscribe((data:Product[])=>{
        this.products = data;
        this.loading = false;
      });
  }


  triggerChartView() {
    const chartButton = document.querySelector('.chart-button')!;
    const groupedButton = document.querySelector('.grouped-button')!;
    chartButton.classList.toggle('selected', true);
    groupedButton.classList.toggle('selected', false);
    this.chartView = true;
  }
  triggerGroupedView() {
    const chartButton = document.querySelector('.chart-button')!;
    const groupedButton = document.querySelector('.grouped-button')!;
    chartButton.classList.toggle('selected', false);
    groupedButton.classList.toggle('selected', true);
    this.chartView = false;
  }

}
