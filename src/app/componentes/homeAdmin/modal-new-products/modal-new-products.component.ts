import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/products';


@Component({
  selector: 'app-modal-new-products',
  templateUrl: './modal-new-products.component.html',
  styleUrls: ['./modal-new-products.component.css']
})
export class ModalNewProductsComponent implements OnInit {
  productForm !: FormGroup;
  actionBtn: string = "Guardar"
  actionTitle: string = 'Formulario para añadir productos'

  constructor(private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private dialogRef: MatDialogRef<ModalNewProductsComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public editData: Product,
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name : ["",Validators.required],
      price: ["",Validators.required],
      image: ["",Validators.required],
      type: ["",Validators.required]
    });
    if(this.editData){
      this.actionTitle = 'Formulario para actualizar productos'
      this.actionBtn = "Actualizar";
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['image'].setValue(this.editData.image);
      this.productForm.controls['type'].setValue(this.editData.type);
    }
  }


  addProduct(){
    if(!this.editData){
      if(this.productForm.valid){
        this.productsService.postProductsMethod(this.productForm.value)
        .subscribe({
          next: () => {
            this.toastr.success('Producto añadido', 'Registro con exito');
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            this.toastr.error('No se pudo añadir producto', 'ERROR', {
              timeOut: 3000,
            });
          }
        })
      }
    }else{
      this.updateProduct()
    }
  }

  updateProduct(){
    this.productsService.updateProductsMethod(this.productForm.value, this.editData.id)
    .subscribe({
      next: (res) => {
        this.toastr.success('Producto actualizado', 'Actualizado con exito');
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        this.toastr.error('No se pudo actualizar producto', 'ERROR', {
          timeOut: 3000,
        });
      }
    })
  }


}
