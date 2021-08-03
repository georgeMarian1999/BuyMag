import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Product} from "../model/product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products? :Product[];
  @Output() addToCartEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product:Product):void {
    this.addToCartEvent.emit(product);
  }

}
