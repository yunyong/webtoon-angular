import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WebtoonComponent } from './webtoon.component';
import { ViewComponent } from './view/view.component';

@NgModule ({
    imports : [
        RouterModule.forChild([
            {
                path : 'webtoon',
                component : WebtoonComponent
            },
            {
                path : 'webtoon/view/:nickname',
                component : ViewComponent
            }
        ])
    ],
    exports : [
        RouterModule
    ]
})

export class WebtoonRoutingModule {}