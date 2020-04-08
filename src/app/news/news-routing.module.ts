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
          },
          {
            path: 'about',
            loadChildren: () =>
              import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'tabs',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule )
          }
        ]
      },
      {
        path: 'share',
        children: [
          {
            path: '',
            loadChildren: () => import('../share/share.module').then( m => m.SharePageModule )
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
