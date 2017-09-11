import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeagueComponent } from './league/league.component';
import { MyComponent } from './my/my.component';

const routes:Routes = [
    {
        path : '',
        redirectTo : '/webtoon',
        pathMatch : 'full'
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
