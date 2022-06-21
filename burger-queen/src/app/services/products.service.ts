import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) { }

  getProductsMethod(){
    return this.http.get<any>(this.url);
  }

  postProductsMethod(data: any){
    return this.http.post<any>(this.url,data)
  }

  deleteProductsMethod(id:number){
    return this.http.delete<any>(this.url+id);
  }

  updateProductsMethod(data: any, id: number) {
    return this.http.put<any>(this.url+id, data)
  }
}
