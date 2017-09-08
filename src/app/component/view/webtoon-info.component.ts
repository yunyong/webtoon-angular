import { Component, Input } from '@angular/core';

@Component({
    selector : 'webtoon-info',
    template : `
        {{ webtoon.id }} | {{ webtoon.title }}
    `
})

export class WebtoonInfo{
    @Input() webtoon;
}