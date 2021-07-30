import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../model/food";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products? :Food[];
  constructor() { }

  ngOnInit(): void {
  }

}
