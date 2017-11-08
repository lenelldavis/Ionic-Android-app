import { Component } from '@angular/core';
import { AddFinalProductPage } from '../AddFinalProduct/AddFinalProduct';
import { ContactPage } from '../contact/contact';
import { DisplayFinalProductPage } from '../DisplayFinalProduct/DisplayFinalProduct';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DisplayFinalProductPage;
  tab2Root = AddFinalProductPage;
  tab3Root = ContactPage;
  
  constructor() {
   
  }

  ionViewWillEnter(){
    
  }
}
