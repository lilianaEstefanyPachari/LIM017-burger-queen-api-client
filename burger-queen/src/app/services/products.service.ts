import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  accessToken = localStorage.getItem("token")

  //Headers requeridos
  httpOptions = () => (
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`,
        })
    })

  getProductsMethod(){
    return this.http.get<any>(this.url, this.httpOptions());
  }

  postProductsMethod(data: any){
    return this.http.post<any>(this.url,data, this.httpOptions())
  }

  deleteProductsMethod(id:number){
    return this.http.delete<any>(this.url+id, this.httpOptions());
  }

  updateProductsMethod(data: any, id: number) {
    return this.http.put<any>(this.url+id, data, this.httpOptions())
  }
}
