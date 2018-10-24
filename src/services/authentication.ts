import { AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { Injectable } from '@angular/core';

/**Injectable needed for services that are used in multiple files. */
@Injectable()
export class AuthService {



  constructor(private alertCtrl: AlertController) {

  }
  /** Sign up methods for email password integration. Shows an alert for errors that will display a message if an error is caught.
   * Calls the displayUserVerification function that sends a verification email.
   */
  signup(email: string, password: string) {
    var signUpAlertCtrl = this.alertCtrl;
    let errorCaught = false;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      this.displayUserVerification();
    }).catch(function (error) {
      var errorMessage = error.message;
      errorCaught = true;
      if (errorCaught) {
        var signInError = signUpAlertCtrl.create({
          title: 'SignUp Error',
          subTitle: errorMessage,
          buttons: ['Dismiss']
        });
        signInError.present();
      }
    });
  }

  /** Email Verification function. Shows the user an alert for email verification success or failure. */
  displayUserVerification() {
    var malert = this.alertCtrl;
    var newUser = firebase.auth().currentUser;
    newUser.sendEmailVerification().then(
      function () {
        var emailVerfiyAlert = malert.create({
          title: 'Email Verification Alert',
          subTitle: 'Thank you for registering. A verification email has been sent. You must verify before you can login.',
          buttons: ['Dismiss']
        });
        emailVerfiyAlert.present();
      }
    ).catch(
      function (error) {
        var emailErrorAlert = malert.create({
          title: 'Email Error Alert',
          subTitle: 'Sorry. We could not send you a verification link. Please check your email spelling and try again.',
          buttons: ['Dismiss']
        });
        emailErrorAlert.present();
      }
    );
  }

  /* SignIn Function that shows an alert for errors. Returns a value to help user Navigate 
  back to the Sign In Page if they are successful.*/
  signIn(email: string, password: string) {
    var signInAlertCtrl = this.alertCtrl;

    return firebase.auth().signInWithEmailAndPassword(email, password).then(
      function () {
      }
    ).catch(
      function (error) {
        var signInError = signInAlertCtrl.create({
          title: 'Sign In Error',
          subTitle: error.message,
          buttons: ['Dismiss']
        });
        signInError.present();
      }

    );
  }

  /**Returns the id of the current logged in user */
  getActiveUser() {
    //This is returning a user object
    return firebase.auth().currentUser;
  }

  /**Resets the password of the user. Shows alerts for errors and success. */
  resetPassword(email: string) {
    let resetError = this.alertCtrl;

    firebase.auth().sendPasswordResetEmail(email).then(() => {
      var resetNotify = this.alertCtrl.create({
        title: 'Email Reset Sent',
        subTitle: 'An email has been sent for you to reset your password.',
        buttons: ['Dismiss']
      });
      resetNotify.present();
    }).catch(function (error) {
      var resetErrorNotify = resetError.create({
        title: 'Email Was Not Sent',
        subTitle: error.message,
        buttons: ['Dismiss']
      });
      resetErrorNotify.present();
    });
  }



}