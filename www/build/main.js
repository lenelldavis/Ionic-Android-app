webpackJsonp([0],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_product__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AddFinalProduct_AddFinalProduct__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DisplayFinalProduct_DisplayFinalProduct__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(productDatabase) {
        this.productDatabase = productDatabase;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__DisplayFinalProduct_DisplayFinalProduct__["a" /* DisplayFinalProductPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__AddFinalProduct_AddFinalProduct__["a" /* AddFinalProductPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\tabs\tabs.html"*/'<ion-tabs name="navTabs">\n  <ion-tab [root]="tab1Root" tabTitle="Product List" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Add a Product" tabIcon="add-circle"></ion-tab>\n  <!--<ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>-->\n</ion-tabs>\n'/*ion-inline-end:"C:\Test\OgreBook\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_product__["a" /* ProductService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(63);
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


var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
        //return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.facebook_signin = function () {
    };
    AuthService.prototype.getActiveUser = function () {
        //This is returning a user object
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 235:
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
webpackEmptyAsyncContext.id = 235;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInPage = SignInPage_1 = (function () {
    function SignInPage(navCtrl, fireAuth) {
        this.navCtrl = navCtrl;
        this.fireAuth = fireAuth;
    }
    /* Facebook login */
    SignInPage.prototype.login = function () {
        var _this = this;
        this.fireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider())
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (error) {
            console.log(error); // not redirecting prodces an object with error.code and error.message
            //Try implmenting a popup with a button that wil redirect
            _this.navCtrl.setRoot(SignInPage_1);
        });
    };
    SignInPage.prototype.showUser = function () {
        //alert("The User ID is: "+this.authService.getActiveUser().uid);
    };
    return SignInPage;
}());
SignInPage = SignInPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-sign-in',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\sign-in\sign-in.html"*/'<!--\n  Generated template for the SignInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SignIn</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button (click)= "login()">Login with Facebook</button>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Test\OgreBook\src\pages\sign-in\sign-in.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], SignInPage);

