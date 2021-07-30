import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../../user";
import {Router} from "@angular/router";


@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.css']
})
export class CustomNavbarComponent implements OnInit,OnDestroy {
  time: string = '';
  date: string = '';
  user?: User;
  timeInterval? :any;
  constructor(private userService:UserService,
              private router:Router,
  ) { }

  ngOnInit(): void {
    try{
      this.userService.getCrtUser()
        .subscribe((user:User)=>{
          this.user = user;
        })
    }catch (error){
      this.router.navigate(['/login']);
    }
   this.setDate();
    this.currentTime();
   this.timeInterval = setInterval(this.currentTime,1000);
  }
  ngOnDestroy() {
    clearInterval(this.timeInterval);
  }
  currentTime(): void {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    const hh = (hour<10) ? '0' + hour.toString() : hour.toString();
    const mm = (min<10) ? '0' +min.toString() : min.toString();
    const ss = (sec<10) ? '0' + sec.toString() : sec.toString();
    // this.time = hh + ':' + mm + ':' + ss;
    const timeElem = document.querySelector('.time');
    if(timeElem){
      timeElem.innerHTML = hh + ':' + mm + ':' + ss;
    }
  }

  setDate():void {
    const date = new Date();
    const month = (date.getMonth() < 10) ? '0' + date.getMonth().toString() : date.getMonth().toString();
    const day = (date.getDate() < 10) ? '0' + date.getDate().toString() : date.getDate().toString();
    this.date = month + "/" + day + "/" + date.getFullYear().toString();

  }

  showLogout():void {
    const arrowDown = document.querySelector('#keyboard-down');
    const arrowUp = document.querySelector('#keyboard-up');
    if(arrowDown) {
      arrowDown.classList.toggle('show',false);
      arrowDown.classList.toggle('hide', true);
    }
    if(arrowUp){
      arrowUp.classList.toggle('hide',false);
      arrowUp.classList.toggle('show',true);
    }
    const logoutDropDown = document.querySelector('.custom-navbar-logout')!;
    logoutDropDown.classList.toggle('showDropDown', true);
  }

  hideLogout():void {
    const arrowDown = document.querySelector('#keyboard-down');
    const arrowUp = document.querySelector('#keyboard-up');
    if(arrowDown) {
      arrowDown.classList.toggle('show',true);
      arrowDown.classList.toggle('hide', false);
    }
    if(arrowUp){
      arrowUp.classList.toggle('hide',true);
      arrowUp.classList.toggle('show',false);
    }
    const logoutDropDown = document.querySelector('.custom-navbar-logout')!;
    logoutDropDown.classList.toggle('showDropDown', false);

  }
}
