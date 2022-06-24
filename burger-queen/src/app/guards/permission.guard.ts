import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
// import { LoginComponent } from '../componentes/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private service: LoginService, private route: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if(this.login()){
    //   return true;
    // }
    // //redireccion
    // alert('no tienes permisos')
    // return false

    if(this.service.isLoggedIn()){
      return true;
    } else{
      this.route.navigate(['']);
      return false
    }


  }
  // login(): boolean{
  //   return true;
  // }

}
