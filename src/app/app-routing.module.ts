import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule )
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'tamilnadu',
    loadChildren: () => import('./categories/tamilnadu/tamilnadu.module').then( m => m.TamilnaduPageModule)
  },
  {
    path: 'india',
    loadChildren: () => import('./categories/india/india.module').then( m => m.IndiaPageModule)
  },
  {
    path: 'politics',
    loadChildren: () => import('./categories/politics/politics.module').then( m => m.PoliticsPageModule)
  },
  {
    path: 'world',
    loadChildren: () => import('./categories/world/world.module').then( m => m.WorldPageModule)
  },
  {
    path: 'economics',
    loadChildren: () => import('./categories/economics/economics.module').then( m => m.EconomicsPageModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./categories/technology/technology.module').then( m => m.TechnologyPageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./categories/sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./categories/entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
  },
  {
    path: 'agriculture',
    loadChildren: () => import('./categories/agriculture/agriculture.module').then( m => m.AgriculturePageModule)
  }

  //{
  //   path: '',
  //  loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  //},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
