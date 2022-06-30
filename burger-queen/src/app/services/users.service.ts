import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../employees';
//const userToken = localStorage.getItem('token');
// const myHeaders = new Headers();

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json',  'authorization': userToken})
// }

// const headers= new HttpHeaders()
//   .set('content-type', 'application/json')
//   .set('authorization', userToken);


// const userToken: string | null = localStorage.getItem('token');
//const userToken: string ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2NTY1NzAwMDgsImV4cCI6MTY1NjU3MzYwOCwic3ViIjoiMSJ9.VEaGcoxmg05WIEQbx6LzWEuwAO09VvQNDLFCgGi3nu4"

// let httpOptions : object | undefined;
//  if(userToken !== null){
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       Authorization: userToken
//     })
//   };
// }

// const httpOptions = {
//   headers: new HttpHeaders({
//    'Content-Type':  'application/json',
//     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY1MDIzMzkwOSwiZXhwIjoxNjUwMjM3NTA5LCJzdWIiOiIyIn0.nS99u-MBatZHbexMUenwsGdS8oV55BIaGwI6PSP7BC8"
//   })
// };

@Injectable({ providedIn: 'root'})

export class UsersService {

  private url = 'http://localhost:8080/users/';


  // headers = {
  //   headers: {"Content-Type": "application/json",
  //               authorization: this.userToken
  //            }
  // }

  // private myHeaders = new Headers();
  // this.myHeaders.append("Content-Type", "application/json");
  // this.myHeaders.append("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2NTY1NjM0MDgsImV4cCI6MTY1NjU2NzAwOCwic3ViIjoiMSJ9.ntqLpImTBlizHSnP8uEZ1fbvfgQ5Ji_bHi260z8JKUI");


  constructor(private http: HttpClient) { }

  accessToken = localStorage.getItem("token")

  httpOptions = () => (
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`,
        })
    })

  getUsersMethod(): Observable<any> {
    console.log("fhffffffffffffffffffffffffffffffff",this.httpOptions())
    return this.http.get<Users[]>(this.url, this.httpOptions());
  }


  postUsersMethod(data: Users){
    return this.http.post<Users>(this.url,data)
  }

  deleteUsersMethod(users: Users): Observable<Users> {
    const deleteUrl = `${this.url}/${users.id}`;
    return this.http.delete<Users>(deleteUrl);
  }

  // updateUsersMethod(users: Users): Observable<Users> {
  //   const deleteUrl = `${this.url}/${users.id}`;
  //   return this.http.put<Users>(deleteUrl, users, httpOptions)
  // }

  updateUsersMethod(users: any, id: number) {
    // const deleteUrl = `${this.url}/${users.id}`;
    return this.http.put<any>(this.url+id, users)
  }
}

// export class ProductsService {

//   private url = 'http://localhost:3000/products/';

//   constructor(private http: HttpClient) { }

//   getProductsMethod(){
//     return this.http.get<any>(this.url);
//   }

//   postProductsMethod(data: any){
//     return this.http.post<any>(this.url,data)
//   }

//   deleteProductsMethod(id:number){
//     return this.http.delete<any>(this.url+id);
//   }

//   updateProductsMethod(data: any, id: number) {
//     return this.http.put<any>(this.url+id, data)
//   }
// }
