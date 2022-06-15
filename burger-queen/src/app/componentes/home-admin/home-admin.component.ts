import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/employees';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  employees: Employees[] = [];

  constructor(private employeesService: LoginService) { }

  ngOnInit(): void {
    this.employeesService.getEmpleados().subscribe((employees) => (this.employees = employees, console.log(employees)));
  }

  // obtenerEmpleados(){
  //   this._empleadosService.getEmpleados().subscribe(data =>{
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
