import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilitiesListComponent} from "./facilities-list/facilities-list.component";


const routes: Routes = [
  {path: 'list', component: FacilitiesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }
