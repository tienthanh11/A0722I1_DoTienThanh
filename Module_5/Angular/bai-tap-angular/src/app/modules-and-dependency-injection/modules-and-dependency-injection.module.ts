import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModulesAndDependencyInjectionRoutingModule} from './modules-and-dependency-injection-routing.module';
import {ListComponent} from './list/list.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import { ImageCardComponent } from './image-gallery/image-card/image-card.component';


@NgModule({
  declarations: [
    ListComponent,
    ImageGalleryComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    ModulesAndDependencyInjectionRoutingModule
  ]
})
export class ModulesAndDependencyInjectionModule {
}
