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
  getNrFoods():Observable<number> {
    return of(data.filter((p:Product)=> p.calories !== undefined).length).pipe(
      delay(500)
    );
  }
  getFoods(): Observable<Product[]>{
    return of(data.filter((p:Product)=> p.calories !== undefined)).pipe(
      delay(500)
    );
  }
  getNrStuff():Observable<number>{
    return of(data.filter((p:Product)=> p.calories === undefined).length).pipe(
      delay(500)
    );
  }
  getProducts():Observable<Product[]> {
    return of(data).pipe(
      delay(1000)
    );
  }
  getStuff():Observable<Product[]> {
    return of(data.filter((p:Product)=> p.calories === undefined)).pipe(
      delay(500)
    );
  }
}
