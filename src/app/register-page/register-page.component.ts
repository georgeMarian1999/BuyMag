import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  name: string = '';
  error : string = '';
  loading: boolean = false;
  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  register():void {
    try{
      this.authService.register(this.username,this.password,this.name)
        .subscribe();
      this.router.navigate(['/login']);
    }catch (error){
      this.error = error.message;
    }
  }
}
