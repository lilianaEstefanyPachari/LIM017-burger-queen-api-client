import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-pending',
  templateUrl: './orders-pending.component.html',
  styleUrls: ['./orders-pending.component.css']
})
export class OrdersPendingComponent implements OnInit {
  direction: Direction = "ltr";
  ordersPending: any[] = [];

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.getAllPendingOrders()
  }

  getAllPendingOrders(){
    this.ordersService.getOrdersMethod()
    .subscribe({
      next: (res) => {
        const filterOfStatusPending = res.filter((e:any) => e.status === "pending");
        this.ordersPending = filterOfStatusPending;
        console.log(res)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data de orders');
      }
    })
  }


}
