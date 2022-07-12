import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-pending',
  templateUrl: './orders-pending.component.html',
  styleUrls: ['./orders-pending.component.css']
})
export class OrdersPendingComponent implements OnInit {
  direction: Direction = "ltr";
  ordersPending: any[] = [];

  constructor(private ordersService:OrdersService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllPendingOrders()
  }

  getAllPendingOrders(){
    this.ordersService.getOrdersMethod()
    .subscribe({
      next: (res) => {
        const filterOfStatusPending = res.filter((e:any) => e.status === "pending");
        this.ordersPending = filterOfStatusPending;
        console.log("pending",filterOfStatusPending)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data de orders');
      }
    })
  }

  updateOrdersStatus(id: number){
    let date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),new Date().getHours());
    const updateData = {
      status: 'delivering',
      dateProcessed: date
    }
    this.ordersService.updateOrderMethod(updateData, id)
    .subscribe({
      next: () =>{
        this.toastr.success('Orden lista', 'Lista de ordenes');
        this.getAllPendingOrders()
      },
      error: (erro)=>{
        this.toastr.error('La orden no esta lista', 'ERROR', {
          timeOut: 3000,
        });
        console.log(erro);
      }
    })
  }


}
