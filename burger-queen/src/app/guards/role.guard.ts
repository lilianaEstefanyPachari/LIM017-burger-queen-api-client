import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private service: LoginService, private route: Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userRole = localStorage.getItem('roles')
      if(!this.service.haveRoleAccess(route.url[0].path) && userRole==="admin"){
      console.log("route snapshotttttttt",route.url[0].path)
      this.route.navigate(['admin/users']);
      return false;
    } else if(!this.service.haveRoleAccess(route.url[0].path) && userRole==="waiter"){
      console.log("route snapshotttttttt",route.url[0].path)
      this.route.navigate(['waiter/breakfast']);
      return false;
    } else if(!this.service.haveRoleAccess(route.url[0].path) && userRole==="chef"){
      console.log("route snapshotttttttt",route.url[0].path)
      this.route.navigate(['']);
      return false;
    }
    else{
      return true;
    }

  }
}
