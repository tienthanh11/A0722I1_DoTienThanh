import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularComponentTemplateRoutingModule} from './angular-component-template-routing.module';
import {ListComponent} from "./list/list.component";
import {ArticleComponent} from './article/article.component';
import {FormsModule} from "@angular/forms";
import {LikeComponent} from './like/like.component';


@NgModule({
  declarations: [
    ListComponent,
    ArticleComponent,
    LikeComponent
  ],
  imports: [
    CommonModule,
    AngularComponentTemplateRoutingModule,
    FormsModule
  ]
})
export class AngularComponentTemplateModule {
}
