import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/models/products';
import { MainCartService } from 'src/app/services/main-cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  direction: Direction = "ltr";

  public products:any = [];
  public granTotal: number = 0;
  clientName:string = "";
  orderForm !: FormGroup;

  constructor(private mainCartService: MainCartService,
    private orderService:OrdersService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.mainCartService.getProducts()
    .subscribe(res=> {
      this.products = res;
      console.log("arrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",this.products)
      this.granTotal = this.calcGranTotal(this.products);
    });

    this.orderForm = this.formBuilder.group({
      name : ["",Validators.required],
    });
  }

  removeItem(product: any){
    this.mainCartService.removeCartItem(product)
  }

  emptyCart(){
    this.mainCartService.removeAllCart();
    this.orderForm.reset();
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
  }

  removeSubTotal(product:ProductCart){
    if(product.total> product.price){
      const result = product.total-product.price
      Object.assign(product,{total:result});
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

 //crear orden
 addOrder(){
  let date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),new Date().getHours(),new Date().getMinutes());
  let orderData:any = [];

  this.products.forEach((e:any) => {
    const obj = {
      qty: e.quantity,
      product: {
        id: e.id,
        name: e.name,
        price: e.price,
        image: e.image,
        type: e.type,
        dateEntry: date,
      }
    }
   orderData.push(obj)

 })


  const newOrder = {
    userId: localStorage.getItem('ID'),
    client: this.clientName,
    products: orderData,
    status: "pending",
    dataEntry: date
  }
    if(this.orderForm.valid){

      this.orderService.postOrderMethod(newOrder).subscribe({
        next: ()=> {
           this.toastr.success('Orden enviada', 'Orden con exito');
        },
        error: (error) => {
          this.toastr.error('No se pudo enviar orden', 'ERROR', {
            timeOut: 3000,
          });
        }
      });
      this.emptyCart()

     }else{
      this.toastr.error('Ingrese el nombre de cliente', 'ERROR', {
        timeOut: 3000,
      });
     }


}

}
