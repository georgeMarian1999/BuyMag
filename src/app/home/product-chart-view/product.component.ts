import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../model/food";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product? : Food;
  constructor() { }

  ngOnInit(): void {
  }

}
