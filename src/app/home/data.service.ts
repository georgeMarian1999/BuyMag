import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {data} from "./mock-food";
import {delay} from "rxjs/operators";
import {Product} from "./model/product";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  getProducts():Observable<Product[]> {
    return of(data).pipe(
      delay(1000)
    );
  }
}
