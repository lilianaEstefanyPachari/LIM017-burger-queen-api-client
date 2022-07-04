import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/employees';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.loginService.postUsers(this.loginForm.value)
    .subscribe({
      next: (res) =>{
        console.log(res)

        if(res && res.user.roles.admin){
          this.toastr.success('Administrador', 'Logueado con exito');
          this.loginForm.reset();
          // this.router.navigate(['/admin/users']);
          localStorage.setItem('roles','admin')
          localStorage.setItem('token',res.accessToken)
          this.router.navigate(['/admin/users']);
        }
        if(res && res.user.roles.mesero){
          this.toastr.success('Empleado-meser@', 'Logueado con exito');
          this.loginForm.reset();

          localStorage.setItem('roles','waiter')
          localStorage.setItem('token',res.accessToken)

          this.router.navigate(['/waiter/breakfast']);
        }
        if(res && res.user.roles.cocina){
          this.toastr.success('Empleado-chef', 'Logueado con exito');
          this.loginForm.reset();

          localStorage.setItem('roles','chef')
          localStorage.setItem('token',res.accessToken)

          // this.router.navigate(['']);
        }
        else if(res.status === 400){
          this.toastr.error('Usuario o contraseña incorrectas', 'ERROR', {
            timeOut: 3000,
          });
          // alert('usuario no encontrado');
        }
        // const users = res.find((e:Users)=>{
        //   return e.email === this.loginForm.value.email && e.password === this.loginForm.value.password
        // });
        // if(users && users.roles.admin){
        //   this.toastr.success('Administrador', 'Logueado con exito');
        //   this.loginForm.reset();
        //   // this.router.navigate(['/admin/users']);
        //   localStorage.setItem('roles','admin')
        //   localStorage.setItem('userEmail',users.email)
        //   this.router.navigate(['/admin/users']);
        // }
        // else if(users && users.roles.admin === false){
        //   this.toastr.success('Empleado', 'Logueado con exito');
        //   this.loginForm.reset();

        //   localStorage.setItem('roles','employ')
        //   localStorage.setItem('userEmail',users.email)

        //   this.router.navigate(['/waiter']);
        // }
        // else{
        //   this.toastr.error('Usuario o contraseña incorrectas', 'ERROR', {
        //     timeOut: 3000,
        //   });
        //   // alert('usuario no encontrado');
        // }
      },error: (res) => {
        console.log(res)
        this.toastr.error('Usuario o contraseña incorrectas', 'ERROR', {
          timeOut: 3000,
        });
      }
    })
  }
}
