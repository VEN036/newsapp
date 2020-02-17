import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: 'news',
    component: NewsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../discover/discover.module').then(m => m.DiscoverModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/news/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'news/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
