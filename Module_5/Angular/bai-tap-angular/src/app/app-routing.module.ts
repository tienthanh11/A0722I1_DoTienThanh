import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'angular-overview',
    loadChildren: () => import('./angular-overview/angular-overview.module').then(module => module.AngularOverviewModule)
  },
  {
    path: 'angular-component-template',
    loadChildren: () => import('./angular-component-template/angular-component-template.module').then(module => module.AngularComponentTemplateModule)
  },
  {
    path: 'components-interaction',
    loadChildren: () => import('./components-interaction/components-interaction.module').then(module => module.ComponentsInteractionModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
