import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/employees';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root'})

export class UsersService {

  // private url = 'http://localhost:8080/users/';
  private url = environment.apiURLUsers;


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

//obtener la data de usuarios
  getUsersMethod(): Observable<any> {
    return this.http.get<Users[]>(this.url, this.httpOptions());
  }

// crear usuarios
  postUsersMethod(data: Users){
    return this.http.post<Users>(this.url,data, this.httpOptions())
  }

// eliminar usuarios
  deleteUsersMethod(users: Users): Observable<Users> {

    const deleteUrl = `${this.url}/${users.id}`;
    console.log(deleteUrl);
    return this.http.delete<Users>(deleteUrl, this.httpOptions());
  }

  // actualizar usuarios
  updateUsersMethod(users: any, id: number) {
    // const deleteUrl = `${this.url}/${users.id}`;
    return this.http.patch<any>(this.url+id, users, this.httpOptions())
  }
}




  // {
  //   "userId": 15254,
  //   "client": "Carol Shaw",
  //   "products": [
  //     {
  //       "qty": 5,
  //       "product": {
  //         "id": 1214,
  //         "name": "Sandwich de jamón y queso",
  //         "price": 1000,
  //         "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
  //         "type": "Desayuno",
  //         "dateEntry": "2022-03-05 15:14:10"
  //       }
  //     },
  //   ],
  //   "status": "pending",
  //   "dateEntry": "2022-03-05 15:14:10"
  // }
