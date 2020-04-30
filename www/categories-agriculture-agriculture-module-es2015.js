(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-agriculture-agriculture-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/agriculture/agriculture.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/agriculture/agriculture.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>agriculture</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/categories/agriculture/agriculture-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/categories/agriculture/agriculture-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AgriculturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgriculturePageRoutingModule", function() { return AgriculturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agriculture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agriculture.page */ "./src/app/categories/agriculture/agriculture.page.ts");




const routes = [
    {
        path: '',
        component: _agriculture_page__WEBPACK_IMPORTED_MODULE_3__["AgriculturePage"]
    }
];
let AgriculturePageRoutingModule = class AgriculturePageRoutingModule {
};
AgriculturePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgriculturePageRoutingModule);



/***/ }),

/***/ "./src/app/categories/agriculture/agriculture.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/categories/agriculture/agriculture.module.ts ***!
  \**************************************************************/
/*! exports provided: AgriculturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgriculturePageModule", function() { return AgriculturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agriculture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agriculture-routing.module */ "./src/app/categories/agriculture/agriculture-routing.module.ts");
/* harmony import */ var _agriculture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agriculture.page */ "./src/app/categories/agriculture/agriculture.page.ts");







let AgriculturePageModule = class AgriculturePageModule {
};
AgriculturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agriculture_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgriculturePageRoutingModule"]
        ],
        declarations: [_agriculture_page__WEBPACK_IMPORTED_MODULE_6__["AgriculturePage"]]
    })
], AgriculturePageModule);



/***/ }),

/***/ "./src/app/categories/agriculture/agriculture.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/categories/agriculture/agriculture.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvYWdyaWN1bHR1cmUvYWdyaWN1bHR1cmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/categories/agriculture/agriculture.page.ts":
/*!************************************************************!*\
  !*** ./src/app/categories/agriculture/agriculture.page.ts ***!
  \************************************************************/
/*! exports provided: AgriculturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgriculturePage", function() { return AgriculturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgriculturePage = class AgriculturePage {
    constructor() { }
    ngOnInit() {
    }
};
AgriculturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agriculture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agriculture.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/agriculture/agriculture.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agriculture.page.scss */ "./src/app/categories/agriculture/agriculture.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AgriculturePage);



/***/ })

}]);
//# sourceMappingURL=categories-agriculture-agriculture-module-es2015.js.map