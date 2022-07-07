import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../employees';
import { UsersLogin } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/login';
  // private url = 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/login'

  constructor(private http: HttpClient) { }

  postUsers(data: UsersLogin): Observable<any> {
    console.log(data);
    return this.http.post<UsersLogin>(this.url,data);
  }
  isLoggedIn(){
   return localStorage.getItem('roles')!= null
  }

 haveRoleAccess(pathName:any){
  const userRole = localStorage.getItem('roles')
  if(userRole==='admin'){
    // return true;
    if(pathName ==='waiter'){
      return false
    }
    return true;
  }
  else{
    if(pathName ==='waiter'){
      return true;
    }else{
      return false;
    }
  }
 }

}
