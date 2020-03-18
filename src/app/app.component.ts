import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, RouterModule, RouterEvent, NavigationEnd } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

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
      urrl: '/menu',
      icon: 'menu'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'dashboard'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'login'
    },
    {
      title: 'Registration',
      url: '/registration',
      icon: 'registration'
    },

  ];
  pages: any;
  

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map( p => {
          return p['active'] = (event.url === p.url);
        });
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.splashScreen.hide();
    });
  }
}
