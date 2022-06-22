import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  loguearse(){
    console.log(this.loginForm);
    console.log(this.loginForm.get('email')?.value)

    const LOGIN : Login = {
      email : this.loginForm.get('email')?.value,
      password : this.loginForm.get('password')?.value,
    }

    console.log(LOGIN);
    this.router.navigate(['/home']);

  }

}
