import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WebtoonService } from './webtoon.service';
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector : 'webtoon-list',
    template : `
        <div *ngIf="webtoonList.length==0 || isLoading" class="page_loading">Loading..</div>
        <div *ngIf="webtoonList.length>0">
            <ul class="list_webtoon">
                <li *ngFor="let webtoon of webtoonList">
                    <a routerLink="/webtoon/view/{{ webtoon.nickname }}" fragment="page=1">
                        <img src="{{ webtoon.thumbnailImage2.url }}" class="img_thumb">
                        {{ webtoon.id }} | {{ webtoon.title }}
                    </a>
                </li>
            </ul>
            <button class="btn_more" (click)="getMoreList()" *ngIf="webtoonList.length<totalSize">더보기 {{ webtoonList.length }} / {{ totalSize }}</button>
            <span class="btn_more" *ngIf="webtoonList.length>=totalSize">더보기 {{ webtoonList.length }} / {{ totalSize }}</span>
        </div>
    `,
    styles : [`
        .list_webtoon {border-top:1px solid #ccc}
        .list_webtoon a {display:block;padding:10px;border-bottom:1px solid #ccc}
        .list_webtoon .img_thumb {width:40px}
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
    @Input() page;

    webtoonList:any[];
    totalSize:number;
    isLoading:boolean;

    constructor(private webtoonService:WebtoonService){
        this.isLoading = false;
        this.webtoonList = [];
    }

    getDayList(opt?){
        this.isLoading = true;
        this.webtoonService.getDayWebtoonList({
            day : this.day,
            sort : this.sort,
            page : this.page,
            opt : opt || ''
        }).subscribe(data => {
            this.totalSize = data.page.totalItemCount;
            this.page = data.page.no;

            if(opt=='add'){
                this.webtoonList = this.webtoonList.concat(data.data.webtoons);
            } else {
                this.webtoonList = data.data.webtoons;
            };

            this.isLoading = false;
        });
    }

    getMoreList(){
        this.page = (this.webtoonList.length/20) + 1;
        let hashStr = `day=${this.day}&sort=${this.sort}&page=${this.page}`;
        location.hash = hashStr;
    }

    ngOnChanges(changes:SimpleChanges):void {
        this.day = changes.day ? changes.day.currentValue : this.day;
        this.sort = changes.sort ? changes.sort.currentValue : this.sort;
        this.page = changes.page ? changes.page.currentValue : this.page;

        if(changes.day || changes.sort || parseInt(changes.page.previousValue) > parseInt(changes.page.currentValue)){
            this.webtoonList = [];
            this.getDayList();
        } else {
            this.getDayList('add');
        }
    }
}