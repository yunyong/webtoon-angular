import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { WebtoonComponent } from './webtoon.component';
import { ViewComponent } from './view/view.component';
import { WebtoonInfo } from './view/webtoon-info.component';
import { EpisodeListComponent } from './view/episode-list.component';
import { WebtoonListComponent } from './webtoon-list.component';

import { WebtoonRoutingModule } from './webtoon-routing.module';

@NgModule({
    imports : [
        CommonModule,
        WebtoonRoutingModule
    ],
    declarations : [
        WebtoonComponent,
        ViewComponent,
        WebtoonListComponent,
        WebtoonInfo,
        EpisodeListComponent
    ],
    providers : []
})

export class WebtoonModule {}
