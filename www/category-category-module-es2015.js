(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"primary\" style=\"font-size: medium; font-family: NotoSansTamil-Regular;\">பிரிவுகள்</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-list class=menu_list>\n    <ion-item>\n    </ion-item>\n    <ion-item (click)=\"login()\" color=\"primary\">\n      <div class=\"ion_label\">\n        <ion-label>உள்நுழை</ion-label>\n      </div>\n    </ion-item>\n    <ion-item (click)=\"register()\" color=\"primary\">\n      <div class=\"ion_label\">\n        <ion-label>புதிய பதிவு செய்தல்</ion-label>\n      </div>\n    </ion-item>\n    <ion-item (click)=\"quit()\" color=\"primary\">\n      <div class=\"ion_label\">\n        <ion-label>வெளியேறு</ion-label>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid class=\"ionGridMain\">\n    <!-- <ion-row> -->\n    <ion-col class=ionGrid>\n      <img src=\"../../assets/Images/tamilnadu.png\" (click)=\"tamilnadu()\">\n    </ion-col>\n    <ion-col class=ionGrid>\n      <img src=\"../../assets/Images/India.png\" (click)=\"india()\">\n    </ion-col>\n    <ion-col class=ionGrid>\n      <img src=\"../../assets/Images/world.png\" (click)=\"world()\">\n    </ion-col>\n    <ion-col class=ionGrid>\n      <img src=\"../../assets/Images/Politics.png\" > <!-- (click)=\"politics()\" -->\n    </ion-col>\n    <ion-col class=ionGrid>\n      <img src=\"../../assets/Images/economics.png\" (click)=\"economics()\">\n    </ion-col>\n    <ion-col class=ionGrid>\n      <img src=\"../../assets/Images/technology.png\" >  <!-- (click)=\"technology()\" -->\n    </ion-col>\n    <ion-col class=ionGrid>\n      <img src=\"../../assets/Images/agriculture.png\"> <!-- (click)=\"agri()\" -->\n    </ion-col>\n    <ion-col class=ionGrid>\n      <img src=\"../../assets/Images/sports.png\"> <!-- (click)=\"sports()\" -->\n    </ion-col>\n    <ion-col class=ionGrid>\n      <img src=\"../../assets/Images/entertainment.png\" > <!-- (click)=\"entertainment()\" -->\n    </ion-col>\n    <!-- </ion-row> -->\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/category/category-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "./src/app/category/category.page.ts");




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"],
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/category/category-routing.module.ts");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/category/category.page.ts");







let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"]
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })
], CategoryPageModule);



/***/ }),

/***/ "./src/app/category/category.page.scss":
/*!*********************************************!*\
  !*** ./src/app/category/category.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-family: NotoSansTamil-Regular;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvQzpcXFVzZXJzXFxlbGFtcGFyaXRoaVxcbmV3c2FwcC1uZXcvc3JjXFxhcHBcXGNhdGVnb3J5XFxjYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH0iLCJpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/category/category.page.ts":
/*!*******************************************!*\
  !*** ./src/app/category/category.page.ts ***!
  \*******************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CategoryPage = class CategoryPage {
    constructor(router) {
        this.router = router;
    }
    quit() {
        if (window.confirm("மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?")) {
            navigator["app"].exitApp();
        }
    }
    login() {
        this.router.navigate(['../login']);
    }
    register() {
        this.router.navigate(['../registration']);
    }
    economics() {
        this.router.navigate(['../../economics']);
    }
    entertainment() {
        this.router.navigate(['../../entertainment']);
    }
    tamilnadu() {
        this.router.navigate(['../../tamilnadu']);
    }
    india() {
        this.router.navigate(['../../india']);
    }
    world() {
        this.router.navigate(['../../world']);
    }
    politics() {
        this.router.navigate(['../../politics']);
    }
    technology() {
        this.router.navigate(['../../technology']);
    }
    agri() {
        this.router.navigate(['../../agriculture']);
    }
    sports() {
        this.router.navigate(['../../sports']);
    }
    ngOnInit() {
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.page.scss */ "./src/app/category/category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map