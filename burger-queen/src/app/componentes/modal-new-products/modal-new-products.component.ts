import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
    @Inject(MAT_DIALOG_DATA) public editData: any,
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name : ["",Validators.required],
      price: ["",Validators.required],
      image: ["",Validators.required],
      type: ["",Validators.required]
    });
   // console.log(this.editData)
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
            alert('producto añadido correctamente');
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error al añadir producto')
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
        alert('Producto actualizado con exito');
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('error al actualizar producto')
      }
    })
  }


}
