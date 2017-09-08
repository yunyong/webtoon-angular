import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WebtoonService {
    constructor(private jsonp:Jsonp){}

    getWebtoon(nickname:string):Observable<any> {
        let url = `http://m.webtoon.daum.net/data/mobile/webtoon/view?nickname=${nickname}&callback=JSONP_CALLBACK`;
        return this.jsonp.get(url)
            .map(res => {
                return res.json().data
            });
    }

    getDayWebtoonList(opt:any):Observable<any> {
        let url = `http://webtoon.daum.net//data/mobile/webtoon?week=${opt.day}&sort=${opt.sort}&page_size=20&page_no=${opt.page}&callback=JSONP_CALLBACK`;
        return this.jsonp.get(url)
            .map(res => {
                return res.json()
            });
    }

    getEpisodeList(nickname:string):Observable<any> {
        let url = `http://m.webtoon.daum.net/data/mobile/webtoon/list_episode_by_nickname?nickname=${nickname}&page_no=1&page_size=10&sort=desc&callback=JSONP_CALLBACK`;
        return this.jsonp.get(url)
            .map(res => {
                return res.json()
            });
    }
}