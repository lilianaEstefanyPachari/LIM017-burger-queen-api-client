import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  products: any

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getProductsMethod()
    .subscribe({
      next: (res) => {
        this.products = res
        console.log(this.products)
      },
      error: (err) => {
        console.log(err, 'error mientras se hacia la consulta de data');
      }
    })
  }

}
