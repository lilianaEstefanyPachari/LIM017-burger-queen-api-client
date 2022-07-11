import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-orders-delivered',
  templateUrl: './orders-delivered.component.html',
  styleUrls: ['./orders-delivered.component.css']
})
export class OrdersDeliveredComponent implements OnInit {
  direction: Direction = "ltr";
  ordersDelivered: any[] = [];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getAllDeliveredOrders()
  }

  getAllDeliveredOrders(){
    this.productsService.getOrdersMethod()
    .subscribe({
      next: (res) => {
        const filterOfStatusDelivered = res.filter((e:any) => e.status === "delivered");
        this.ordersDelivered = filterOfStatusDelivered;
        console.log(res)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data de orders');
      }
    })
  }

}
