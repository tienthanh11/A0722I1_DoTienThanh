import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {ImageGalleryComponent} from "./image-gallery/image-gallery.component";


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'image-gallery', component: ImageGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesAndDependencyInjectionRoutingModule {
}
