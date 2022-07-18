import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalNewProductsComponent } from '../modal-new-products/modal-new-products.component';
import { ProductsService } from 'src/app/services/products.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/products';

//interface para header de tabla productos
export interface ProductsData {
  name: string;
  price: string;
  image: string;
  type: string;
  action: string
}

@Component({
  selector: 'app-home-admin-products',
  templateUrl: './home-admin-products.component.html',
  styleUrls: ['./home-admin-products.component.css']
})
export class HomeAdminProductsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'image','type','action'];
  dataSource!: MatTableDataSource<ProductsData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private modalNewProduct:MatDialog, private productsService:ProductsService, private toastr: ToastrService){
  }

  ngOnInit(): void {
    this.getAllProducts();
  }


  openDialog(): void {
    this.modalNewProduct.open(ModalNewProductsComponent, {
      minWidth: "450px",
      width:"30%"
    }).afterClosed().subscribe(val=>{
      if(val==="save"){
        this.getAllProducts();
      }
    })
  }

  getAllProducts(){
    this.productsService.getProductsMethod()
    .subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error: (err) => {
        this.toastr.error('Error mientras se hacia la consulta de data', 'ERROR', {
          timeOut: 3000,
        });
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  editProduct(row: Product){
    this.modalNewProduct.open(ModalNewProductsComponent,{
      minWidth: "450px",
      width:"30%",
      data:row
    }).afterClosed().subscribe((val) => {
      if(val==="update"){
        this.getAllProducts();
      }
    })
  }

  deleteProduct(id:number){
    this.productsService.deleteProductsMethod(id)
    .subscribe({
      next: () => {
        this.toastr.success('Producto eliminado', 'Eliminado con exito');
        this.getAllProducts()
      },
      error: () => {
        this.toastr.error('No se pudo eliminar producto', 'ERROR', {
          timeOut: 3000,
        });
      }
    })
  }

}
