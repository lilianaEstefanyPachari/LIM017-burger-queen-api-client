import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-modal-new-users',
  templateUrl: './modal-new-users.component.html',
  styleUrls: ['./modal-new-users.component.css']
})
export class ModalNewUsersComponent implements OnInit {
  newUserForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      id: ["",Validators.required],
      email: ["",Validators.required],
      password: ["",Validators.required],
      roles: ["",Validators.required],
    })
  }

  addUser(){
    if(this.newUserForm.valid){
      const dataObj: any = this.newUserForm.value
      const roles:string = dataObj.roles
      // console.log(roles)
      if(roles==="administrador"){
        dataObj.roles = {
          admin: true,
        }
      } else if(roles!="administrador") {
        dataObj.roles = {
          admin: false,
        }
      }

      this.usersService.postUsersMethod(this.newUserForm.value).subscribe({
        next: ()=> { alert('exito')},
        error: () => { alert('error')}
      })
    }
  }


}
