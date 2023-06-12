import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryCreateComponent} from "./category/category-create/category-create.component";
import {CategoryEditComponent} from "./category/category-edit/category-edit.component";
import {CategoryDeleteComponent} from "./category/category-delete/category-delete.component";


const routes: Routes = [
  {path: 'list', component: CategoryListComponent},
  {path: 'create', component: CategoryCreateComponent},
  {path: 'edit/:id', component: CategoryEditComponent},
  {path: 'delete/:id', component: CategoryDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryManagementRoutingModule {
}
