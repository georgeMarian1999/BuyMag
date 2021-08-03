import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product? : Product;
  @Output() addToCartEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
    // this.rateProduct();
  }
  rateProduct() :void {
    const stars = document.querySelectorAll('.stars i');
    if(this.product)
    for (let i = 0; i < this.product!.reviews!.star; i++) {
      stars[i].classList.add('colored-stars');
    }
  }

  addToCart(product: Product) {
    this.addToCartEvent.emit(product);
  }
}
