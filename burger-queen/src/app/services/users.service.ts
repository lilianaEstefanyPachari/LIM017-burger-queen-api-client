import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../employees';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  getUsersMethod(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
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
