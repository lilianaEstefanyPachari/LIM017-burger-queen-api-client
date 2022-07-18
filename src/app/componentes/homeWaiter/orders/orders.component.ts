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

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  setStateOfViewDelivering(){
    this.renderViewControler = "delivering"
  }
  setStateOfViewDelivered(){
    this.renderViewControler = "delivered"
  }
}
