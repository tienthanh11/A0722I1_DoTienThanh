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
    path: 'angular-form',
    loadChildren: () => import('./angular-form/angular-form.module').then(module => module.AngularFormModule)
  },
  {
    path: 'service-router',
    loadChildren: () => import('./service-router/service-router.module').then(module => module.ServiceRouterModule)
  },
  {
    path: 'modules-and-dependency-injection',
    loadChildren: () => import('./modules-and-dependency-injection/modules-and-dependency-injection.module').then(module => module.ModulesAndDependencyInjectionModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product-management/product-management.module').then(module => module.ProductManagementModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category-management/category-management.module').then(module => module.CategoryManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
