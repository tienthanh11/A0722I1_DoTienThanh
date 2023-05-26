import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFormRoutingModule } from './angular-form-routing.module';
import {ListComponent} from "./list/list.component";
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListComponent,
    TodoComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AngularFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class AngularFormModule { }
