(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-technology-technology-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/technology/technology.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/technology/technology.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar *ngIf=\"hideMe\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button href=\"/news\">\r\n      <ion-icon name=\"md-home\" color=\"primary\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title color=\"primary\">தொழில்நுட்பம்</ion-title>\r\n</ion-toolbar>\r\n\r\n<div class=screen>\r\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" (ionSlideTap)=\"singleTap()\">\r\n    <ion-slide *ngFor=\"let data of newsType\">\r\n      <ion-card class=\"ion-no-margin\">\r\n        <div class=image [style.backgroundImage]=\"'url(' + data.news_pics + ')'\"></div>\r\n        <div class=\"heading\">\r\n          {{ data.heading }}\r\n        </div>\r\n        <div class=ion_content>\r\n          <div class=newstype>\r\n            {{ data.news_type }} / {{data.last_updated | date: 'dd-MM-yyyy'}}\r\n          </div>\r\n          <div class=content>\r\n            {{ data.news_content }}\r\n          </div>\r\n        </div>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>");

/***/ }),

/***/ "./src/app/categories/technology/technology-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/categories/technology/technology-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TechnologyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyPageRoutingModule", function() { return TechnologyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _technology_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology.page */ "./src/app/categories/technology/technology.page.ts");




const routes = [
    {
        path: '',
        component: _technology_page__WEBPACK_IMPORTED_MODULE_3__["TechnologyPage"]
    }
];
let TechnologyPageRoutingModule = class TechnologyPageRoutingModule {
};
TechnologyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TechnologyPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/technology/technology.module.ts":
/*!************************************************************!*\
  !*** ./src/app/categories/technology/technology.module.ts ***!
  \************************************************************/
/*! exports provided: TechnologyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyPageModule", function() { return TechnologyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _technology_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./technology-routing.module */ "./src/app/categories/technology/technology-routing.module.ts");
/* harmony import */ var _technology_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./technology.page */ "./src/app/categories/technology/technology.page.ts");







let TechnologyPageModule = class TechnologyPageModule {
};
TechnologyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _technology_routing_module__WEBPACK_IMPORTED_MODULE_5__["TechnologyPageRoutingModule"]
        ],
        declarations: [_technology_page__WEBPACK_IMPORTED_MODULE_6__["TechnologyPage"]]
    })
], TechnologyPageModule);



/***/ }),

/***/ "./src/app/categories/technology/technology.page.scss":
/*!************************************************************!*\
  !*** ./src/app/categories/technology/technology.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvdGVjaG5vbG9neS90ZWNobm9sb2d5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/categories/technology/technology.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/categories/technology/technology.page.ts ***!
  \**********************************************************/
/*! exports provided: TechnologyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyPage", function() { return TechnologyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.js");



let TechnologyPage = class TechnologyPage {
    constructor(http) {
        this.http = http;
        this.slideOpts = {
            speed: 500,
            effect: 'coverflow',
            slidesPerView: 1,
            slideOffsetBefore: 10,
            slideOffsetAftrer: 10,
            direction: 'vertical',
            centeredSlides: true,
            coverflowEffect: {
                rotate: 20,
                streach: 100,
                depth: 100,
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                modifier: 1,
            }
        };
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
                return entry.news_type === 'தொழில்நுட்பம்';
            });
            console.log(this.newsType);
        }, err => {
            console.log("Oops!");
        });
    }
    ngOnInit() {
    }
};
TechnologyPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
TechnologyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-technology',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./technology.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/technology/technology.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./technology.page.scss */ "./src/app/categories/technology/technology.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], TechnologyPage);



/***/ })

}]);
//# sourceMappingURL=categories-technology-technology-module-es2015.js.map