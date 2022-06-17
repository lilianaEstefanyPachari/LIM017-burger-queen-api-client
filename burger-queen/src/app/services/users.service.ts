import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../employees';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsersMethod(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

  deleteUsersMethod(users: Users): Observable<Users> {
    const deleteUrl = `${this.url}/${users.id}`;
    return this.http.delete<Users>(deleteUrl);
  }
}
