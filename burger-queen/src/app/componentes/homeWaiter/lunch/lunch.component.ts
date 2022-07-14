import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/products';
import { MainCartService } from 'src/app/services/main-cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppCartService } from 'src/app/services/shopp-cart.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  productsLunch: Product[] = [];
  directionCard: Direction = "ltr";

  constructor(private productsService:ProductsService,
    private shoppCartService:ShoppCartService,
    private addCartService: MainCartService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void{
    this.productsService.getProductsMethod()
    .subscribe({
      next: (res: Product[]) => {
        this.productsLunch = res.filter(e => e.type === "Almuerzo")
        this.productsLunch.forEach((product:Product) => {
          Object.assign(product,{quantity:1,total:product.price})
        })
      },
      error: (err) => {
        this.toastr.error('Error mientras se hacia la consulta de data', 'ERROR', {
          timeOut: 3000,
        });
      }
    })
  }
  openSideBareEvent(event: boolean): void{
    this.shoppCartService.openSideBareService(event)
  }

  addToCart(product: object) : void{
    this.openSideBareEvent(true);
    this.addCartService.addToCart(product);
  }

}
