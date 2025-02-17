import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './componentes/homeAdmin/home-admin/home-admin.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeAdminProductsComponent } from './componentes/homeAdmin/home-admin-products/home-admin-products.component';
import { HomeAdminUsersComponent } from './componentes/homeAdmin/home-admin-users/home-admin-users.component';
import { HomeWaiterComponent } from './componentes/homeWaiter/home-waiter/home-waiter.component';
import { PermissionGuard } from './guards/permission.guard';
import { RoleGuard } from './guards/role.guard';
import { BreakfastComponent } from './componentes/homeWaiter/breakfast/breakfast.component';
import { LunchComponent } from './componentes/homeWaiter/lunch/lunch.component';
import { OrdersComponent } from './componentes/homeWaiter/orders/orders.component';
import { HomeChefComponent } from './componentes/homeChef/home-chef/home-chef.component';
import { OrdersPendingComponent } from './componentes/homeChef/orders-pending/orders-pending.component';
import { OrdersDeliveringChefComponent } from './componentes/homeChef/orders-delivering-chef/orders-delivering-chef.component';

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: HomeAdminComponent,
   canActivate : [PermissionGuard,RoleGuard],
   children: [
    {path: 'users', component: HomeAdminUsersComponent},
    {path: 'products', component: HomeAdminProductsComponent}
  ]
  },
  {path: 'waiter', component: HomeWaiterComponent,
   canActivate:[PermissionGuard,RoleGuard],
   children: [
    {path: 'breakfast', component: BreakfastComponent},
    {path: 'lunch', component: LunchComponent},
    {path: 'orders', component: OrdersComponent}
  ]
  },
  {path: 'chef', component: HomeChefComponent,
  canActivate:[PermissionGuard,RoleGuard],
  children: [
    {path: 'pending', component: OrdersPendingComponent},
    {path: 'delivering', component: OrdersDeliveringChefComponent}
  ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
