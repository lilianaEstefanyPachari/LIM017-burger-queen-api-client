import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { ShoppCartService } from 'src/app/services/shopp-cart.service';

@Component({
  selector: 'app-home-waiter',
  templateUrl: './home-waiter.component.html',
  styleUrls: ['./home-waiter.component.css']
})
export class HomeWaiterComponent implements OnInit {

  renderViewControler:string = "viewOrders";

  SideBareOpend: boolean = false;
  direction: Direction = "rtl";
  originalDirection: Direction = "ltr"

  // public SideBareOpend: boolean = true;
  // direction: Direction = "rtl";

  // changeDir() {
  //   if (this.direction == "rtl") {
  //     this.direction = "ltr";
  //   } else {
  //     this.direction = "rtl";
  //   }
  // }


  constructor(private shoppCartService:ShoppCartService) {
    shoppCartService.changeEmitted$.subscribe(event => {
      console.log(event, "padre recibio esto del observador");
      this.SideBareOpend = event
  });
  }
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

  // openSideBare(): boolean{
  //   const viewSideBar: boolean = this.shoppCartService.parentOpenSideBare()
  //   console.log("llegueeeeeeeeeeeeeee al padre")
  //   return viewSideBar
  // }

}
