import { Component } from '@angular/core';
import { WebtoonService } from '../webtoon/webtoon.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'webtoon-view',
    template : `
        <div *ngIf="!data; else wrapInfo">Loading..</div>
        <ng-template #wrapInfo>
            <div class="wrap_info">
                <div>{{webtoon.title}}</div>
                <img src="{{webtoon.thumbnailImage2.url}}">
                <div *ngIf="webtoon.cartoon.artists[0].id == webtoon.cartoon.artists[1].id; then oneArtist else twoArtist"></div>
                <ng-template #oneArtist>
                    <div>{{ webtoon.cartoon.artists[0].penName }}</div>
                </ng-template>
                <ng-template #oneArtist>
                    <div>{{ webtoon.cartoon.artists[0].penName }}/{{ webtoon.cartoon.artists[1].penName }}</div>
                </ng-template>
            </div>
            <episode-list nickname="{{ nickname }}"></episode-list>
        </ng-template>
    `,
    styles : [`
        .wrap_info {padding:10px;border-top:1px solid #ccc}
        .wrap_info img {width:100px}
    `],
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






// export class ViewComponent implements OnInit {
    // webtoon:any;
    // nickname:string;
    // sub:any;
    // webtoonService:WebtoonService;
    //
    // constructor(private route:ActivatedRoute){
    //     this.webtoonService = new WebtoonService();
    //     this.webtoon = this.webtoonService.getWebtoonInfo();
    // }
    //
    // ngOnInit(){
    //     this.sub = this.route.params.subscribe(params => {
    //         this.nickname = params['nickname'];
    //     })
    // }
// }