import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {Observable, of} from "rxjs";
import {debounceTime} from "rxjs/operators";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  user?: User |null ;
  error: string = '';
  loading: boolean = false;
  constructor(private router: Router,
              private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(): void {
    this.loading = true;
    try{
      this.authService.login(this.username,this.password)
        .subscribe((user:User)=>{
          this.user = user;
          this.error = '';

          setTimeout(()=>{
            this.loading = false;
            this.router.navigate(['/home'])
          },1000)

        },this.handleError<User>('login'))
    }catch (error){
      this.loading = false;
      this.error = error.message;
    }
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
