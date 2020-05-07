(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-entertainment-entertainment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/entertainment/entertainment.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/entertainment/entertainment.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>entertainment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/categories/entertainment/entertainment-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/categories/entertainment/entertainment-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: EntertainmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentPageRoutingModule", function() { return EntertainmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entertainment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entertainment.page */ "./src/app/categories/entertainment/entertainment.page.ts");




const routes = [
    {
        path: '',
        component: _entertainment_page__WEBPACK_IMPORTED_MODULE_3__["EntertainmentPage"]
    }
];
let EntertainmentPageRoutingModule = class EntertainmentPageRoutingModule {
};
EntertainmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EntertainmentPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/entertainment/entertainment.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/categories/entertainment/entertainment.module.ts ***!
  \******************************************************************/
/*! exports provided: EntertainmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentPageModule", function() { return EntertainmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entertainment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entertainment-routing.module */ "./src/app/categories/entertainment/entertainment-routing.module.ts");
/* harmony import */ var _entertainment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entertainment.page */ "./src/app/categories/entertainment/entertainment.page.ts");







let EntertainmentPageModule = class EntertainmentPageModule {
};
EntertainmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _entertainment_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntertainmentPageRoutingModule"]
        ],
        declarations: [_entertainment_page__WEBPACK_IMPORTED_MODULE_6__["EntertainmentPage"]]
    })
], EntertainmentPageModule);



/***/ }),

/***/ "./src/app/categories/entertainment/entertainment.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/categories/entertainment/entertainment.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvZW50ZXJ0YWlubWVudC9lbnRlcnRhaW5tZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/categories/entertainment/entertainment.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/categories/entertainment/entertainment.page.ts ***!
  \****************************************************************/
/*! exports provided: EntertainmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentPage", function() { return EntertainmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EntertainmentPage = class EntertainmentPage {
    constructor() { }
    ngOnInit() {
    }
};
EntertainmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entertainment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entertainment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/entertainment/entertainment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entertainment.page.scss */ "./src/app/categories/entertainment/entertainment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EntertainmentPage);



/***/ })

}]);
//# sourceMappingURL=categories-entertainment-entertainment-module-es2015.js.map