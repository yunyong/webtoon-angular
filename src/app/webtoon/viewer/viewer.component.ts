import { Component } from '@angular/core';

@Component({
    selector : 'webtoon-viewer',
    template : `
        <div>{{ title }}</div>
    `
})

export class ViewerComponent {
    title = 'viewer';
}