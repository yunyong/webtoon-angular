import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { MyComponent } from './my/my.component';
import { AppRoutingModule } from './app-routing.module';
import { WebtoonModule } from './webtoon/webtoon.module';

@NgModule({
    imports : [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        JsonpModule,
        WebtoonModule
    ],
    declarations : [
        AppComponent,
        LeagueComponent,
        MyComponent
    ],
    providers : [],
    bootstrap : [
        AppComponent
    ]
})

export class AppModule {}