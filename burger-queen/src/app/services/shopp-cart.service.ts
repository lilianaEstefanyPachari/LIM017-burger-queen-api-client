import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppCartService {

  constructor() { }

      // Observable string sources
      private emitChangeSource = new Subject<any>();
      // Observable string streams
      changeEmitted$ = this.emitChangeSource.asObservable();
      // Service message commands
      openSideBareService(event: boolean){
       this.emitChangeSource.next(event);
       console.log(event,"observador service recibio esto de hijo")
      }

}
