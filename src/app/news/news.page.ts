import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
  actionSheet: any;
  url: any;
  message: string;
  link: string;
  URI: any;

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

  ionViewDidLoad() {
    this.message = "Welcome to Madras Daily";
    this.link = "https://play.google.com/store/apps/details?id=com.test.madrasDaily";
    this.URI = this.screenshot.save;
  }

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
      header: 'வழியாக பகிரவும்',
      buttons: [{
        text: 'முகநூல்',
        icon: 'logo-facebook',
        handler: () => {
          this.actionSheet = this.actionSheetController.dismiss().then((res) => {
            this.facebookShare()
          })
        }
      }, {
        text: 'பகிரி',
        icon: 'logo-whatsapp',
        handler: () => {
          this.actionSheet = this.actionSheetController.dismiss().then((res) => {
            this.whatsappShare()
          })
        }
      }, {
        text: 'இன்ஸ்டாகிராம்',
        icon: 'logo-instagram',
        handler: () => {
          this.actionSheet = this.actionSheetController.dismiss().then((res) => {
            this.instagramShare()
          })
        }
      }, {
        text: 'ட்விட்டர்',
        icon: 'logo-twitter',
        handler: () => {
          this.actionSheet = this.actionSheetController.dismiss().then((res) => {
            this.twitterShare()
          })
        }
      }, {
        text: 'ரத்துசெய்',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(actionsheet => {
      actionsheet.present();
    });
    this.hideMe = !this.hideMe;
  }

  facebookShare() {
    this.platform.ready().then(() => {
      this.screenshot.URI(80)
        .then((res) => {
          this.socialSharing.shareViaFacebook(this.message, res.URI, this.link)
           .then(() => {},
             () => { 
               alert('முகநூல் வழியாக பகிர் தோல்வியுற்றது');
             });
           },
          () => {
          alert('ஸ்கிரீன் ஷாட் தோல்வியடைந்தது');
          });
        });
  }

  whatsappShare() {
    this.platform.ready().then(() => {
      this.screenshot.URI(80)
        .then((res) => {
          this.socialSharing.shareViaWhatsApp(this.message, res.URI, this.link)
           .then(() => {},
             () => { 
               alert('பகிரி வழியாக பகிர் தோல்வியுற்றது');
             });
           },
          () => {
          alert('ஸ்கிரீன் ஷாட் தோல்வியடைந்தது');
          });
        });
  }

  instagramShare() {
    this.platform.ready().then(() => {
      this.screenshot.URI(80)
        .then((res) => {
          this.socialSharing.shareViaInstagram(this.message, res.URI)
           .then(() => {},
             () => { 
               alert('இன்ஸ்டாகிராம் வழியாக பகிர் தோல்வியுற்றது');
             });
           },
          () => {
          alert('ஸ்கிரீன் ஷாட் தோல்வியடைந்தது');
          });
        });
  }

  twitterShare() {
    this.platform.ready().then(() => {
      this.screenshot.URI(80)
        .then(() => {
          this.socialSharing.shareViaTwitter(this.message, this.URI, this.link)
           .then(() => {},
             () => { 
               alert('ட்விட்டர் வழியாக பகிர் தோல்வியுற்றது');
             });
           },
          () => {
          alert('ஸ்கிரீன் ஷாட் தோல்வியடைந்தது');
          });
        });
  }

}
