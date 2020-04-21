import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'category',
        children: [
          {
            path: '',
            loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule )
          }
        ]
      },
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('../discover/discover.module').then( m => m.DiscoverPageModule )
          }
        ]
      },
      {
        path: 'relevance',
        children: [
          {
            path: '',
            loadChildren: () => import('../relevance/relevance.module').then( m => m.RelevancePageModule )
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/category',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/category',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
