import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsPageRoutingModule } from './news-routing.module';
import { NewsPage } from './news.page';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'news',
    component: NewsPage,
    children: [
      {
        path: 'category',
        loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule )
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule )
      },
      {
        path: 'registration',
        loadChildren: () => import('../registration/registration.module').then( m => m.RegistrationPageModule )
      }
    ]
  },
  {
    path: '',
    redirectTo: '/news/news'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    IonicModule,
    NewsPageRoutingModule
  ],
  declarations: [
    NewsPage
  ],
  entryComponents: [
    NewsPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsPageModule {}

