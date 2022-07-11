import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-delivered',
  templateUrl: './orders-delivered.component.html',
  styleUrls: ['./orders-delivered.component.css']
})
export class OrdersDeliveredComponent implements OnInit {
  direction: Direction = "ltr";
  ordersDelivered: any[] = [];

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.getAllDeliveredOrders()
  }

  getAllDeliveredOrders(){
    this.ordersService.getOrdersMethod()
    .subscribe({
      next: (res) => {
        const filterOfStatusDelivered = res.filter((e:any) => e.status === "delivered");
        this.ordersDelivered = filterOfStatusDelivered;
        console.log("TODAS LAS ORDENEEEEEEEEESSSSSSSS",res)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data de orders');
      }
    })
  }

}
