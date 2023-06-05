import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesListComponent } from './facilities-list/facilities-list.component';
import { FacilitiesEditComponent } from './facilities-edit/facilities-edit.component';
import { FacilitiesCreateComponent } from './facilities-create/facilities-create.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FacilitiesListComponent,
    FacilitiesEditComponent,
    FacilitiesCreateComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilitiesModule { }
