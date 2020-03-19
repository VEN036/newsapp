import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { NewsPage } from '../news/news.page';
import { LoginPage } from '../login/login.page';
import { RegistrationPage } from '../registration/registration.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  
  @ViewChild('content', { static: false }) 
  nav: Nav
  rootPage: any = 'NewsPage';

  pages: Array<{ title: string, page: any }>

  constructor() { 
    this.pages = [
      { title: 'Login', page: LoginPage },
      { title: 'Registration', page: RegistrationPage }
    ];
  }

  openpage(page) {
    this.nav.setRoot(page.component);
  }

}
