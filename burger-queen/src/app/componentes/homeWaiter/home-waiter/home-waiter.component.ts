import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { MainCartService } from 'src/app/services/main-cart.service';
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
  originalDirection: Direction = "ltr";
  public totalItems : number = 0;

  constructor(
    private shoppCartService: ShoppCartService,
    private mainCartService: MainCartService
    ) {
    shoppCartService.changeEmitted$.subscribe(event => {
      console.log(event, "el padre recibio esto del observador");
      this.SideBareOpend = event;
  });
  }
  ngOnInit(): void {
    this.mainCartService.getProducts()
    .subscribe(res => {
      this.totalItems = res.length;
    })
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
