import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Users } from 'src/app/employees';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.http.get<Users[]>("http://localhost:3000/users")
    .subscribe({
      next: (res) =>{
        const users = res.find((a:Users)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if(users && users.roles.admin){
          alert('logueado con exito / ADMINNNNN');
          this.loginForm.reset();
          this.router.navigate(['/home']);
        }
        else if(users && users.roles.admin === false){
          alert('logueado con exito / EMPLEADO');
          this.loginForm.reset();
          this.router.navigate(['/waiter']);
        }
        else{
          alert('usuario no encontrado');
        }
      },error: () => {
        alert('algo salio mal');
      }
    })
  }
}
