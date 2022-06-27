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
    if(this.service.haveRoleAccess(route.url[0].path)){
      console.log("route snapshotttttttt",route.url[0].path)
      return true;
    }else{
      alert('no tienes acceso, inicia sesion con una cuenta autorizada')
      this.route.navigate(['']);
      // manejar rutas con local store
      return false;
    }

  }

}

