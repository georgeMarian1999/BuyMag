import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getCrtUser():Observable<User> {
    if(sessionStorage.getItem('crtUser')){
      const crtUser: User = JSON.parse(sessionStorage.getItem('crtUser')!);
      return of(crtUser);
    }
    throw new Error('No user logged in');
  }
  logout(): Observable<boolean> {
    sessionStorage.removeItem('crtUser');
    return of(true);
  }
}
