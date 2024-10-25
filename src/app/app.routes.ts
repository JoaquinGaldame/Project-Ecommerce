import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Página principal
  { path: '**', redirectTo: '' },  // Redirección a Home si la ruta no existe
];