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
            path: '',
            loadChildren: () => 
              import('./news.module').then(m => m.NewsPageModule)
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
