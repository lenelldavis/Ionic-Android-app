import { NgForm } from '@angular/forms';
import { TabsPage } from './../tabs/tabs';
import { FinalProduct } from './../../models/FinalProduct.interface';
import { Component } from '@angular/core';
import { AlertController, App, NavController, Tabs } from 'ionic-angular';
import { ProductService } from '../../services/product';

@Component({
  selector: 'page-AddFinalProduct',
  templateUrl: 'AddFinalProduct.html'
})
export class AddFinalProductPage {

  product = {} as FinalProduct;

  constructor(public navCtrl: NavController, private productDatabase: ProductService,
    private app: App, private alertCtrl: AlertController) {
  }

  addProduct(form: NgForm) {
    this.setProduct(form);

    this.refreshPage();
  }

  addAnother(form: NgForm) {
    this.setProduct(form);
  }

  cancel(form: NgForm) {
    form.resetForm();
    this.refreshPage();
  }

  refreshPage() {
    this.navCtrl.push(TabsPage);
    this.navCtrl.pop();
    const tabsNav = this.app.getNavByIdOrName('navTabs') as Tabs;
    tabsNav.select(0);
  }

  setProduct(form: NgForm) {
    //** So far this works */

    this.product.itemId = form.value.id;
    this.product.itemName = form.value.name;
    this.product.itemCount = form.value.count;
    this.product.itemDescription = form.value.description;
    this.product.itemPrice = form.value.price;

    if(this.product.itemDescription == undefined){
      this.product.itemDescription = "";
    }

    if (this.checkNull()) {
      const alert = this.alertCtrl.create({
        title: "Form not complete.",
        subTitle: "Please fill in all fields.",
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else {
      this.productDatabase.addProduct(this.product);
      form.resetForm();
      this.product = {} as FinalProduct;      
    }
    
  }

  checkNull() {
    //loops will not work because the product object is undefined I cant loops through an undefined object
    if (this.product.itemCount == undefined || this.product.itemId == undefined || this.product.itemName == undefined || this.product.itemPrice == undefined) {
      return true;
    }
    else {
      return false;
    }
  }


}
