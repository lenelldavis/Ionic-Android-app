import { Injectable } from '@angular/core';
import { FinalProduct } from './../models/FinalProduct.interface';
import { AuthService } from './authentication';
import firebase from 'firebase';

@Injectable()

export class ProductService {

    constructor(private auth: AuthService) { }

    /** The following variables refer to the firebase nodes addresses
     * productNode creates the productList node
     * productUserNode will create a new node based on the user signed in
     */
    private userNode = this.auth.getActiveUser().uid;
    private productNode = firebase.database().ref('productList');
    private productUserNode = this.productNode.child(this.userNode);
    public productList: FinalProduct[];
    

    /* Adds the item to the database, sets the unique itemKey and updates the database */
    addProduct(product: FinalProduct) {

        var key = this.productUserNode.push(product).key;
        product.itemKey = key;
        this.productUserNode.child(key).update(product);
    }

    /** Removes item from database */
    removeProduct(itemkey: string) {
        this.productUserNode.child(itemkey).remove();
    }

    /** Updates the database after the itemCount has changed */
    update(keyString: string, newProduct:FinalProduct) {
        //update the item depending on the itemkey. Take the item.key
        this.productUserNode.child(keyString).update(newProduct);
    }

    /** Gets the items from the database, places them in an array and returns the array */
    getProductList() {
        let tempArray: FinalProduct[] = [];

        this.productUserNode.once('value').then(function (snapshot) {

            snapshot.forEach(
                function (childSnap) {
                    var item = childSnap.val();
                    tempArray.push(item);
                }
            );
        }
        );

        //Looks like I can't call the forEach function using the database on() call
        //on is used to listen for changes
/*         this.productUserNode.on('value', function (snapshot) {
            snapshot.forEach(
                function (childSnap){
                    var item = childSnap.val();
                    tempArray.push(item);
                    console.log("On Listerner: "+item);
                    return true;
                }
            );
        }
        ); */

        this.productList = tempArray;
        return tempArray;
    }
}