webpackJsonp([0],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, alertCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.user = {};
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                console.log("There's no user here");
            }
        });
    }
    SignInPage_1 = SignInPage;
    /* Facebook login */
    SignInPage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.FacebookAuthProvider())
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: error.code,
                subTitle: error.message,
                buttons: ['Dismiss']
            });
            alert.present();
            _this.navCtrl.setRoot(SignInPage_1);
        });
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
    };
    SignInPage.prototype.emailLogin = function (user) {
        this.auth.singIn(user.email, user.password);
    };
    SignInPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__register_register__["a" /* RegisterPage */]);
    };
    SignInPage = SignInPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\sign-in\sign-in.html"*/'<!--\n  Generated template for the SignInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SignIn</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>\n      Email Address\n    </ion-label>\n    <ion-input type="text" [(ngModel)]="user.email">\n\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>\n        Password\n      </ion-label>\n      <ion-input type="password" [(ngModel)]="user.password">\n  \n      </ion-input>\n    </ion-item>\n\n    <button ion-button (click)="emailLogin(user)">Login</button>\n\n    <button ion-button (click)="register()"> Register</button>\n  <!--<button ion-button (click)= "login()">Login with Facebook</button>-->\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Test\OgreBook\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_authentication__["a" /* AuthService */]) === "function" && _c || Object])
    ], SignInPage);
    return SignInPage;
    var SignInPage_1, _a, _b, _c;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AddFinalProduct_AddFinalProduct__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DisplayFinalProduct_DisplayFinalProduct__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__DisplayFinalProduct_DisplayFinalProduct__["a" /* DisplayFinalProductPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__AddFinalProduct_AddFinalProduct__["a" /* AddFinalProductPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.ionViewWillEnter = function () {
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\tabs\tabs.html"*/'<ion-tabs name="navTabs">\n  <ion-tab [root]="tab1Root" tabTitle="Product List" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Add a Product" tabIcon="add-circle"></ion-tab>\n  <!--<ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>-->\n</ion-tabs>\n'/*ion-inline-end:"C:\Test\OgreBook\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 237;

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFinalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFinalProductPage = /** @class */ (function () {
    function AddFinalProductPage(navCtrl, productDatabase, app, alertCtrl) {
        this.navCtrl = navCtrl;
        this.productDatabase = productDatabase;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.product = {};
    }
    AddFinalProductPage.prototype.addProduct = function (form) {
        this.setProduct(form);
        this.refreshPage();
    };
    AddFinalProductPage.prototype.addAnother = function (form) {
        this.setProduct(form);
    };
    AddFinalProductPage.prototype.cancel = function (form) {
        form.resetForm();
        this.refreshPage();
    };
    AddFinalProductPage.prototype.refreshPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        this.navCtrl.pop();
        var tabsNav = this.app.getNavByIdOrName('navTabs');
        tabsNav.select(0);
    };
    AddFinalProductPage.prototype.setProduct = function (form) {
        //** So far this works */
        this.product.itemId = form.value.id;
        this.product.itemName = form.value.name;
        this.product.itemCount = form.value.count;
        this.product.itemDescription = form.value.description;
        this.product.itemPrice = form.value.price;
        if (this.product.itemDescription == undefined) {
            this.product.itemDescription = "";
        }
        if (this.checkNull()) {
            var alert_1 = this.alertCtrl.create({
                title: "Form not complete.",
                subTitle: "Please fill in all fields.",
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else {
            this.productDatabase.addProduct(this.product);
            form.resetForm();
            this.product = {};
        }
    };
    AddFinalProductPage.prototype.checkNull = function () {
        //loops will not work because the product object is undefined I cant loops through an undefined object
        if (this.product.itemCount == undefined || this.product.itemId == undefined || this.product.itemName == undefined || this.product.itemPrice == undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    AddFinalProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-AddFinalProduct',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\AddFinalProduct\AddFinalProduct.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Product</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" (ngSubmit)="addAnother(form)">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Item ID Number</ion-label>\n        <ion-input type="text" [ngModel]="product.itemId" name="id" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Name</ion-label>\n        <ion-input type="text" [ngModel]= "product.itemName" name="name" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Count</ion-label>\n        <ion-input type="number" [ngModel]="product.itemCount" name="count" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Price</ion-label>\n        <ion-input type="number" [ngModel]="product.itemPrice" name="price" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Description: 25 characters</ion-label>\n        <ion-textarea type="text" value="" maxlength="25" [ngModel]="product.itemDescription" name="description"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button [disabled]="!form.form.valid" ion-button outline type="submit" >Add Another</button> \n    \n  </form>\n  <button ion-button color="primary" [disabled]="!form.form.valid" (click)="addProduct(form)" >Finish</button>\n  <button ion-button color="danger" (click)="cancel(form)">Cancel</button>\n</ion-content>'/*ion-inline-end:"C:\Test\OgreBook\src\pages\AddFinalProduct\AddFinalProduct.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_product__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], AddFinalProductPage);
    return AddFinalProductPage;
}());

//# sourceMappingURL=AddFinalProduct.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Test\OgreBook\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayFinalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign_in_sign_in__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_item_edit_item__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DisplayFinalProductPage = /** @class */ (function () {
    function DisplayFinalProductPage(navCtrl, productDatabase, app) {
        this.navCtrl = navCtrl;
        this.productDatabase = productDatabase;
        this.app = app;
        this.product = {};
        this.decreaseCount = 1;
        /*  */
    }
    DisplayFinalProductPage_1 = DisplayFinalProductPage;
    //Will only update the view when the page is pushed to the top of the stack
    DisplayFinalProductPage.prototype.ionViewWillEnter = function () {
        this.productList = this.productDatabase.getProductList();
    };
    /*Updates the count of the Product Item depending on which list item is tapped.
    Currently takes in a value from the user. Compares the index to the array retrieved
    from the database, updates the item Count and sends the object to database for an update.*/
    DisplayFinalProductPage.prototype.updateCount = function (index) {
        var holdKey;
        var holdProduct = {};
        this.productList[index].itemCount -= this.decreaseCount;
        holdKey = this.productList[index].itemKey;
        holdProduct = this.productList[index];
        this.productDatabase.update(holdKey, holdProduct);
        this.decreaseCount = 1;
        this.slider.closeSlidingItems();
    };
    DisplayFinalProductPage.prototype.updateNumberToRemove = function () {
        this.decreaseCount++;
    };
    /** Deletes the item from the database with the local index */
    DisplayFinalProductPage.prototype.deleteItem = function (index) {
        this.productDatabase.removeProduct(this.productList[index].itemKey);
        this.navCtrl.setRoot(DisplayFinalProductPage_1);
    };
    /** Calls logs the user out and resets the main app page to SignIn */
    DisplayFinalProductPage.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signOut();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__sign_in_sign_in__["a" /* SignInPage */]);
    };
    /** This will take in the information from the array and allow the user to edit
     * Get the product object from the array, pass that info to another page
     */
    DisplayFinalProductPage.prototype.editItem = function (index) {
        var holdProduct = {};
        holdProduct = this.productList[index];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_item_edit_item__["a" /* EditItemPage */], holdProduct);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* List */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* List */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* List */]) === "function" && _a || Object)
    ], DisplayFinalProductPage.prototype, "slider", void 0);
    DisplayFinalProductPage = DisplayFinalProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-DisplayFinalProduct',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\DisplayFinalProduct\DisplayFinalProduct.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title start>Inventory</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-start (click)="logout()">\n        Log Out\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let product of productList; let i = index">\n\n      <ion-item>\n        <ion-item no-lines>\n          <h2>{{product.itemName}} (#{{product.itemId}})</h2>\n          <div id="styleDescription">\n            <p>{{product.itemDescription}}</p>\n          </div>\n\n          <button item-end ion-button (click)="editItem(i)">\n            <ion-icon name="create"></ion-icon>\n          </button>\n        </ion-item>\n        <ion-item no-lines>\n          <div item-content item-start>\n            <h2>${{product.itemPrice}}</h2>\n          </div>\n          <div item-end id="styleItemCount">{{product.itemCount}}</div>\n        </ion-item>\n      </ion-item>\n\n      <ion-item-options>\n        \n          <button id="styleDeleteButton" ion-button expandable icon-start color="danger" (click)="deleteItem(i)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n          <ion-input id="styleInputCount" type="number" value="" [(ngModel)]="decreaseCount"></ion-input>\n          <button id="styleSoldButton" ion-button expandable icon-start color ="primary" (click)="updateNumberToRemove()"> \n            <ion-icon name="arrow-dropup-circle"></ion-icon>\n          </button>\n          <button id="styleSoldButton" ion-button icon-start color="secondary" (click)="updateCount(i)">\n            <ion-icon name="logo-usd"></ion-icon>\n            Sold\n          </button>\n        \n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Test\OgreBook\src\pages\DisplayFinalProduct\DisplayFinalProduct.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_product__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]) === "function" && _d || Object])
    ], DisplayFinalProductPage);
    return DisplayFinalProductPage;
    var DisplayFinalProductPage_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=DisplayFinalProduct.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditItemPage = /** @class */ (function () {
    function EditItemPage(navCtrl, navParams, productDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productDatabase = productDatabase;
        this.product = {};
        this.product.itemId = this.navParams.get('itemId');
        this.product.itemCount = this.navParams.get('itemCount');
        this.product.itemDescription = this.navParams.get('itemDescription');
        this.product.itemName = this.navParams.get('itemName');
        this.product.itemPrice = this.navParams.get('itemPrice');
        this.product.itemKey = this.navParams.get('itemKey');
    }
    /** I need to get the product object and prepopulate the form with that data
     * then I need to edit that object and pass it to database update function with the key
     */
    EditItemPage.prototype.updateItem = function (form) {
        this.product.itemId = form.value.id;
        this.product.itemName = form.value.name;
        this.product.itemCount = form.value.count;
        this.product.itemDescription = form.value.description;
        this.product.itemPrice = form.value.price;
        this.productDatabase.update(this.product.itemKey, this.product);
        form.resetForm();
        this.navCtrl.pop();
    };
    EditItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-item',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\edit-item\edit-item.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Item</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #myForm="ngForm" (ngSubmit)="updateItem(myForm)">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Item ID Number</ion-label>\n        <ion-input type="text" [(ngModel)]="product.itemId" name="id" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Name</ion-label>\n        <ion-input type="text" [(ngModel)]="product.itemName" name="name" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Count</ion-label>\n        <ion-input type="number" [(ngModel)]="product.itemCount" name="count" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Price</ion-label>\n        <ion-input type="number" [(ngModel)]="product.itemPrice" name="price" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Description</ion-label>\n        <ion-textarea type="text" [(ngModel)]="product.itemDescription" name="description" ></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button [disabled]="!myForm.form.valid" ion-button type="submit">Update</button>\n\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Test\OgreBook\src\pages\edit-item\edit-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_product__["a" /* ProductService */]])
    ], EditItemPage);
    return EditItemPage;
}());

