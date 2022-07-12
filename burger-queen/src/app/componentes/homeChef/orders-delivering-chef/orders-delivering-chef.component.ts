import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-delivering-chef',
  templateUrl: './orders-delivering-chef.component.html',
  styleUrls: ['./orders-delivering-chef.component.css'],
})
export class OrdersDeliveringChefComponent implements OnInit {
  ordersDelivering: any[] = [];
  // calcTime:any;

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

        // const calc = filterOfStatusDelivering.forEach((element:any) => {

        // });

        console.log("delivering",filterOfStatusDelivering)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data de orders');
      }
    })
  }

//   calcTime(a:any,b:any){
// //     dataEntry: "2022-07-12T15:32:00.000Z"
// // dateProcessed: "2022-07-12T15:34:00.000Z"

// //var diff = Math.abs(new Date('2011/10/09 12:00') - new Date('2011/10/09 00:00'));
//     const firstDate: string | Date = new Date(a.slice(0,10) +" " + a.slice(11,16))
//     console.log("sdiuvfbvffbd",firstDate)
//     const secondtDate = new Date(b.slice(0,10) +" " + b.slice(11,16))
//     // console.log("aaaaaaaaaaaaaaaaaaaaaaaa",Math.abs(parseInt(firstDate) - parseInt(secondtDate)))

//     var diff = Math.abs(parseInt(firstDate) - parseInt(secondtDate));
//     var minutes = Math.floor((diff/1000)/60);
//     console.log(minutes)
//     return minutes
//   }


}


