import { Direction } from '@angular/cdk/bidi';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/products';
import { MainCartService } from 'src/app/services/main-cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppCartService } from 'src/app/services/shopp-cart.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  productsBreakfast: Product[] = [];
  directionCard: Direction = "ltr";
  // @Output() openEvent = new EventEmitter<boolean>()

  constructor(
    private productsService:ProductsService,
    private shoppCartService:ShoppCartService,
    private addCartService: MainCartService
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getProductsMethod()
    .subscribe({
      next: (res: Product[]) => {
        console.log('productoooooossssssssssssss',res)

        this.productsBreakfast = res.filter(e => e.type === "Desayuno");
        this.productsBreakfast.forEach((product:any) => {
          Object.assign(product,{quantity:1,total:product.price})
        })
        console.log('productos filtradoooooooooAAAAAs',this.productsBreakfast)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data');
      }
    })
  }

  openSideBareEvent(event: boolean): void{
    console.log("pasando un true del hijo")
    this.shoppCartService.openSideBareService(event)
  }

  addToCart(product: object){
    this.openSideBareEvent(true);
    console.log("añadiendo al carrito")
    //console.log("soy el productooooooooo",product)
    this.addCartService.addToCart(product);
  }

}
