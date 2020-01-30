import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ServicesPageComponent,
    ProductsPageComponent,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
