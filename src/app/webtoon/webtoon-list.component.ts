import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WebtoonService } from './webtoon.service';

@Component({
    selector : 'webtoon-list',
    template : `
        <div *ngIf="webtoonList.length==0">Loading..</div>
        <div *ngIf="webtoonList.length>0">
            <ul class="list_webtoon">
                <li *ngFor="let webtoon of webtoonList">
                    <a routerLink="/webtoon/view/{{ webtoon.nickname }}">
                        {{ webtoon.id }} | {{ webtoon.title }}
                    </a>
                </li>
            </ul>
            <button class="btn_more" (click)="getMoreList()" *ngIf="webtoonList.length<totalSize">더보기 {{ webtoonList.length }} / {{ totalSize }}</button>
            <span class="btn_more" *ngIf="webtoonList.length>=totalSize">더보기 {{ webtoonList.length }} / {{ totalSize }}</span>
        </div>
    `,
    styles : [`
        .list_webtoon {padding:10px 0}
        .btn_more {display:block;width:100%;padding:10px 0;background-color:#333;color:#fff;text-align:center}
        span.btn_more {background-color:#aaa;color:#fff}
    `],
    providers : [
        WebtoonService
    ]
})

export class WebtoonListComponent implements OnChanges {
    @Input() day;
    @Input() sort;

    webtoonList:any[];
    totalSize:number;
    page:number;

    constructor(private webtoonService:WebtoonService){}

    getDayList(opt?){
        this.webtoonService.getDayWebtoonList({
            day : this.day,
            sort : this.sort,
            page : this.page
        }).subscribe(data => {
            this.totalSize = data.page.totalItemCount;
            this.page = data.page.no;

            if(opt=='add'){
                this.webtoonList = this.webtoonList.concat(data.data.webtoons);
            } else {
                this.webtoonList = data.data.webtoons;
            };
        });
    }

    getMoreList(){
        this.page++;
        this.getDayList('add');
    }

    ngOnChanges(changes : SimpleChanges) : void {
        this.webtoonList = [];
        this.day = changes.day ? changes.day.currentValue : this.day;
        this.sort = changes.sort ? changes.sort.currentValue : this.sort;
        this.page = 1;

        this.getDayList();
    }

}