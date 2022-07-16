import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private urlOrders = 'http://localhost:8080/orders/';

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

  //obtener ordenes
  getOrdersMethod(){
    return this.http.get<any>(this.urlOrders, this.httpOptions());
  }

  // crear orden
  postOrderMethod(data: any){
  return this.http.post<any>(this.urlOrders,data, this.httpOptions())
  }

   // actualizar status
   updateOrderMethod(orders: any, id: number) {
    return this.http.patch<any>(this.urlOrders+id, orders, this.httpOptions())
  }
}
