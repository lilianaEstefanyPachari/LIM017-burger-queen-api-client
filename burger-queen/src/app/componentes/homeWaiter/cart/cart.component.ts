import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/models/products';
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
  public subTotal: number = 0;

  constructor(private mainCartService: MainCartService) {}

  ngOnInit(): void {
    this.mainCartService.getProducts()
    .subscribe(res=> {
      this.products = res;
      this.grandTotal = this.mainCartService.getTotalPrice();
    })
  }

  removeItem(product: any){
    this.mainCartService.removeCartItem(product)
  }

  emptyCart(){
    this.mainCartService.removeAllCart()
  }

  addQuantity(product:ProductCart){
    console.log(product)
    Object.assign(product,{quantity:product.quantity + 1})
  }

  removeQuantity(product:ProductCart){
    console.log(product)
    if(product.quantity > 1){
      Object.assign(product,{quantity:product.quantity - 1});
    }
     return
  }
}
