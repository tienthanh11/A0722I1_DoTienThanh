import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductManagementRoutingModule} from './product-management-routing.module';
import {ProductListComponent} from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductManagementModule {
}
