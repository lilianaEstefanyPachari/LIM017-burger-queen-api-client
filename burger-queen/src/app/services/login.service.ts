import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from '../employees';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.url);
  }
}
