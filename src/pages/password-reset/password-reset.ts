import { Component } from '@angular/core';
import { User } from './../../models/user';
import { AuthService } from './../../services/authentication';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConditionalExpr } from '@angular/compiler';

@IonicPage()
@Component({
  selector: 'page-password-reset',
  templateUrl: 'password-reset.html',
})
export class PasswordResetPage {
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private auth: AuthService) {
  }

/**Calls the Authentication Provider to reset the User. */
  resetPassword(user: User){

    if(user.email == null){
      var resetPasswordError = this.alertCtrl.create({
        title: 'Password Reset Error',
        subTitle: 'Please enter an email address.',
        buttons: ['Dismiss']
      });
      resetPasswordError.present();
    }
    else{
     this.auth.resetPassword(user.email);     
     this.navCtrl.pop();
    }  
    
  }

}
