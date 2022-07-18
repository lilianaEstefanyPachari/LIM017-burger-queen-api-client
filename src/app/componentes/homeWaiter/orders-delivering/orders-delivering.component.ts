import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders-delivering',
  templateUrl: './orders-delivering.component.html',
  styleUrls: ['./orders-delivering.component.css']
})
export class OrdersDeliveringComponent implements OnInit {
  direction: Direction = "ltr";
  ordersDelivering: any[] = [];

  constructor(private ordersService:OrdersService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllDeliveredOrders()
  }

  getAllDeliveredOrders(){
    this.ordersService.getOrdersMethod()
    .subscribe({
      next: (res) => {
        const filterOfStatusDelivering = res.filter((e:any) => e.status === "delivering");
        this.ordersDelivering = filterOfStatusDelivering;
        console.log("las delivering",filterOfStatusDelivering)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data de orders');
      }
    })
  }

  updateOrdersStatus(id: number){
    const updateData = {
      status: 'delivered',
    }
    this.ordersService.updateOrderMethod(updateData, id)
    .subscribe({
      next: () =>{
        this.toastr.success('Orden entregada', 'Éxito');
        this.getAllDeliveredOrders()
      },
      error: (erro)=>{
        this.toastr.error('Orden no entregada', 'ERROR', {
          timeOut: 3000,
        });
        console.log(erro);
      }
    })
  }

}