//# sourceMappingURL=edit-item.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(304);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_product__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_AddFinalProduct_AddFinalProduct__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_DisplayFinalProduct_DisplayFinalProduct__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_item_edit_item__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__firebase_credentials__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_firebase__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















__WEBPACK_IMPORTED_MODULE_18_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_17__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_AddFinalProduct_AddFinalProduct__["a" /* AddFinalProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_DisplayFinalProduct_DisplayFinalProduct__["a" /* DisplayFinalProductPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_item_edit_item__["a" /* EditItemPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_AddFinalProduct_AddFinalProduct__["a" /* AddFinalProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_DisplayFinalProduct_DisplayFinalProduct__["a" /* DisplayFinalProductPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_item_edit_item__["a" /* EditItemPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_0__services_product__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_sign_in_sign_in__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { TabsPage } from './../pages/tabs/tabs';




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_sign_in_sign_in__["a" /* SignInPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Test\OgreBook\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Test\OgreBook\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.user = {};
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function (user) {
        this.auth.signup(user.email, user.password);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\register\register.html"*/'Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label floating>\n          Email Address\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="user.email">\n    \n        </ion-input>\n      </ion-item>\n    \n      <ion-item>\n          <ion-label floating>\n            Password\n          </ion-label>\n          <ion-input type="password" [(ngModel)]="user.password">\n      \n          </ion-input>\n        </ion-item>\n\n        <button ion-button (click)="register(user)"> Register</button>\n</ion-content>'/*ion-inline-end:"C:\Test\OgreBook\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_authentication__["a" /* AuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyD53ColPIL4IrWCQAaNithhX6vtLqcCgUs",
    authDomain: "inventory-app-2c264.firebaseapp.com",
    databaseURL: "https://inventory-app-2c264.firebaseio.com",
    projectId: "inventory-app-2c264",
    storageBucket: "inventory-app-2c264.appspot.com",
    messagingSenderId: "55927647314"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(auth) {
        this.auth = auth;
        /** The following variables refer to the firebase nodes addresses
         * productNode creates the productList node
         * productUserNode will create a new node based on the user signed in
         */
        this.userNode = this.auth.getActiveUser().uid;
        this.productNode = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('productList');
        this.productUserNode = this.productNode.child(this.userNode);
    }
    /* Adds the item to the database, sets the unique itemKey and updates the database */
    ProductService.prototype.addProduct = function (product) {
        var key = this.productUserNode.push(product).key;
        product.itemKey = key;
        this.productUserNode.child(key).update(product);
    };
    /** Removes item from database */
    ProductService.prototype.removeProduct = function (itemkey) {
        this.productUserNode.child(itemkey).remove();
    };
    /** Updates the database after the itemCount has changed */
    ProductService.prototype.update = function (keyString, newProduct) {
        //update the item depending on the itemkey. Take the item.key
        this.productUserNode.child(keyString).update(newProduct);
    };
    /** Gets the items from the database, places them in an array and returns the array */
    ProductService.prototype.getProductList = function () {
        var tempArray = [];
        this.productUserNode.once('value').then(function (snapshot) {
            snapshot.forEach(function (childSnap) {
                var item = childSnap.val();
                tempArray.push(item);
            });
        });
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
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication__["a" /* AuthService */]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    /** Sign up methods for email password integration */
    AuthService.prototype.signup = function (email, password) {
        try {
            var loginResult = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
            console.log(loginResult);
            return loginResult;
        }
        catch (e) {
            console.error(e);
        }
    };
    AuthService.prototype.singIn = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    /**Returns the id of the current logged in user */
    AuthService.prototype.getActiveUser = function () {
        //This is returning a user object
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authentication.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map