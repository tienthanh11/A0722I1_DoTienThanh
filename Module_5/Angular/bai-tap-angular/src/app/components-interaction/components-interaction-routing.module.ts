import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {NameCardComponent} from "./name-card/name-card.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {RatingBarComponent} from "./rating-bar/rating-bar.component";
import {CountdownTimerComponent} from "./countdown-timer/countdown-timer.component";


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'name-card', component: NameCardComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'rating-bar', component: RatingBarComponent},
  {path: 'countdown-timer', component: CountdownTimerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsInteractionRoutingModule { }
