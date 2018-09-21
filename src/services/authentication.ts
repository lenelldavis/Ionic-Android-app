import { AngularFireAuthModule } from 'angularfire2/auth';
import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthService {

  

  constructor(
    ){

  }
  /** Sign up methods for email password integration */
    signup(email: string, password: string) {
      try{
        const loginResult = firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(loginResult);
        return loginResult;
      }
      catch(e){
        console.error(e);
      }
    }

    singIn(email:string, password: string){
     return firebase.auth().signInWithEmailAndPassword(email,password);
    }

    /**Returns the id of the current logged in user */
    getActiveUser(){
      //This is returning a user object
        return firebase.auth().currentUser;
    }

}