var SignInPage_1;
//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFinalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFinalProductPage = (function () {
    function AddFinalProductPage(navCtrl, productDatabase, app) {
        this.navCtrl = navCtrl;
        this.productDatabase = productDatabase;
        this.app = app;
        this.product = {};
    }
    AddFinalProductPage.prototype.addProduct = function (form) {
        //the product is not coming from the form.
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
        this.product.itemId = form.value.id;
        this.product.itemName = form.value.name;
        this.product.itemCount = form.value.count;
        this.product.itemDescription = form.value.description;
        this.product.itemPrice = form.value.price;
        this.productDatabase.addProduct(this.product);
        form.resetForm();
    };
    return AddFinalProductPage;
}());
AddFinalProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-AddFinalProduct',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\AddFinalProduct\AddFinalProduct.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Product</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="addAnother(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Item ID Number</ion-label>\n        <ion-input type="text" ngModel name="id" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Name</ion-label>\n        <ion-input type="text" ngModel name="name" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Count</ion-label>\n        <ion-input type="number" ngModel name="count" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Price</ion-label>\n        <ion-input type="number" ngModel name="price" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Item Description</ion-label>\n        <ion-textarea type="text" ngModel name="description" required></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button type="submit" [disabled]="!f.valid">Add Another</button> \n    \n  </form>\n  <button ion-button color="primary" [disabled]="!f.valid" (click)="addProduct(f)" >Finish</button>\n  <button ion-button color="danger" (click)="cancel(f)">Cancel</button>\n</ion-content>'/*ion-inline-end:"C:\Test\OgreBook\src\pages\AddFinalProduct\AddFinalProduct.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_product__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]])
], AddFinalProductPage);

//# sourceMappingURL=AddFinalProduct.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Test\OgreBook\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayFinalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_product__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayFinalProductPage = DisplayFinalProductPage_1 = (function () {
    function DisplayFinalProductPage(navCtrl, productDatabase) {
        this.navCtrl = navCtrl;
        this.productDatabase = productDatabase;
        this.product = {};
        this.decreaseCount = 1;
    }
    //Will only update the view when the page is pushed to the top of the stack
    DisplayFinalProductPage.prototype.ionViewWillEnter = function () {
        this.productList = this.productDatabase.getProductList();
        //For some reason this list is still null
        /* if (!this.productList[0] == undefined) {
          console.log("The first itme is null");
          this.dummyProduct();
        } */
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
    };
    /** Deletes the item from the database with the local index */
    DisplayFinalProductPage.prototype.deleteItem = function (index) {
        this.productDatabase.removeProduct(this.productList[index].itemKey);
        this.navCtrl.setRoot(DisplayFinalProductPage_1);
    };
    DisplayFinalProductPage.prototype.dummyProduct = function () {
        var tempArray = [];
        this.product.itemId = "0009";
        this.product.itemName = "Product name";
        this.product.itemCount = 10;
        this.product.itemPrice = 9;
        this.product.itemDescription = "Item Description.";
        tempArray[0] = this.product;
        tempArray[1] = this.product;
        this.productList = tempArray;
        console.log("Index 0: " + this.productList[0].itemName);
    };
    return DisplayFinalProductPage;
}());
DisplayFinalProductPage = DisplayFinalProductPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-DisplayFinalProduct',template:/*ion-inline-start:"C:\Test\OgreBook\src\pages\DisplayFinalProduct\DisplayFinalProduct.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Inventory</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let product of productList; let i = index">\n\n      <ion-item no-lines>\n        <h2>{{product.itemName}} (#{{product.itemId}})</h2>\n        <p>{{product.itemDescription}}</p>\n      </ion-item>\n      <ion-item no-lines>\n        <div item-content item-start>\n          <h2>${{product.itemPrice}}</h2>\n        </div>\n        <button ion-button outline round item-end>{{product.itemCount}}</button>\n      </ion-item>\n      <ion-item>\n        <ion-label floating item-start>Enter Number</ion-label>\n        <ion-input type="number" value="" [(ngModel)]="decreaseCount" item-start></ion-input>\n        <button ion-button color="secondary" (click)="updateCount(i)" item-end>\n          <ion-icon name="ion-refresh"></ion-icon>\n          Item Sold\n        </button>\n        <button ion-button color="danger" (click)="deleteItem(i)" item-end>\n          <ion-icon name="ion-trash-a"> </ion-icon>\n          Delete\n        </button>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(i)">\n          <ion-icon name="ion-trash-a"></ion-icon>\n          Delete\n        </button>\n        <ion-input type="number" value="" [(ngModel)]= "decreaseCount"></ion-input>\n        <button ion-button color="secondary" (click)="updateCount(i)">\n          <ion-icon name="logo-usd"></ion-icon>\n          Sold\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Test\OgreBook\src\pages\DisplayFinalProduct\DisplayFinalProduct.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__services_product__["a" /* ProductService */]])
], DisplayFinalProductPage);

var DisplayFinalProductPage_1;
//# sourceMappingURL=DisplayFinalProduct.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(303);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_product__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_AddFinalProduct_AddFinalProduct__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_DisplayFinalProduct_DisplayFinalProduct__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__firebase_credentials__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















__WEBPACK_IMPORTED_MODULE_15_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_14__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_AddFinalProduct_AddFinalProduct__["a" /* AddFinalProductPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_DisplayFinalProduct_DisplayFinalProduct__["a" /* DisplayFinalProductPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__["a" /* SignInPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_AddFinalProduct_AddFinalProduct__["a" /* AddFinalProductPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_DisplayFinalProduct_DisplayFinalProduct__["a" /* DisplayFinalProductPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__["a" /* SignInPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__services_product__["a" /* ProductService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_sign_in_sign_in__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(284);
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




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_sign_in_sign_in__["a" /* SignInPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Test\OgreBook\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Test\OgreBook\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 451:
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(63);
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



var ProductService = (function () {
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
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication__["a" /* AuthService */]])
], ProductService);

//# sourceMappingURL=product.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map