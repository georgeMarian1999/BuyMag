import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {data} from "./mock-food";
import {delay} from "rxjs/operators";
import {Product} from "./model/product";
import {Allergies, fromString} from "./model/allergies";

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
  getFoodByType(type:string): Observable<Product[]> {
    return of(data.filter((p:Product)=> p.type === type)).pipe(
      delay(500)
    );
  }
  getFoodByAllergy(allergy:string):  Observable<Product[]>{
    return of(data.filter((p:Product)=> {
      return p.allergies?.includes(fromString(allergy));
    })).pipe(
      delay(500)
    );
  }
  searchProducts(term:string): Observable<Product[]> {
    if(!term.trim()) {
      return of([]);
    }
    return of(data.filter((pr:Product)=>{
      return pr.name.includes(term);
    }))

  }
}
