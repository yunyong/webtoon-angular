import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : 'webtoon-component',
    template : `
        <ul class="list_tab list_type_tab">
            <li *ngFor="let sort of sortTab">
                <a [routerLink]="['/webtoon']" [queryParams]="{
                        day : day,
                        sort : sort.type 
                    }">
                        {{ sort.text }}
                </a>
            </li>
        </ul>
        <ul *ngIf="sort == 'update'" class="list_tab list_day_tab">
            <li *ngFor="let day of dayTab">
                <a [routerLink]="['/webtoon']" [queryParams]="{
                    day : day.day,
                    sort : 'update'
                }">
                    {{ day.text }}
                </a>
            </li>
        </ul>
        <webtoon-list [day]="day" [sort]="sort"></webtoon-list>
    `,
    styles : [`
        .list_tab {overflow:hidden}
        .list_tab li {float:left;width:40px}
        .list_tab a {display:block;padding:14px 0;text-align:center}
        .list_day_tab {background-color:#ccc}
        .list_type_tab li {width:100px}
    `]
})

export class WebtoonComponent{
    sort:string;
    day:string;

    dayTab = [{
            day : 'mon',
            text : '월'
        },{
            day : 'tue',
            text : '화'
        },{
            day : 'wed',
            text : '수'
        },{
            day : 'thu',
            text : '목'
        },{
            day : 'fri',
            text : '금'
        },{
            day : 'sat',
            text : '토'
        },{
            day : 'sun',
            text : '일'
    }];

    sortTab = [
        {
            type : 'update',
            text : '업데이트순'
        },
        {
            type : 'score',
            text : '인기순'
        },
        {
            type : 'view',
            text : '평점순'
        }
    ];


    constructor(private route:ActivatedRoute){}

    ngOnInit(){
        this.route.queryParams.subscribe(params => {
            this.day = params['day'] || 'mon';
            this.sort = params['sort'] || 'update';
        });
    }
}