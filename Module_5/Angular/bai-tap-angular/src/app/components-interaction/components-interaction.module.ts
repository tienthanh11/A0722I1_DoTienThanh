import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentsInteractionRoutingModule} from './components-interaction-routing.module';
import {ListComponent} from "./list/list.component";
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';


@NgModule({
  declarations: [
    ListComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
    ComponentsInteractionRoutingModule
  ]
})
export class ComponentsInteractionModule {
}
