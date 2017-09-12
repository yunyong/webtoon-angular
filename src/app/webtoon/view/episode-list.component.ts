import {Component, Input, SimpleChanges} from '@angular/core';
import { WebtoonService } from '../webtoon.service';

@Component({
    selector : 'episode-list',
    template : `
    <div *ngIf="!data; else wrapInfo" class="page_loading">Loading..</div>
    <ng-template #wrapInfo>
        <ul class="list_episode" *ngIf="webtoonEpisodeList">
            <li *ngFor="let episode of webtoonEpisodeList">
                <img src="{{ episode.thumbnailImage.url }}">
                <span>
                    {{ episode.title }}
                </span>
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
    @Input() page;

    data:any;
    webtoonEpisodeList:any[] = [];

    constructor(private webtoonService:WebtoonService){}

    getEpisodeList(){
        this.webtoonService.getEpisodeList(this.nickname, this.page)
            .subscribe(data => {
                this.data = data;
                this.webtoonEpisodeList = this.webtoonEpisodeList.concat(data.data.webtoonEpisodes);
            });
    }

    ngOnChanges(changes:SimpleChanges):void {
        this.page = changes.page ? changes.page.currentValue : this.page;
        this.getEpisodeList();
    }
}


