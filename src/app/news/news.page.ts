import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage  {
// Slide Operation Controller
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

  // Toast Controller
  /*presentToast() {
    let toast = this.toastCtrl.create({
      message: 'News Update Successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    })

    toast.present();
  }*/

  public data: Array<any> = [];

  tabBarElement: any;
  
  constructor( 
    private http: Http, 
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    public modalCtrl: ModalController 
    ) { 
    this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
      this.data = data.data;
    },
    err => {
      console.log("Oops!")
    });

    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
  }

  onPageDidEnter() {
    this.tabBarElement.style.display = 'none';
  }

  onPageWillLeave() {
    this.tabBarElement.style.display = 'block';
  }
}
