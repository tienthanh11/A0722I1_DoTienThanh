import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {TodoComponent} from "./todo/todo.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormRoutingModule { }
