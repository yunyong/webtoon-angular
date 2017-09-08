import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WebtoonComponent } from './component/webtoon/webtoon.component';
import { WebtoonListComponent } from './component/list/webtoon-list.component';
import { EpisodeListComponent } from './component/list/episode-list.component';
import { LeagueComponent } from './component/league/league.component';
import { MyComponent } from './component/my/my.component';
import { ViewComponent } from './component/view/view.component';
import { WebtoonInfo } from './component/view/webtoon-info.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports : [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        JsonpModule
    ],
    declarations : [
        AppComponent,
        WebtoonComponent,
        ViewComponent,
        LeagueComponent,
        MyComponent,
        WebtoonListComponent,
        WebtoonInfo,
        EpisodeListComponent
    ],
    providers : [],
    bootstrap : [
        AppComponent
    ]
})

export class AppModule {}