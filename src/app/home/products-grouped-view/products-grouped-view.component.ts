import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-products-grouped-view',
  templateUrl: './products-grouped-view.component.html',
  styleUrls: ['./products-grouped-view.component.css']
})
export class ProductsGroupedViewComponent implements OnInit {
  @Input() products? :Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
