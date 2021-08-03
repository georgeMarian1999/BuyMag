import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {data} from "./mock-food";
import {delay} from "rxjs/operators";
import {Product} from "./model/product";
import {fromString} from "./model/allergies";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: Product[] = data;
  constructor() { }
  getNrFoods():Observable<number> {
    return of(this.products.filter((p:Product)=> p.calories !== undefined).length).pipe(
      delay(500)
    );
  }
  getFoods(): Observable<Product[]>{
    return of(this.products.filter((p:Product)=> p.calories !== undefined)).pipe(
      delay(500)
    );
  }
  getNrStuff():Observable<number>{
    return of(this.products.filter((p:Product)=> p.calories === undefined).length).pipe(
      delay(500)
    );
  }
  getProducts():Observable<Product[]> {
    return of(this.products).pipe(
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
    return of(this.products.filter((p:Product)=> {
      return p.allergies?.includes(fromString(allergy));
    })).pipe(
      delay(500)
    );
  }
  searchProducts(term:string): Observable<Product[]> {
    if(!term.trim()) {
      return of([]);
    }
    return of(this.products.filter((pr:Product)=>{
      return pr.name.includes(term);
    }))
  }
  order(cart:Product[]):Observable<string> {
    for(let item of cart){
      const ind = this.products.findIndex((el:Product)=> el.id=== item.id);
      this.products[ind].stock--;
    }
    return of('Order completed').pipe(
      delay(400)
    )
  }
}
