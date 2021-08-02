import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  route: string = 'Food & Stuff'
  nrFoods:number = 0;
  nrStuff:number = 0;
  @Output() showFoodEvent = new EventEmitter<string>();
  @Output() showStuffEvent = new EventEmitter<string>();
  @Output() showFoodStuffEvent = new EventEmitter<string>();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getNrFoods()
      .subscribe((nrFoods:number)=>{
        this.nrFoods = nrFoods;
      });
    this.dataService.getNrStuff()
      .subscribe((nrStuff:number)=>{
        this.nrStuff = nrStuff;
      });
  }

  showFood():void {
    this.route = 'Food';
    this.showFoodEvent.emit("Show food event");
  }

  shotStuff() {
    this.route = 'Stuff';
    this.showStuffEvent.emit('Show stuff event');
  }

  showFoodStuff() {
    this.route = 'Food & Stuff';
    this.showFoodStuffEvent.emit('Show stuff food event');
  }
}
