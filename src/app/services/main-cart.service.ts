import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCart } from '../models/products';

@Injectable({
  providedIn: 'root'
})

export class MainCartService {
  public cartItemList: any = [];
  public productList = new Subject<any>();

  constructor() { }

  getProducts(): Observable<any>{
    const emittedProductList = this.productList.asObservable();
    return emittedProductList;
  }
  addToCart(product: any){
    if(this.cartItemList.length === 0){
      this.cartItemList.push(product);
    }else{
      if (this.cartItemList.filter((e: ProductCart) => e.id === product.id).length > 0) {
        return
      } else{
        this.cartItemList.push(product);
      }
    }
    this.productList.next(this.cartItemList);
  }

  removeCartItem(product:any){
    this.cartItemList.map((e:any, index:any) => {
      if(product.id === e.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList)
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
