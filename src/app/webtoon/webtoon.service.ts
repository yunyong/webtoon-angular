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
        var pageNo = opt.page;
        var pageSize = 20;

        if(opt.opt != 'add') {
            pageNo = 1;
            pageSize = opt.page * 20;
        };

        let url = `http://webtoon.daum.net//data/mobile/webtoon?week=${opt.day}&sort=${opt.sort}&page_size=${pageSize}&page_no=${pageNo}&callback=JSONP_CALLBACK`;
        return this.jsonp.get(url)
            .map(res => {
                return res.json()
            });
    }

    getEpisodeList(nickname:string, page:number):Observable<any> {
        let url = `http://m.webtoon.daum.net/data/mobile/webtoon/list_episode_by_nickname?nickname=${nickname}&page_no=${page}&page_size=10&sort=desc&callback=JSONP_CALLBACK`;
        return this.jsonp.get(url)
            .map(res => {
                return res.json()
            });
    }
}