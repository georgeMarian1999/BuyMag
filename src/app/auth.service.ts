import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable, of} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(username:string, password:string):Observable<User>{
    username = username.trim();
    password = password.trim();
    const users:[User] = JSON.parse(localStorage.getItem('users')|| '[]');
    if(users.length) {
      const index = users.findIndex((el: User) => el.username === username && el.password === password);
      if (index === -1) {
        throw new Error('Wrong username or password');
      }
      const user = users[index];
      sessionStorage.setItem('crtUser', JSON.stringify(user));
      return of(user);
    }
    throw new Error('Database error');
  }
  register(username:string, password:string): Observable<null>{
    username = username.trim();
    password = password.trim();
    const users:[User] = JSON.parse(localStorage.getItem('users')|| '[]');
    const index = users.findIndex((el: User) => el.username === username);
    if (index === -1) {
      const newUser = new User(username,password);
      users.push(newUser);
      localStorage.setItem('users',JSON.stringify(users));
      return of(null);
    }
    throw new Error('Username already exists');
  }
}
