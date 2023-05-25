import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {NameCardComponent} from "../components-interaction/name-card/name-card.component";


const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'name-card', component: NameCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
