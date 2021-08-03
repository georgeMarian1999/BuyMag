import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-product-grouped-view',
  templateUrl: './product-grouped-view.component.html',
  styleUrls: ['./product-grouped-view.component.css']
})
export class ProductGroupedViewComponent implements OnInit {
  @Input() product?: Product;
  @Output() addToCartEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(product:Product): void{
    this.addToCartEvent.emit(product);
  }

}
