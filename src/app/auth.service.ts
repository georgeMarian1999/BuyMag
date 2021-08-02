import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";
import {users} from "./home/mock-users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = users;
  constructor() { }
  login(username:string, password:string):Observable<User>{
    username = username.trim();
    password = password.trim();
    if(this.users.length) {
      const index = this.users.findIndex((el: User) => el.username === username && el.password === password);
      if (index === -1) {
        throw new Error('Wrong username or password');
      }
      const user = users[index];
      sessionStorage.setItem('crtUser', JSON.stringify(user));
      return of(user).pipe(
        delay(1000)
      );
    }
    throw new Error('Database error');
  }
  register(username:string, password:string, name:string): Observable<null>{
    username = username.trim();
    password = password.trim();
    const index = users.findIndex((el: User) => el.username === username);
    if (index === -1) {
      const newUser = new User(username,password,name);
      users.push(newUser);
      // localStorage.setItem('users',JSON.stringify(users));
      return of(null).pipe(
        delay(1000),
      );
    }
    throw new Error('Username already exists');
  }
}
