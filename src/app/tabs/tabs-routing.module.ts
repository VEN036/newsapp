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
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule )
          }
        ]
      },
      {
        path: 'registration',
        children: [
          {
            path: '',
            loadChildren: () => import('../registration/registration.module').then( m => m.RegistrationPageModule )
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
