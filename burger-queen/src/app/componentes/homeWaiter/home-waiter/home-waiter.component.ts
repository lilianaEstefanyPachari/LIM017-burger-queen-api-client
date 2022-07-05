import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-waiter',
  templateUrl: './home-waiter.component.html',
  styleUrls: ['./home-waiter.component.css']
})
export class HomeWaiterComponent implements OnInit {
  opened = false;
  renderViewControler:string = "viewOrders";
  constructor() { }

  ngOnInit(): void {
  }

  setStateOfViewListOrders(){
    console.log("cambie el estado a listOrders")
    this.renderViewControler = "viewListOrders"
  }
  setStateOfViewOrders(){
    console.log("cambie el estado a viewOrders")
    this.renderViewControler = "viewOrders"
  }

  logOut(){
    localStorage.clear();
  }

}
