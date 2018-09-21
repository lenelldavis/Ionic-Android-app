import { FinalProduct } from '../../models/FinalProduct.interface';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product';


@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  product = {} as FinalProduct;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productDatabase: ProductService) {
    this.product.itemId = this.navParams.get('itemId')
    this.product.itemCount = this.navParams.get('itemCount')
    this.product.itemDescription = this.navParams.get('itemDescription')
    this.product.itemName = this.navParams.get('itemName');
    this.product.itemPrice = this.navParams.get('itemPrice')
    this.product.itemKey = this.navParams.get('itemKey');
  }


  /** I need to get the product object and prepopulate the form with that data
   * then I need to edit that object and pass it to database update function with the key
   */

   updateItem(form: NgForm){
    this.product.itemId = form.value.id;
    this.product.itemName = form.value.name;
    this.product.itemCount = form.value.count;
    this.product.itemDescription = form.value.description;
    this.product.itemPrice = form.value.price;

    this.productDatabase.update(this.product.itemKey, this.product);
    form.resetForm();
    this.navCtrl.pop();
   }

}
