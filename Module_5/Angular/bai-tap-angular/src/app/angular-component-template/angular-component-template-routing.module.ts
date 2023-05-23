import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {ArticleComponent} from "./article/article.component";


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'article', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularComponentTemplateRoutingModule {
}
