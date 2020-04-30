(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-world-world-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/world/world.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/world/world.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar *ngIf=\"hideMe\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n    <ion-button href=\"/news\">\n      <ion-icon name=\"md-home\" color=\"primary\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title color=\"primary\">சர்வதேசம்</ion-title>\n</ion-toolbar>\n\n<div class=screen>\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" (ionSlideTap)=\"singleTap()\">\n    <ion-slide *ngFor=\"let data of newsType\">\n      <ion-card class=\"ion-no-margin\">\n        <div class=image [style.backgroundImage]=\"'url(' + data.news_pics + ')'\"></div>\n        <div class=\"heading\">\n          {{ data.heading }}\n        </div>\n        <div class=ion_content>\n          <div class=newstype>\n            {{ data.news_type }} / {{data.last_updated | date: 'dd-MM-yyyy'}}\n          </div>\n          <div class=content>\n            {{ data.news_content }}\n          </div>\n        </div>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>");

/***/ }),

/***/ "./src/app/categories/world/world-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/categories/world/world-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: WorldPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldPageRoutingModule", function() { return WorldPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _world_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world.page */ "./src/app/categories/world/world.page.ts");




const routes = [
    {
        path: '',
        component: _world_page__WEBPACK_IMPORTED_MODULE_3__["WorldPage"]
    }
];
let WorldPageRoutingModule = class WorldPageRoutingModule {
};
WorldPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorldPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/world/world.module.ts":
/*!**************************************************!*\
  !*** ./src/app/categories/world/world.module.ts ***!
  \**************************************************/
/*! exports provided: WorldPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldPageModule", function() { return WorldPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _world_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./world-routing.module */ "./src/app/categories/world/world-routing.module.ts");
/* harmony import */ var _world_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./world.page */ "./src/app/categories/world/world.page.ts");







let WorldPageModule = class WorldPageModule {
};
WorldPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _world_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorldPageRoutingModule"]
        ],
        declarations: [_world_page__WEBPACK_IMPORTED_MODULE_6__["WorldPage"]]
    })
], WorldPageModule);



/***/ }),

/***/ "./src/app/categories/world/world.page.scss":
/*!**************************************************!*\
  !*** ./src/app/categories/world/world.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvd29ybGQvd29ybGQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/categories/world/world.page.ts":
/*!************************************************!*\
  !*** ./src/app/categories/world/world.page.ts ***!
  \************************************************/
/*! exports provided: WorldPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldPage", function() { return WorldPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.js");



let WorldPage = class WorldPage {
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
                return entry.news_type === 'உலகம்';
            });
            console.log(this.newsType);
        }, err => {
            console.log("Oops!");
        });
    }
    ngOnInit() {
    }
};
WorldPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
WorldPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-world',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./world.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/world/world.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./world.page.scss */ "./src/app/categories/world/world.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], WorldPage);



/***/ })

}]);
//# sourceMappingURL=categories-world-world-module-es2015.js.map