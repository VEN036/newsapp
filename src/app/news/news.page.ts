import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, RouterEvent } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { analytics } from 'firebase';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage {
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
  public newsType: Array<any> = [];

  subscribe: any;
  hideMe: boolean = false;
  url: any;

  pages = [
    // {
    //   title: 'Category',
    //   url: 'news/category'
    // },
    {
      title: 'உள்நுழைக',
      url: '../login'
    },
    {
      // title: 'பதிவு',
      url: '../category'
    },
    // {
    //   title: 'About',
    //   url: 'news/about'
    // }
  ];

  selectedPath = '';
  alertCtrl: any;

  singleTap() {
    this.hideMe = !this.hideMe;
    console.log("Single tap operation done")
  }

  quit() {
    let confirm = this.alertCtrl.create({
      header: 'உறுதிப்படுத்தவும்!',
      message: 'மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?',
      buttons: [
        {
          text: 'சரி',
          handler: () => {
            navigator["app"].exitApp();;
          }
        },
        {
          text: 'ரத்துசெய்',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    }).then(confirm =>
      confirm.present());
  }

  constructor(private http: Http, private router: Router, private platform: Platform,
    private socialSharing: SocialSharing, public screenshot: Screenshot) {

    this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
      if (this.constructor.name == "NewsPage") {
        if (window.confirm("மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?")) {
          navigator["app"].exitApp();
        }
      }else{
        
      }
    });

    this.news_data();


    // this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
    //   var data = data.data;

    //   var newsType = JSON.parse(data).filter(function (entry){
    //     return entry.news_type === 'பொருளாதாரம்';
    //   })
    
    //   console.log(newsType);
    // },
    //   err => {
    //     console.log("Oops!")
    //   });



 
// JSON.parse(this.url).filter(function(entry){
//   return entry.news_type === 'பொருளாதாரம்';
// });
    

    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  news_data(){
  this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
  this.data = data.data;
  // this.newsType = this.data.filter(function (entry){
  //     return entry.news_type === 'பொருளாதாரம்';
  //   })
  
    console.log(this.newsType);
  },
    err => {
      console.log("Oops!")
    });
  }
  
  menuClick(){
    this.router.navigate(['../category']);
  }
  // shareNews(){
  //   this.screenshot.URI(80).then((res) =>{
  //     this.socialSharing.share('this.message','this.subject','res.URI','this.url')
  //   .then(()=>
  //   {

  //   }).catch(()=>{
  //     alert('Sorry...There is a problem in sharing the news.')
  //   });

  //   },
  //   ()=> {alert('failed');});
  // }

}
