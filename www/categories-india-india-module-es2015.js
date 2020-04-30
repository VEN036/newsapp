(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-india-india-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/india/india.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/india/india.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar *ngIf=\"hideMe\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n    <ion-button href=\"/news\">\n      <ion-icon name=\"md-home\" color=\"primary\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title color=\"primary\">இந்தியா</ion-title>\n</ion-toolbar>\n\n<div class=screen>\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" (ionSlideTap)=\"singleTap()\">\n    <ion-slide *ngFor=\"let data of newsType\">\n      <ion-card class=\"ion-no-margin\">\n        <div class=image [style.backgroundImage]=\"'url(' + data.news_pics + ')'\"></div>\n        <div class=\"heading\">\n          {{ data.heading }}\n        </div>\n        <div class=ion_content>\n          <div class=newstype>\n            {{ data.news_type }} / {{data.last_updated | date: 'dd-MM-yyyy'}}\n          </div>\n          <div class=content>\n            {{ data.news_content }}\n          </div>\n        </div>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>");

/***/ }),

/***/ "./src/app/categories/india/india-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/categories/india/india-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: IndiaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndiaPageRoutingModule", function() { return IndiaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _india_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./india.page */ "./src/app/categories/india/india.page.ts");




const routes = [
    {
        path: '',
        component: _india_page__WEBPACK_IMPORTED_MODULE_3__["IndiaPage"]
    }
];
let IndiaPageRoutingModule = class IndiaPageRoutingModule {
};
IndiaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndiaPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/india/india.module.ts":
/*!**************************************************!*\
  !*** ./src/app/categories/india/india.module.ts ***!
  \**************************************************/
/*! exports provided: IndiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndiaPageModule", function() { return IndiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _india_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./india-routing.module */ "./src/app/categories/india/india-routing.module.ts");
/* harmony import */ var _india_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./india.page */ "./src/app/categories/india/india.page.ts");







let IndiaPageModule = class IndiaPageModule {
};
IndiaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _india_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndiaPageRoutingModule"]
        ],
        declarations: [_india_page__WEBPACK_IMPORTED_MODULE_6__["IndiaPage"]]
    })
], IndiaPageModule);



/***/ }),

/***/ "./src/app/categories/india/india.page.scss":
/*!**************************************************!*\
  !*** ./src/app/categories/india/india.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvaW5kaWEvaW5kaWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/categories/india/india.page.ts":
/*!************************************************!*\
  !*** ./src/app/categories/india/india.page.ts ***!
  \************************************************/
/*! exports provided: IndiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndiaPage", function() { return IndiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.js");



let IndiaPage = class IndiaPage {
    constructor(http) {
        this.http = http;
        this.data = [];
        this.newsType = [];
        this.hideMe = true;
        this.news_data();
    }
    singleTap() {
        this.hideMe = !this.hideMe;
        console.log("Single tap operation done");
    }
    news_data() {
        this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
            this.data = data.data;
            this.newsType = this.data.filter(function (entry) {
                return entry.news_type === 'இந்தியா';
            });
            console.log(this.newsType);
        }, err => {
            console.log("Oops!");
        });
    }
    ngOnInit() {
    }
};
IndiaPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
IndiaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-india',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./india.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/india/india.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./india.page.scss */ "./src/app/categories/india/india.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], IndiaPage);



/***/ })

}]);
//# sourceMappingURL=categories-india-india-module-es2015.js.map