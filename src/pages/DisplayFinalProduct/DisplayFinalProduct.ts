import { SignInPage } from './../sign-in/sign-in';
import { ProductService } from '../../services/product';
import { FinalProduct } from './../../models/FinalProduct.interface';
import { Component, ViewChild } from '@angular/core';
import { List, NavController, App } from 'ionic-angular';
import firebase from 'firebase';
import { EditItemPage } from '../edit-item/edit-item';

@Component({
  selector: 'page-DisplayFinalProduct',
  templateUrl: 'DisplayFinalProduct.html'
})
export class DisplayFinalProductPage {

  productList: FinalProduct[];
  product = {} as FinalProduct;
  private decreaseCount: number = 1;
  @ViewChild(List) slider: List;

  constructor(public navCtrl: NavController, 
              private productDatabase: ProductService,
              private app: App) {
    /*  */
  }
  
  //Will only update the view when the page is pushed to the top of the stack
  ionViewWillEnter() {
    this.productList = this.productDatabase.getProductList();

  }

  /*Updates the count of the Product Item depending on which list item is tapped.
  Currently takes in a value from the user. Compares the index to the array retrieved
  from the database, updates the item Count and sends the object to database for an update.*/
  updateCount(index: number) {
    let holdKey: string;
    let holdProduct = {} as FinalProduct;

    this.productList[index].itemCount -= this.decreaseCount;
    holdKey = this.productList[index].itemKey;
    holdProduct = this.productList[index];

    this.productDatabase.update(holdKey, holdProduct);

    this.decreaseCount= 1;

    this.slider.closeSlidingItems();
  }

  updateNumberToRemove(){
    this.decreaseCount++;
  }

  /** Deletes the item from the database with the local index */
  deleteItem(index: number) {
    this.productDatabase.removeProduct(this.productList[index].itemKey);
    this.navCtrl.setRoot(DisplayFinalProductPage);
  }

  /** Calls logs the user out and resets the main app page to SignIn */
  logout(){
    firebase.auth().signOut();
    this.app.getRootNav().setRoot(SignInPage);
  }

  /** This will take in the information from the array and allow the user to edit
   * Get the product object from the array, pass that info to another page 
   */
  editItem(index: number){
    let holdProduct = {} as FinalProduct;
    holdProduct = this.productList[index];
 
    this.navCtrl.push(EditItemPage, holdProduct);

  }
}
