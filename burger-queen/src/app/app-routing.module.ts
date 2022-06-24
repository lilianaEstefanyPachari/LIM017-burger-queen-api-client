import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './componentes/homeAdmin/home-admin/home-admin.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeAdminProductsComponent } from './componentes/homeAdmin/home-admin-products/home-admin-products.component';
import { HomeAdminUsersComponent } from './componentes/homeAdmin/home-admin-users/home-admin-users.component';
import { HomeWaiterComponent } from './componentes/home-waiter/home-waiter.component';
import { PermissionGuard } from './guards/permission.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: HomeAdminComponent, canActivate : [PermissionGuard,RoleGuard],
  children: [
    {path: 'users', component: HomeAdminUsersComponent},
    {path: 'products', component: HomeAdminProductsComponent}
  ]
  },
  // {path: 'admin/users', component: HomeAdminUsersComponent},
  // {path: 'admin/products', component: HomeAdminProductsComponent},
  {path: 'waiter', component: HomeWaiterComponent, canActivate:[PermissionGuard,RoleGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
