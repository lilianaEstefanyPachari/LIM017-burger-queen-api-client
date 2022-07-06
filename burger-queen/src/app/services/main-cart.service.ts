import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainCartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    this.productList.asObservable();
  }
  setProduct(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }
  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log("SERVICIOOOO añadiendo productos",this.cartItemList)
  }
  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((e:any) => {
      grandTotal+= e.price;
    })
  }
  removeCartItem(product:any){
    this.cartItemList.map((e:any, index:any) => {
      if(product.id === e.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
