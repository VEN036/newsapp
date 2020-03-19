import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  rootPage:any = 'NewsPage';   

  showSplash = true;

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
    },
    {
      title: 'Menu',
      url: '/menu',
      icon: 'menu'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'dashboard'
    },
    {
      title: 'Registration',
      url: '/registration',
      icon: 'registration'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'login'
    }

  ];
  
  pages: any;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  
  ) {
    this.initializeApp();
  }

  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
     // this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false)
    });
  }
}
