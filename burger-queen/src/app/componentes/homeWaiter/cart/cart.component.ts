import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { MainCartService } from 'src/app/services/main-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  direction: Direction = "ltr";

  public products:any = [];
  public grandTotal: number = 0;

  constructor(private mainCartService: MainCartService) {}

  ngOnInit(): void {
    this.mainCartService.getProducts()
    .subscribe(res=> {
      this.products = res;
      this.grandTotal = this.mainCartService.getTotalPrice();
    })
  }

}
