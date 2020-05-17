import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { timer } from 'rxjs/observable/timer';
import { Router, RouterEvent } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage {
  actionSheet: any;

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
    {
      title: 'உள்நுழைக',
      url: '../login'
    },
    {

      url: '../category'
    },
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

  constructor(
    private http: Http, 
    private router: Router, 
    private platform: Platform,
    private socialSharing: SocialSharing, 
    public screenshot: Screenshot,
    public actionSheetController: ActionSheetController
    ) {

    this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
      if (this.constructor.name == "NewsPage") {
        if (window.confirm("மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?")) {
          navigator["app"].exitApp();
        }
      }else{
        
      }
    });

    this.news_data();
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  news_data(){
  this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
  this.data = data.data;
  console.log(this.newsType);
  },
    err => {
      console.log("Oops!")
    });
  }
  
  menuClick(){
    this.router.navigate(['../category']);
  }
  
  ShareSheet() {
    this.actionSheet = this.actionSheetController.create({
      header: 'Social Share Via',
      buttons: [{
        text: 'facebook',
        icon: 'logo-facebook',
        handler: () => {
          this.platform.ready( ).then(() => {
            this.screenshot.URI(80)
              .then((res) => {
                this.socialSharing.shareViaFacebook(null, res.URI, null)
                 .then(() => {},
                   () => { 
                     alert('facebook share failed');
                   });
                 },
                () => {
                alert('screenshot failed');
                });
              });
        }
      }, {
        text: 'whatsapp',
        icon: 'logo-whatsapp',
        handler: () => {
          this.platform.ready().then(() => {
            this.screenshot.URI(80)
              .then((res) => {
                this.socialSharing.shareViaWhatsApp(null, res.URI, null)
                 .then(() => {},
                   () => { 
                     alert('whatsapp share failed');
                   });
                 },
                () => {
                alert('screenshot failed');
                });
              });
        }
      }, {
        text: 'instagram',
        icon: 'logo-instagram',
        handler: () => {
          this.platform.ready().then(() => {
            this.screenshot.URI(80)
              .then((res) => {
                this.socialSharing.shareViaInstagram(null, res.URI)
                 .then(() => {},
                   () => { 
                     alert('instagram share failed');
                   });
                 },
                () => {
                alert('screenshot failed');
                });
              });
        }
      }, {
        text: 'twitter',
        icon: 'logo-twitter',
        handler: () => {
          this.platform.ready().then(() => {
            this.screenshot.URI(80)
              .then((res) => {
                this.socialSharing.shareViaTwitter(null, res.URI, null)
                 .then(() => {},
                   () => { 
                     alert('twitter share failed');
                   });
                 },
                () => {
                alert('screenshot failed');
                });
              });
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(actionsheet => {
      actionsheet.present();
    });
  }


}
