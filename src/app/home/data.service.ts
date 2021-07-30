import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Food} from "./model/food";
import {data} from "./mock-food";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  getProducts():Observable<Food[]> {
    return of(data).pipe(
      delay(1000)
    );
  }
}
