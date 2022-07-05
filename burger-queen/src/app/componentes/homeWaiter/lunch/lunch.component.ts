import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  productsLunch: Product[] = [];
  directionCard: Direction = "ltr";

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }


  getAllProducts(){
    this.productsService.getProductsMethod()
    .subscribe({
      next: (res: Product[]) => {
        console.log('productoSS ALMUERZO',res)

        this.productsLunch = res.filter(e => e.type === "Almuerzo")
        console.log('ALMUERZOOOOOOOOOOOOOOOO',this.productsLunch)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data');
      }
    })
  }

}
