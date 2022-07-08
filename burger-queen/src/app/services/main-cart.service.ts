import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product, ProductCart } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class MainCartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

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
        console.log("el producto ya existe en el carrito");
        console.log("carritooooooooooooooooooooooooooooooooooooo",product)
        return
      } else{
        this.cartItemList.push(product);
      }
    }
    this.productList.next(this.cartItemList);
    console.log("SERVICIOOOO añadiendo productos",this.cartItemList)
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
