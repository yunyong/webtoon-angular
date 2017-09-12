import {Component, HostListener} from '@angular/core';
import { WebtoonService } from '../webtoon.service';
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";

@Component({
    selector : 'webtoon-view',
    template : `
        <div *ngIf="!data; else viewWrap" class="page_loading">Loading..</div>
        <ng-template #viewWrap>
            <webtoon-info [webtoon]="webtoon"></webtoon-info>
            <episode-list nickname="{{ nickname }}" page="{{ opt.page }}"></episode-list>
        </ng-template>
    `,
    providers : [
        WebtoonService,
    ]
})

export class ViewComponent {
    isLoading:boolean = false;
    nickname:string;
    data:any;
    webtoon:any;
    opt:any = {
        page : 1
    };

    constructor(private  webtoonService:WebtoonService, private router:Router, private route:ActivatedRoute){
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
        });
        this.getWebtoon();
    }


    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e){
        var windowHeight = window.innerHeight;
        var bodyHeight = document.body.offsetHeight;
        var scrollPosition = window.pageYOffset;

        if(bodyHeight-scrollPosition <= windowHeight && !this.isLoading){
            this.isLoading = true;
            location.hash = "page=" + (parseInt(this.opt.page)+1);
            setTimeout(()=>{
                this.isLoading = false;
            }, 1000);
        }
    }
}