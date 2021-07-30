import { Component, OnInit } from '@angular/core';
import {Food} from "../model/food";
import {DataService} from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products?: Food[];
  loading : boolean = true;
  chartView : boolean = true;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts()
      .subscribe((data:Food[])=>{
        this.products = data;
        this.loading = false;
      })
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
