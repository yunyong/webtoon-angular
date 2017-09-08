import { Component, Input } from '@angular/core';
import { WebtoonService } from '../webtoon/webtoon.service';

@Component({
    selector : 'episode-list',
    template : `
     <div *ngIf="!data; else wrapInfo">Loading..</div>
    <ng-template #wrapInfo>
        <ul class="list_episode" *ngIf="webtoonEpisodeList">
            <li *ngFor="let episode of webtoonEpisodeList">
                <img src="{{ episode.thumbnailImage.url }}">
                {{ episode.title }}
            </li>
        </ul>
    </ng-template>
    `,
    styles : [`
        .list_episode li {padding:10px;border-top:1px solid #ccc}
        .list_episode img {width:80px}
    `]
})

export class EpisodeListComponent {
    @Input() nickname;

    data:any;
    webtoonEpisodeList:any[];

    constructor(private webtoonService:WebtoonService){}

    getEpisodeList(){
        this.webtoonService.getEpisodeList(this.nickname)
            .subscribe(data => {
                this.data = data;
                this.webtoonEpisodeList = data.data.webtoonEpisodes;
            });
    }

    ngOnInit(){
        this.getEpisodeList();
    }
}