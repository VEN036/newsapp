(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-sports-sports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/sports/sports.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/sports/sports.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>sports</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/categories/sports/sports-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/categories/sports/sports-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPageRoutingModule", function() { return SportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sports.page */ "./src/app/categories/sports/sports.page.ts");




const routes = [
    {
        path: '',
        component: _sports_page__WEBPACK_IMPORTED_MODULE_3__["SportsPage"]
    }
];
let SportsPageRoutingModule = class SportsPageRoutingModule {
};
SportsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SportsPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/sports/sports.module.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/sports/sports.module.ts ***!
  \****************************************************/
/*! exports provided: SportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPageModule", function() { return SportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sports-routing.module */ "./src/app/categories/sports/sports-routing.module.ts");
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sports.page */ "./src/app/categories/sports/sports.page.ts");







let SportsPageModule = class SportsPageModule {
};
SportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sports_routing_module__WEBPACK_IMPORTED_MODULE_5__["SportsPageRoutingModule"]
        ],
        declarations: [_sports_page__WEBPACK_IMPORTED_MODULE_6__["SportsPage"]]
    })
], SportsPageModule);



/***/ }),

/***/ "./src/app/categories/sports/sports.page.scss":
/*!****************************************************!*\
  !*** ./src/app/categories/sports/sports.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvc3BvcnRzL3Nwb3J0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/categories/sports/sports.page.ts":
/*!**************************************************!*\
  !*** ./src/app/categories/sports/sports.page.ts ***!
  \**************************************************/
/*! exports provided: SportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPage", function() { return SportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SportsPage = class SportsPage {
    constructor() { }
    ngOnInit() {
    }
};
SportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sports.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/sports/sports.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sports.page.scss */ "./src/app/categories/sports/sports.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SportsPage);



/***/ })

}]);
//# sourceMappingURL=categories-sports-sports-module-es2015.js.map