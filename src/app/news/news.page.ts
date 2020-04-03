import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage  {
  slideOpts = {
    speed: 500,
    effect: 'coverflow',
    slidesPerView: 1,
    slideOffsetBefore: 10,
    slideOffsetAftrer: 10,
    direction: 'vertical',
    centeredSlides: true,
    coverflowEffect: {
      rotate: 20,
      streach: 100,
      depth: 100,
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      modifier: 1,
    }
  };

  public data: Array<any> = [];

  pages = [
    {
      title: 'Login Page',
      url: 'news/login'
    },
    {
      title: 'Registration Page',
      url: 'news/registration'
    }
  ];

  selectedPath = '';
  
  constructor( private http: Http, private router: Router) 
  { 
    this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
      this.data = data.data;
    },
    err => {
      console.log("Oops!")
    });

    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
}
