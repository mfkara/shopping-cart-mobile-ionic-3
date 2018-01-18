//import { DnmPage } from './../pages/dnm/dnm';
import { CartService } from '../providers/cart.service';
import { ProductDetailPage } from './../pages/product-detail/product-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {  HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductPage } from '../pages/product/product';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    ShoppingCartPage,
   // DnmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    ShoppingCartPage,
   // DnmPage

  ],
  providers: [
    CartService,
    {provide:"apiUrl",useValue:"http://localhost:8080/"},
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
