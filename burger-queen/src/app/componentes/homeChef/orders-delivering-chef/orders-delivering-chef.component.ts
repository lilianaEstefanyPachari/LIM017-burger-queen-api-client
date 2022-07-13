import { Component, OnInit} from '@angular/core';
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

  calcTime(a:string,b:string){
    const date1 = new Date(a);
    const date2 = new Date(b);
    const msBetweenDates = date2.getTime() - date1.getTime();
    const displayDate = this.convertMsToTime(Math.abs(msBetweenDates));
    return displayDate
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  convertMsToTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}:${this.padTo2Digits(seconds)}`;
  }
}


