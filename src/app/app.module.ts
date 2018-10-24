import { ProductService } from '../services/product';
import { AuthService } from '../services/authentication';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, AlertController } from 'ionic-angular';
import { MyApp } from './app.component';
import { Facebook } from '@ionic-native/facebook';
import { FormsModule } from '@angular/forms';
import { AdMobFree } from '@ionic-native/admob-free';

import { AddFinalProductPage } from '../pages/AddFinalProduct/AddFinalProduct';
import { ContactPage } from '../pages/contact/contact';
import { DisplayFinalProductPage } from '../pages/DisplayFinalProduct/DisplayFinalProduct';
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from './../pages/sign-in/sign-in';
import { EditItemPage } from './../pages/edit-item/edit-item';
import { RegisterPage } from './../pages/register/register';
import { PasswordResetPage } from './../pages/password-reset/password-reset';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FIREBASE_CREDENTIALS } from '../firebase.credentials';
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

firebase.initializeApp(FIREBASE_CREDENTIALS);

// These are all imports required for Pro Client with Monitoring & Deploy,
// feel free to merge into existing imports above.
/*import { Pro } from '@ionic/pro';

Pro.init('e2663aac', {
  appVersion: '0.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}*/


@NgModule({
  declarations: [
    MyApp,
    AddFinalProductPage,
    ContactPage,
    DisplayFinalProductPage,
    TabsPage,
    SignInPage,
    EditItemPage,
    RegisterPage,
    PasswordResetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddFinalProductPage,
    ContactPage,
    DisplayFinalProductPage,
    TabsPage,
    SignInPage,
    EditItemPage,
    RegisterPage,
    PasswordResetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    AuthService,
    ProductService,
    AlertController,
    IonicErrorHandler,
    AdMobFree,
    /* [{ provide: ErrorHandler, useClass: MyErrorHandler }]*/
  ]
})
export class AppModule { }
