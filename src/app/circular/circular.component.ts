import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

public happytext = 'my manager is on leave!!'
public todos = [
'wakeup early',
'brush your teeth',
'take bath',
'go to office'
]
  constructor() { }

  ngOnInit() {
  this.happytext = 'my manager is on sick!!!'
  }
  makemehappier(){
      this.happytext = 'my manager got fired!!'
      }
}
