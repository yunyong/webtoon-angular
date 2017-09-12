import { Component } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
    selector : 'webtoon-component',
    template : `
        <ul class="list_tab list_type_tab">
            <li *ngFor="let sort of sortTab">
                <a [routerLink]="['/webtoon']" fragment="day={{ day }}&sort={{ sort.type }}&page=1">
                        {{ sort.text }}
                </a>
            </li>
        </ul>
        <ul *ngIf="opt.sort == 'update'" class="list_tab list_day_tab">
            <li *ngFor="let day of dayTab">
                <a [routerLink]="['/webtoon']"  fragment="day={{ day.day }}&sort=update&page=1">
                    {{ day.text }}
                </a>
            </li>
        </ul>
        <webtoon-list [day]="opt.day" [sort]="opt.sort" [page]="opt.page"></webtoon-list>
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
    opt:any = {
        sort : 'update',
        day : 'mon',
        page : 1
    };

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


    constructor(private route:ActivatedRoute, private router:Router){
        router.events.subscribe(s => {
            if(s instanceof NavigationEnd){
                const tree = router.parseUrl(router.url);
                if(tree.fragment){
                    tree.fragment.split('&').forEach(hashObj => {
                        let title = hashObj.split('=')[0];
                        let val = hashObj.split('=')[1];
                        this.opt[title] = val;
                    })
                }
            }
        });
    }

    ngOnInit(){
    }
}