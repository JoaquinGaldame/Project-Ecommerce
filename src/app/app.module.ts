import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(routes),  // Configuración de rutas
  ],
  providers: [],
})
export class AppModule {}