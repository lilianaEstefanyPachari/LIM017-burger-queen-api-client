import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-delivering-chef',
  templateUrl: './orders-delivering-chef.component.html',
  styleUrls: ['./orders-delivering-chef.component.css'],
})
export class OrdersDeliveringChefComponent implements OnInit {
  ordersDelivering: any[] = [];

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.getAllDeliveringOrders()
  }

  getAllDeliveringOrders(){
    this.ordersService.getOrdersMethod()
    .subscribe({
      next: (res) => {
        const filterOfStatusDelivering = res.filter((e:any) => e.status === "delivering");
        this.ordersDelivering = filterOfStatusDelivering;
        console.log("delivering",filterOfStatusDelivering)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data de orders');
      }
    })
  }


}


