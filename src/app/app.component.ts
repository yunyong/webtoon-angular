import { Component } from '@angular/core';

@Component({
    selector : 'webtoon-app',
    template : `
        <div>
            <a href="/webtoon">WEBTOON</a>
        </div>
        <nav>
            <a routerLink="/webtoon" routerLinkActive="active">웹툰</a>
            <a routerLink="/league" routerLinkActive="active">리그</a>
            <a routerLink="/my" routerLinkActive="active">MY</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls : [
        './app.component.css'
    ]
})

export class AppComponent {}