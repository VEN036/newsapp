import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: 'news',
    component: NewsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: 'category',
            loadChildren: () =>
              import('../category/category.module').then(m => m.CategoryPageModule)
          },
          {
            path: 'login',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginPageModule)
          },
          {
            path: 'registration',
            loadChildren: () =>
              import('../registration/registration.module').then(m => m.RegistrationPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/news',
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
export class NewsPageRoutingModule { }
