import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  //controla el estilo de los botones seleccionados
  renderTableControler:string = "userTable";

  constructor() { }

  ngOnInit(): void {
  }
  setStateOfViewProducts(){
    this.renderTableControler = "productsTable"
  }
  setStateOfViewUsers(){
    this.renderTableControler = "userTable"
  }

  logOut(){
    localStorage.clear();
  }

}
