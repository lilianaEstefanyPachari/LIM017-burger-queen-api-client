import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-new-users',
  templateUrl: './modal-new-users.component.html',
  styleUrls: ['./modal-new-users.component.css']
})
export class ModalNewUsersComponent implements OnInit {
  newUserForm !: FormGroup;
  actionBtn: string = 'Guardar'
  // roles:any

  constructor(private formBuilder: FormBuilder,
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<ModalNewUsersComponent>) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      id: ["",Validators.required],
      email: ["",Validators.required],
      password: ["",Validators.required],
      roles: ["",Validators.required],
    })

    if(this.editData){
    // let dataObj: any = this.editData.roles
    // // let roles:string = dataObj.roles
    // if(dataObj===true){
    //   console.log("soy administrador")
    //   this.roles= "administrador",
    //   this.newUserForm.controls['id'].setValue(this.editData.id);
    //   this.newUserForm.controls['email'].setValue(this.editData.email);
    //   this.newUserForm.controls['password'].setValue(this.editData.password);
    //   this.newUserForm.controls['roles'].setValue(this.roles);
    // } else {
    //   console.log("soy empleado")
    //   this.roles= 'empleado';
    //   this.newUserForm.controls['id'].setValue(this.editData.id);
    //   this.newUserForm.controls['email'].setValue(this.editData.email);
    //   this.newUserForm.controls['password'].setValue(this.editData.password);
    //   this.newUserForm.controls['roles'].setValue(this.roles);

    // }
      this.actionBtn = 'Actualizar'
      this.newUserForm.controls['id'].setValue(this.editData.id);
      this.newUserForm.controls['email'].setValue(this.editData.email);
      this.newUserForm.controls['password'].setValue(this.editData.password);
      this.newUserForm.controls['roles'].setValue(this.editData.roles);
    }
    console.log(this.editData);
  }

  // prueba(){
  //   const dataObj: any = this.newUserForm.value
  //   const roles:boolean = dataObj.roles
  //   if(roles===true){
  //     dataObj.roles = 'administrador'
  //   } else {
  //     dataObj.roles = 'empleado'
  //   }
  // }

  addUser(){
    if(!this.editData){
      if(this.newUserForm.valid){
        this.convertRoletoObject();

        this.usersService.postUsersMethod(this.newUserForm.value).subscribe({
          next: ()=> {
            alert('exito');
            this.newUserForm.reset();
            this.dialogRef.close('save');
          },
          error: () => { alert('error')}
        })
      }
    }else {
      this.updateUsers();
    }
  }

  convertRoletoObject(){
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
  }
  updateUsers(){
    this.convertRoletoObject();
    this.usersService.updateUsersMethod(this.newUserForm.value, this.editData.id)
    .subscribe({
      next: () =>{
        alert('Usuario actualizado correctamente');
        this.newUserForm.reset();
        this.dialogRef.close('update');
      },
      error: (erro)=>{
        alert('No se pudo actualizar');
        console.log(erro);
      }
    })

  }


}
