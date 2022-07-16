import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppCartService {

  constructor() { }
    //Servicio para manejar evento de abrir o cerrar carrito
      // Crear Observable
      private emitChangeSource = new Subject<boolean>();
      changeEmitted = this.emitChangeSource.asObservable();
      // Método para enviar evento (true o false)
      openSideBareService(event: boolean){
       this.emitChangeSource.next(event);
      }

}
