import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-products-grouped-view',
  templateUrl: './products-grouped-view.component.html',
  styleUrls: ['./products-grouped-view.component.css']
})
export class ProductsGroupedViewComponent implements OnInit {
  @Input() products? :Product[];
  @Output() addToCartEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(product:Product): void {
    this.addToCartEvent.emit(product);
  }

}
