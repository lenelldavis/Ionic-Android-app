import { AuthService } from './../../services/authentication';
import { RegisterPage } from './../register/register';
import { User } from './../../models/user';
import { Facebook } from '@ionic-native/facebook';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import firebase from 'firebase';


@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController, private auth: AuthService) {

      firebase.auth().onAuthStateChanged( user => {
        if (user) {

          this.navCtrl.setRoot(TabsPage);
        } else {
          console.log("There's no user here");
        }
      });
  }

  /* Facebook login */
  login() {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(
        
        ()=>{
          this.navCtrl.setRoot(TabsPage);        
        }
      ).catch(
      (error)=> {
        const alert = this.alertCtrl.create({
          title: error.code,
          subTitle: error.message,
          buttons: ['Dismiss']
        });
        alert.present();
        this.navCtrl.setRoot(SignInPage);
      }
    );  
  
/*     firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider()).then(
      () =>{
        //Inside Anonymouse function
        firebase.auth().getRedirectResult().then((result)=>{
          
          // The signed-in user info.
          var user = result.user;
          console.log(result);
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      }
    ).then(
      ()=>{
        console.log("Inside the promise");
        this.navCtrl.setRoot(TabsPage);
      }
    ); */

  }

  emailLogin(user: User){
    this.auth.singIn(user.email, user.password)
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }


}
