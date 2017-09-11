import { Component, Input } from '@angular/core';

@Component({
    selector : 'webtoon-info',
    template : `
        <div class="wrap_info">
            <div>{{webtoon.title}}</div>
            <img src="{{webtoon.thumbnailImage2.url}}">
            <div *ngIf="webtoon.cartoon.artists[0].id == webtoon.cartoon.artists[1].id; then oneArtist else twoArtist"></div>
            <ng-template #oneArtist>
                <div>{{ webtoon.cartoon.artists[0].penName }}</div>
            </ng-template>
            <ng-template #twoArtist>
                <div>{{ webtoon.cartoon.artists[0].penName }}/{{ webtoon.cartoon.artists[1].penName }}</div>
            </ng-template>
        </div>
    `,
    styles : [`
        .wrap_info {padding:10px;border-top:1px solid #ccc}
        .wrap_info img {width:100px}
    `],
})

export class WebtoonInfo{
    @Input() webtoon;
}