import { ProductService } from '../services/product';
import { AuthService } from '../services/authentication';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Tabs } from 'ionic-angular';
import { MyApp } from './app.component';
import {Facebook} from '@ionic-native/facebook';

import { AddFinalProductPage } from '../pages/AddFinalProduct/AddFinalProduct';
import { ContactPage } from '../pages/contact/contact';
import { DisplayFinalProductPage } from '../pages/DisplayFinalProduct/DisplayFinalProduct';
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from './../pages/sign-in/sign-in';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {FIREBASE_CREDENTIALS} from '../firebase.credentials';
import firebase from 'firebase';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

firebase.initializeApp(FIREBASE_CREDENTIALS);


@NgModule({
  declarations: [
    MyApp,
    AddFinalProductPage,
    ContactPage,
    DisplayFinalProductPage,
    TabsPage,
    SignInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddFinalProductPage,
    ContactPage,
    DisplayFinalProductPage,
    TabsPage,
    SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    AuthService,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
