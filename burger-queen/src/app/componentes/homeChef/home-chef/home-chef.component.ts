import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-chef',
  templateUrl: './home-chef.component.html',
  styleUrls: ['./home-chef.component.css']
})
export class HomeChefComponent implements OnInit {
  renderViewControler:string = "pending";
  originalDirection: Direction = "ltr";

  constructor() { }

  ngOnInit(): void {
  }


  setStateOfViewPending(){
    this.renderViewControler = "pending"
  }
  setStateOfViewdelivering(){
    this.renderViewControler = "delivering"
  }

  logOut(){
    localStorage.clear();
  }


}
