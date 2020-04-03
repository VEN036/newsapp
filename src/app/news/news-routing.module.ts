import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPage } from './news.page';
import { LoginPage } from '../login/login.page';
import { RegistrationPage } from '../registration/registration.page';

const routes: Routes = [
  {
    path: 'news',
    component: NewsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () => 
              import('./news.module').then(m => m.NewsPageModule)
          }
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../registration/registration.module').then(m => m.RegistrationPageModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: 'registration',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../registration/registration.module').then(m => m.RegistrationPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo:'/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  }        
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
