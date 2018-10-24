import { PasswordResetPage } from './../password-reset/password-reset';
import { AuthService } from './../../services/authentication';
import { RegisterPage } from './../register/register';
import { User } from './../../models/user';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import firebase from 'firebase';


@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController, private alertCtrl: AlertController, private auth: AuthService,
    private toastCtrl: ToastController) {

    let toast = this.toastCtrl.create({
      message: 'Please Sign In or Register.',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


  /* Facebook login */
  login() {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(

        () => {
          this.navCtrl.setRoot(TabsPage);
        }
      ).catch(
        (error) => {
          const alert = this.alertCtrl.create({
            title: error.code,
            subTitle: error.message,
            buttons: ['Dismiss']
          });
          alert.present();
          this.navCtrl.setRoot(SignInPage);
        }
      );
  }

  /**Calls the Authentication Provider to sign the user in. */
  emailLogin(user: User) {
    let verifyErrorAlert = this.alertCtrl;
    let newNavControl = this.navCtrl;
    if (user.email == null || user.password == null) {
      var signInError = this.alertCtrl.create({
        title: "Sign In Error",
        subTitle: 'Please enter an email address and a password.',
        buttons: ['Dismiss']
      });
      signInError.present();
    }
    else {
      this.auth.signIn(user.email, user.password)
      firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.emailVerified) {
          newNavControl.setRoot(TabsPage);
        } else if (user && user.emailVerified == false) {
          var verificationError = verifyErrorAlert.create({
            title: "Sign In Error",
            subTitle: 'Your email has not been verified. Also, restart the app.',
            buttons: ['Dismiss']
          });
          verificationError.present();
        }
      });
    }

  }

  /** Transitions to the Register Page */
  register() {
    this.navCtrl.push(RegisterPage);
  }

  /**Transitions to the Password Reset Page */
  sendPasswordReset(user: User) {
    this.navCtrl.push(PasswordResetPage);
  }

}
