import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/employees';
@Component({
  selector: 'app-modal-new-users',
  templateUrl: './modal-new-users.component.html',
  styleUrls: ['./modal-new-users.component.css']
})
export class ModalNewUsersComponent implements OnInit {
  newUserForm !: FormGroup;
  actionBtn: string = 'Guardar'
  actionTitle: string = 'Formulario para añadir usuarios'

  constructor(private formBuilder: FormBuilder,
    private usersService: UsersService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public editData: Users,
    private dialogRef: MatDialogRef<ModalNewUsersComponent>) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: [""],
      roles: ["", Validators.required],
    })

    if (this.editData) {
      this.actionTitle = 'Formulario para actualizar usuarios'
      this.actionBtn = 'Actualizar'
      this.newUserForm.controls['email'].setValue(this.editData.email);
      this.newUserForm.controls['roles'].setValue(this.editData.roles);
    }
    console.log(this.editData);
  }

  addUser() {
    if (!this.editData) {
      if (this.newUserForm.valid) {
        this.convertRoletoObject();

        this.usersService.postUsersMethod(this.newUserForm.value).subscribe({
          next: () => {
            this.toastr.success('Usuario añadido', 'Registro con exito');
            this.newUserForm.reset();
            this.dialogRef.close('save');
          },
          error: (error) => {
            this.toastr.error('No se pudo añadir usuario', 'ERROR', {
              timeOut: 3000,
            });
          }
        })
      }
    } else {
      this.updateUsers();
    }
  }

  convertRoletoObject() {
    const dataObj: any= this.newUserForm.value;
    const roles: string = dataObj.roles
    if (roles === "Administrador") {
      dataObj.roles = {
        admin: true,
        mesero: false,
        cocina: false
      }
    } else if (roles === "Mesero") {
      dataObj.roles = {
        mesero: true,
        admin: false,
        cocina: false
      }
    } else {
      dataObj.roles = {
        cocina: true,
        admin: false,
        mesero: false
      }
    }
  }
  updateUsers() {
    this.convertRoletoObject();
    if (this.newUserForm.value.password === '') {
      const updateData = {
        email: this.newUserForm.value.email,
        roles: this.newUserForm.value.roles
      }
      this.usersService.updateUsersMethod(updateData, this.editData.id)
        .subscribe({
          next: () => {
            this.toastr.success('Usuario actualizado', 'Actualizado con exito');
            this.newUserForm.reset();
            this.dialogRef.close('update');
          },
          error: (erro) => {
            this.toastr.error('No se pudo actualizar usuario', 'ERROR', {
              timeOut: 3000,
            });
          }
        })
    } else {
      this.usersService.updateUsersMethod(this.newUserForm.value, this.editData.id)
        .subscribe({
          next: () => {
            this.toastr.success('Usuario actualizado', 'Actualizado con exito');
            this.newUserForm.reset();
            this.dialogRef.close('update');
          },
          error: (erro) => {
            this.toastr.error('No se pudo actualizar usuario', 'ERROR', {
              timeOut: 3000,
            });
          }
        })
    }

  }


}
