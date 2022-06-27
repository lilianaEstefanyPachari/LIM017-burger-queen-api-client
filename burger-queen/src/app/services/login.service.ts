import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../employees';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
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
