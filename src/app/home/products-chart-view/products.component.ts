import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products? :Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
