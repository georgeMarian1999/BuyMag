import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart?: Product[];
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() confirmOrderEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(id: number):void {
    this.deleteItemEvent.emit(id);
  }

  confirmOrder():void {
    this.confirmOrderEvent.emit();
  }
}
