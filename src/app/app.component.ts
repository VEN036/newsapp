import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true;
  splashScreen: any;

  public appPages = [
    {
      title: 'app',
      url: '/app',
      icon: 'app'
    },
    {
    title: 'News',
    url: '/news',
    icon: 'news'
    }
  ];
  

  constructor(
    private platform: Platform,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();

      timer().subscribe(() => this.showSplash = false)
    });
  }
}
