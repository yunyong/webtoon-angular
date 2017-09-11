import { Component } from '@angular/core';
import { WebtoonService } from '../webtoon.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'webtoon-view',
    template : `
        <div *ngIf="!data; else viewWrap">Loading..</div>
        <ng-template #viewWrap>
            <webtoon-info [webtoon]="webtoon"></webtoon-info>
            <episode-list nickname="{{ nickname }}"></episode-list>
        </ng-template>
    `,
    providers : [
        WebtoonService
    ]
})

export class ViewComponent {
    nickname:string;
    data:any;
    webtoon:any;

    constructor(private  webtoonService:WebtoonService, private route:ActivatedRoute){}

    getWebtoon(){
        this.webtoonService.getWebtoon(this.nickname)
            .subscribe(data => {
                this.data = data;
                this.webtoon = data.webtoon;
            });
    }

    ngOnInit(){
        this.route.params.subscribe(params => {
            this.nickname = params['nickname'];
            this.getWebtoon();
        });
    }
}