import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/product";
import {FoodType} from "../model/food-type";
import {Allergies} from "../model/allergies";
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() typeOfProducts:string = '';
  @Input() products?: Product[];
  @Output() triggerChart = new EventEmitter<string>();
  @Output() triggerGrouped = new EventEmitter<string>();
  @Output() selectedTypeEvent = new EventEmitter<string>();
  @Output() selectedAllergyEvent = new EventEmitter<string>();
  selectedType: string= '';
  selectedAllergy: string = '';
  title :string = '';
  foodTypes: (FoodType | string)[] = [];
  allergies: (Allergies | string)[] = [];
  constructor() { }

  ngOnInit(): void {
    this.foodTypes = Object.values(FoodType);
    this.allergies = Object.values(Allergies);
  }
  triggerChartView():void {
    this.triggerChart.emit("Chart view");
  }

  triggerGroupedView() {
    this.triggerGrouped.emit('Grouped view');
  }

  selectType():void {
    this.selectedTypeEvent.emit(this.selectedType)
  }

  selectAllergy() {
    this.selectedAllergyEvent.emit(this.selectedAllergy);
  }
}
