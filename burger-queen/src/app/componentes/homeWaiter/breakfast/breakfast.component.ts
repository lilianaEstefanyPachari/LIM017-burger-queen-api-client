import { Direction } from '@angular/cdk/bidi';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/products';
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

  constructor(private productsService:ProductsService,private shoppCartService:ShoppCartService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getProductsMethod()
    .subscribe({
      next: (res: Product[]) => {
        console.log('productoooooossssssssssssss',res)

        this.productsBreakfast = res.filter(e => e.type === "Desayuno")
        console.log('unPorductooooooooooo',this.productsBreakfast)
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

}
