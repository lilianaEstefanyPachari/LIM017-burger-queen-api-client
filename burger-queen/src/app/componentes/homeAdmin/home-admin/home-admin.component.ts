import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  //recibira data del componente padre, @es un decorador de quien recibira
  renderTableControler:string = "userTable";



  constructor() { }

  ngOnInit(): void {
    // this.getAllUsers();
  }
  setStateOfViewProducts(){
    console.log("cambie el estado a product")
    this.renderTableControler = "productsTable"
  }
  setStateOfViewUsers(){
    console.log("cambie el estado a users")
    this.renderTableControler = "userTable"
  }

  // getAllUsers(): void {
  //   this.usersService.getUsersMethod().subscribe((users) => (this.users = users, console.log(users)));
  // }

  // deleteUsers(users: Users){
  //   this.usersService
  //   .deleteUsersMethod(users)
  //   .subscribe(
  //   (users) => (this.users = this.users.filter(u => u.id !== users.id)));
  //   this.getAllUsers();
  // }

  // editUsers(row: any){
  //   this.modalNewUser.open(ModalNewUsersComponent, {
  //     width : "30%",
  //     data : row
  //   }).afterClosed().subscribe((value) =>{
  //     if (value==="update"){
  //       this.getAllUsers();
  //     }
  //   })
  // }

  // openDialog() {
  //   this.modalNewUser.open(ModalNewUsersComponent, {
  //     width:"30%"
  //   }).afterClosed().subscribe(val=>{
  //     if(val==="save"){
  //       this.getAllUsers();
  //     }
  //   })
  // }


  // obtenerEmpleados(){
  //   this._empleadosService.getEmpleados().subscribe(data =>{
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
