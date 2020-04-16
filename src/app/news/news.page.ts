import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage  {
  tabBarElement: any;
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
      title: 'Category Page',
      url: 'news/category'
    },
    {
      title: 'Login Page',
      url: 'news/login'
    },
    {
      title: 'Registration Page',
      url: 'news/registration'
    },
    {
      title: 'About Page',
      url: 'news/about'
    }
  ];

  selectedPath = '';
  
  constructor( private http: Http, private router: Router, public navCtrl: NavController ) 
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

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = "none";
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = "flex";
  }

}
