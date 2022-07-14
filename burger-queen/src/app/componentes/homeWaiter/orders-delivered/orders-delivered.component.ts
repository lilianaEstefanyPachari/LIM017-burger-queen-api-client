import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders';
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

//   client: "Jude Milhon"
// dataEntry: "2022-03-05 15:00"
// dateProcessed: "2022-07-13T05:22:00.000Z"
// id: 1
// products: Array(2)
// 0:
// product:
// dateEntry: "2022-03-05 15:14:10"
// id: 1
// image: "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg"
// name: "Sandwich de jamón y queso"
// price: 1000
// type: "Desayuno"
// [[Prototype]]: Object
// qty: 1
// status: "delivered"
// userId: 1
  getAllDeliveredOrders(){
    this.ordersService.getOrdersMethod()
    .subscribe({
      next: (res) => {
        const filterOfStatusDelivered = res.filter((e:Orders) => e.status === "delivered");
        this.ordersDelivered = filterOfStatusDelivered;
        console.log("TODAS LAS ORDENEEEEEEEEESSSSSSSS",res)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data de orders');
      }
    })
  }

}
