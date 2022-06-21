import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Users } from 'src/app/employees';
import { UsersService } from 'src/app/services/users.service';
import { ModalNewUsersComponent } from '../modal-new-users/modal-new-users.component';

@Component({
  selector: 'app-home-admin-users',
  templateUrl: './home-admin-users.component.html',
  styleUrls: ['./home-admin-users.component.css']
})
export class HomeAdminUsersComponent implements OnInit {
  users: Users[] = [];
  msj = 'administrador'
  msj2 = 'empleado'

  constructor(private usersService: UsersService, private modalNewUser:MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getUsersMethod().subscribe((users) => (this.users = users, console.log(users)));
  }

  deleteUsers(users: Users){
    this.usersService
    .deleteUsersMethod(users)
    .subscribe(
    (users) => (this.users = this.users.filter(u => u.id !== users.id)));
    this.getAllUsers();
  }

  editUsers(row: any){
    this.modalNewUser.open(ModalNewUsersComponent, {
      width : "30%",
      data : row
    }).afterClosed().subscribe((value) =>{
      if (value==="update"){
        this.getAllUsers();
      }
    })
  }

  openDialog() {
    this.modalNewUser.open(ModalNewUsersComponent, {
      width:"30%"
    }).afterClosed().subscribe(val=>{
      if(val==="save"){
        this.getAllUsers();
      }
    })
  }

}
