import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebtoonComponent } from './component/webtoon/webtoon.component';
import { ViewComponent } from './component/view/view.component';
import { LeagueComponent } from './component/league/league.component';
import { MyComponent } from './component/my/my.component';

const routes:Routes = [
    {
        path : '',
        redirectTo : '/webtoon',
        pathMatch : 'full'
    },
    {
        path : 'webtoon',
        component : WebtoonComponent
    },
    {
        path : 'webtoon/view/:nickname',
        component : ViewComponent
    },
    {
        path : 'league',
        component : LeagueComponent
    },
    {
        path : 'my',
        component : MyComponent
    },
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule {}
