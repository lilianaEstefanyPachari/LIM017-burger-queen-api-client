import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  direction: Direction = "ltr";
  renderViewControler:string = "delivering";
  // orders: any[] = [];
  // orderStatus:string = "";

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    // this.getAllOrders()
  }

  setStateOfViewDelivering(){
    this.renderViewControler = "delivering"
  }
  setStateOfViewDelivered(){
    this.renderViewControler = "delivered"
  }
  // getAllOrders(){
  //   this.productsService.getOrdersMethod()
  //   .subscribe({
  //     next: (res) => {
  //       this.orders = res;
  //       console.log("soy la rpta de get orders",res)
  //     },
  //     error: (err) => {
  //       console.log(err, 'error mientras se hacia la consulta de data de orders');
  //     }
  //   })
  // }


}
