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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
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
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
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
