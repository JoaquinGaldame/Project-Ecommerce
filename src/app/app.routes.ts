import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.routing').then(m => m.HOME_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];