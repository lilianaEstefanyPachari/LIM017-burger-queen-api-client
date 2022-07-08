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
  public granTotal: number = 0;

  constructor(private mainCartService: MainCartService) {}

  ngOnInit(): void {
    this.mainCartService.getProducts()
    .subscribe(res=> {
      this.products = res;
      console.log("arrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",this.products)
      this.granTotal = this.calcGranTotal(this.products);
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
    this.addSubTotal(product)
    console.log("lista actualizadaaaaaaaaaaaaaaaaaaaaaaaa",this.products)
    this.granTotal = this.calcGranTotal(this.products)

  }

  removeQuantity(product:ProductCart){
    console.log(product)
    if(product.quantity > 1){
      Object.assign(product,{quantity:product.quantity - 1});
    }
    this.removeSubTotal(product)
    this.granTotal = this.calcGranTotal(this.products)
    return
  }
  addSubTotal(product:ProductCart){
    const result = product.quantity * product.price;
    Object.assign(product,{total:result});
    //this.mainCartService.addToCart(product)
  }

  removeSubTotal(product:ProductCart){
    if(product.total> product.price){
      const result = product.total-product.price
      Object.assign(product,{total:result});
      //this.mainCartService.addToCart(product)
    } else {
      return
    }
  }


  calcGranTotal(products:ProductCart[]){
    console.log("products de GRAN TOTALLLLLLLLLL",products)
    let grandTotal = 0;
    products.map((e:any) => {
      grandTotal += e.total;
    })
    return grandTotal;
  }

}
