import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './componentes/home-admin/home-admin.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeAdminProductsComponent } from './componentes/home-admin-products/home-admin-products.component';
import { HomeAdminUsersComponent } from './componentes/home-admin-users/home-admin-users.component';
import { HomeWaiterComponent } from './componentes/home-waiter/home-waiter.component';

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: HomeAdminComponent,
  children: [
    {path: 'users', component: HomeAdminUsersComponent},
    {path: 'products', component: HomeAdminProductsComponent}
  ]
  },
  // {path: 'admin/users', component: HomeAdminUsersComponent},
  // {path: 'admin/products', component: HomeAdminProductsComponent},
  {path: 'waiter', component: HomeWaiterComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
