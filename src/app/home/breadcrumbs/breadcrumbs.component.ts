import {Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  route: string = 'Food & Stuff'
  @Output() showFoodEvent = new EventEmitter<string>();
  @Output() showStuffEvent = new EventEmitter<string>();
  @Output() showFoodStuffEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  showFood():void {
    this.route = 'Food';
    this.showFoodEvent.emit("Show food event");
  }

  shotStuff() {
    this.route = 'Stuff';
    this.showStuffEvent.emit('Show stuff event');
  }
}
