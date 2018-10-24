import { AuthService } from './../../services/authentication';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController) {
  }


/** Calls the Authentication Provider to register the User. */
  register(user: User) {

    if (user.email == null || user.password == null) {
      var signInError = this.alertCtrl.create({
        title: 'SignUp Error',
        subTitle: 'Please enter an email address and a password.',
        buttons: ['Dismiss']
      });
      signInError.present();
    }
    else {
      this.auth.signup(user.email, user.password);
      this.navCtrl.pop();
    }
  }

}
