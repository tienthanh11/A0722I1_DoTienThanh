import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServiceRouterRoutingModule} from './service-router-routing.module';
import {ListComponent} from './list/list.component';
import {TimelinesComponent} from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';


@NgModule({
  declarations: [
    ListComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    CommonModule,
    ServiceRouterRoutingModule
  ]
})
export class ServiceRouterModule {
}
