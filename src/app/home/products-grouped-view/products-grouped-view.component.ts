import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../model/food";

@Component({
  selector: 'app-products-grouped-view',
  templateUrl: './products-grouped-view.component.html',
  styleUrls: ['./products-grouped-view.component.css']
})
export class ProductsGroupedViewComponent implements OnInit {
  @Input() products? :Food[];
  constructor() { }

  ngOnInit(): void {
  }

}
