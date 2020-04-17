(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-ion-split-pane>\r\n  <ion-menu contentId=\"content\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title> Menu </ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\r\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath === p.url\">\r\n            {{ p.title }}\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n</ion-ion-split-pane>\r\n<head>\r\n<link href=\"https://fonts.googleapis.com/css?family=Roboto&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<div class=screen>\r\n<ion-slides pager=\"false\" [options]=\"slideOpts\">\r\n  <ion-slide *ngFor=\"let data of data\">\r\n  <ion-card class=\"ion-no-margin\">\r\n   <!-- <ion-img [src]=\"item.news_pics\"></ion-img> -->\r\n    <div class=image [style.backgroundImage]=\"'url(' + data.news_pics + ')'\"></div>\r\n<div class=\"heading\">\r\n     {{ data.heading }}\r\n</div>\r\n<div class=ion_content>\r\n    <div class=newstype>\r\n     {{ data.news_type }} / {{data.last_updated | date: 'dd-MM-yyyy'}}\r\n    </div>\r\n    <div class=content>\r\n     {{ data.news_content }}\r\n    </div>\r\n    </div>\r\n  </ion-card>\r\n  </ion-slide>\r\n  </ion-slides>\r\n\r\n<!--<ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n<ion-slide *ngFor=\"let data of data.data\">\r\n<ion-card class=\"ion-no-margin\">\r\n  <ion-img [src]=\"data.news_pics\"></ion-img>\r\n<ion-card-content>\r\n  <ion-card-header >\r\n    <ion-card-title>\r\n      <h1> {{ data.heading }} </h1>\r\n    </ion-card-title>\r\n  </ion-card-header>\r\n  <div class=newstype>\r\n    <p> {{ data.news_type }} </p>\r\n  </div>\r\n  <div class=content>\r\n    <p> {{ data.news_content }} </p>\r\n  </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-slide>\r\n</ion-slides>-->\r\n  \r\n<!--\r\n<ion-slide *ngFor=\"let item of data\">\r\n<ion-card>\r\n  <img [src]=\"item.image\">\r\n<ion-card-content>\r\n  <ion-card-header>\r\n    <ion-card-title >\r\n      <h3> {{item.name }} </h3>\r\n    </ion-card-title>\r\n  </ion-card-header>\r\n    <p> {{ item.company }} </p>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-slide>\r\n\r\n<ion-slide>\r\n<ion-card>\r\n  <img [src]=\"item.image\">\r\n<ion-card-content>\r\n  <ion-card-header>\r\n    <ion-card-title>\r\n      <h3> {{ item.name }} </h3>\r\n    </ion-card-title>\r\n  </ion-card-header>\r\n    <p> {{ item.company }} </p>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-slide>-->\r\n\r\n<!--<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button>\r\n    <ion-icon name=\"share\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"top\">\r\n    <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n  </ion-fab-list>\r\n  <ion-fab-list side=\"bottom\">\r\n    <ion-fab-button><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\r\n  </ion-fab-list>\r\n  <ion-fab-list side=\"start\">\r\n    <ion-fab-button><ion-icon name=\"logo-instagram\"></ion-icon></ion-fab-button>\r\n  </ion-fab-list>\r\n  <ion-fab-list side=\"end\">\r\n    <ion-fab-button><ion-icon name=\"logo-twitter\"></ion-icon></ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>-->\r\n\r\n<ion-tab-bar slot=\"bottom\">\r\n  <ion-tab-button href=\"/tabs\">\r\n    <ion-icon name=\"grid\"></ion-icon>\r\n  </ion-tab-button>\r\n  <ion-tab-button href=\"/share\">\r\n    <ion-icon name=\"share\"></ion-icon>\r\n  </ion-tab-button>\r\n  <ion-tab-button href=\"/bookmark\">\r\n    <ion-icon name=\"bookmark\"></ion-icon>\r\n  </ion-tab-button>\r\n</ion-tab-bar>\r\n\r\n<router-outlet main></router-outlet>");

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/map.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm2015/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/map.js ***!
  \***********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/news/news-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/news/news-routing.module.ts ***!
  \*********************************************/
/*! exports provided: NewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function() { return NewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.page */ "./src/app/news/news.page.ts");




const routes = [
    {
        path: 'news',
        component: _news_page__WEBPACK_IMPORTED_MODULE_3__["NewsPage"],
        children: [
            {
                path: 'news',
                children: [
                    {
                        path: 'category',
                        loadChildren: () => Promise.all(/*! import() | category-category-module */[__webpack_require__.e("default~category-category-module~postdetails-postdetails-module"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ../category/category.module */ "./src/app/category/category.module.ts")).then(m => m.CategoryPageModule)
                    },
                    {
                        path: 'login',
                        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginPageModule)
                    },
                    {
                        path: 'registration',
                        loadChildren: () => Promise.all(/*! import() | registration-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("registration-registration-module")]).then(__webpack_require__.bind(null, /*! ../registration/registration.module */ "./src/app/registration/registration.module.ts")).then(m => m.RegistrationPageModule)
                    },
                    {
                        path: 'about',
                        loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ../about/about.module */ "./src/app/about/about.module.ts")).then(m => m.AboutPageModule)
                    }
                ]
            },
            {
                path: 'tabs',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ../tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(m => m.TabsPageModule)
                    }
                ]
            },
            {
                path: 'share',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | share-share-module */ "share-share-module").then(__webpack_require__.bind(null, /*! ../share/share.module */ "./src/app/share/share.module.ts")).then(m => m.SharePageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/news',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/news',
        pathMatch: 'full'
    }
];
let NewsPageRoutingModule = class NewsPageRoutingModule {
};
NewsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewsPageRoutingModule);



/***/ }),

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-routing.module */ "./src/app/news/news-routing.module.ts");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/news/news.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.js");










const routes = [
    {
        path: 'news',
        component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"],
        children: [
            {
                path: 'category',
                loadChildren: () => Promise.all(/*! import() | category-category-module */[__webpack_require__.e("default~category-category-module~postdetails-postdetails-module"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ../category/category.module */ "./src/app/category/category.module.ts")).then(m => m.CategoryPageModule)
            },
            {
                path: 'login',
                loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginPageModule)
            },
            {
                path: 'registration',
                loadChildren: () => Promise.all(/*! import() | registration-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("registration-registration-module")]).then(__webpack_require__.bind(null, /*! ../registration/registration.module */ "./src/app/registration/registration.module.ts")).then(m => m.RegistrationPageModule)
            },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ../about/about.module */ "./src/app/about/about.module.ts")).then(m => m.AboutPageModule)
            },
            {
                path: 'share',
                loadChildren: () => __webpack_require__.e(/*! import() | share-share-module */ "share-share-module").then(__webpack_require__.bind(null, /*! ../share/share.module */ "./src/app/share/share.module.ts")).then(m => m.SharePageModule)
            },
            {
                path: 'tabs',
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ../tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(m => m.TabsPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/news/news'
    }
];
let NewsPageModule = class NewsPageModule {
};
NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _news_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageRoutingModule"]
        ],
        declarations: [
            _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
        ],
        entryComponents: [
            _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], NewsPageModule);



/***/ }),

/***/ "./src/app/news/news.page.scss":
/*!*************************************!*\
  !*** ./src/app/news/news.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: notoSansTamil;\n  src: url(\"/src/assets/NotoSansTamil-Regular.ttf\");\n}\n@media (max-width: 820px) {\n  page-home .mobile-fab {\n    display: none;\n  }\n}\n@media (min-width: 820px) {\n  page-home .web-fab {\n    display: none;\n  }\n}\n.header-image {\n  height: 40vh;\n}\nion-button {\n  --color: #383a3e;\n}\nion-tab-button {\n  --background: #eff7f8;\n  --color: #5bdff6 ;\n}\nion-tab-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\nion-card-title {\n  text-align: left;\n  width: 90%;\n  margin: 12px 5% 6px;\n  font-size: 1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  opacity: 0.9;\n  line-height: 1.3rem;\n}\n.content {\n  text-align: left;\n  Width: 90%;\n  margin: 0;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.ion_content {\n  width: 100%;\n  margin: 0px 5%;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.newstype {\n  text-align: start;\n  font-size: 0.75rem;\n  color: #c7c7c7;\n  font-weight: 500;\n  font-family: Roboto;\n  font-style: bold;\n  margin-bottom: 7px;\n}\nion-slides {\n  height: 100%;\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.screen {\n  height: 100%;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  -webkit-transition: -webkit-transform 0.2s ease 0s;\n  transition: -webkit-transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;\n  direction: ltr;\n  display: -webkit-box;\n  display: flex;\n  will-change: transform;\n  -webkit-transform: translate(0%, 0px);\n          transform: translate(0%, 0px);\n  margin: 0 auto;\n}\nion-responsive {\n  height: 500px;\n  width: 250px;\n}\nion-card {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.image {\n  margin: 0;\n  width: 100%;\n  height: 42vh;\n  background-position: 50%;\n  background-color: #ccc;\n  background-size: cover;\n}\n.heading {\n  width: 90%;\n  margin: 12px 5% 0px;\n  font-size: 1.1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 400;\n  opacity: 0.9;\n  line-height: 1.5rem;\n  text-align: left;\n}\n.active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9DOlxcVXNlcnNcXFNpdmFrdW1hclxcRG9jdW1lbnRzXFxuZXdzYXBwL3NyY1xcYXBwXFxuZXdzXFxuZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRFNJO0VBQ0k7SUFDSSxhQUFBO0VDUFY7QUFDRjtBRFVJO0VBQ0k7SUFDSSxhQUFBO0VDUlY7QUFDRjtBRFlFO0VBQ0UsWUFBQTtBQ1RKO0FEWUU7RUFDRSxnQkFBQTtBQ1RKO0FEWUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FDVEo7QURZRTtFQUVFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDVko7QURhRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEYUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEYUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNWSjtBRGFFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEYUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNWSjtBRGFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUFBLDhCQUFBO1VBQUEsMkJBQUE7RUFDQSxrREFBQTtFQUFBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSxrRUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxjQUFBO0FDVko7QURjRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDWEo7QURlRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNaSjtBRGVFO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDWkY7QURlRTtFQUNBLFVBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZUU7RUFDRSwrQ0FBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG5vdG9TYW5zVGFtaWw7XHJcbiAgICBzcmM6IHVybCgnL3NyYy9hc3NldHMvTm90b1NhbnNUYW1pbC1SZWd1bGFyLnR0ZicpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBwYWdlLWhvbWUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgICAgICAubW9iaWxlLWZhYiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XHJcbiAgICAgICAgLndlYi1mYWIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogIzM4M2EzZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWZmN2Y4O1xyXG4gICAgLS1jb2xvcjogIzViZGZmNiA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10YWItYmFyIHtcclxuICAgIC8vIFRyYW5zbHVjZW50IHBvc2l0aW9uaW5nIGVmZmVjdFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTJweCA1JSA2cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzE2MTYxNjtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBXaWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICM1ODU4NTg7XHJcbiAgICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gIH1cclxuICBcclxuICAuaW9uX2NvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4IDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICM1ODU4NTg7XHJcbiAgICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gIH1cclxuICBcclxuICAubmV3c3R5cGUge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIGNvbG9yOiAjYzdjN2M3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIH1cclxuICBcclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSAwcztcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMHB4KTsgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLXJlc3BvbnNpdmUge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgIH1cclxuICBcclxuICAuaW1hZ2V7XHJcbiAgbWFyZ2luOjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjQydmg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRpbmd7XHJcbiAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTJweCA1JSAwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjMTYxNjE2O1xyXG4gICAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZS1pdGVtIHtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICAiLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG5vdG9TYW5zVGFtaWw7XG4gIHNyYzogdXJsKFwiL3NyYy9hc3NldHMvTm90b1NhbnNUYW1pbC1SZWd1bGFyLnR0ZlwiKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xuICBwYWdlLWhvbWUgLm1vYmlsZS1mYWIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MjBweCkge1xuICBwYWdlLWhvbWUgLndlYi1mYWIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmhlYWRlci1pbWFnZSB7XG4gIGhlaWdodDogNDB2aDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICMzODNhM2U7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWZmN2Y4O1xuICAtLWNvbG9yOiAjNWJkZmY2IDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxMnB4IDUlIDZweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzE2MTYxNjtcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcbiAgb3BhY2l0eTogMC45O1xuICBsaW5lLWhlaWdodDogMS4zcmVtO1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIFdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzU4NTg1ODtcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uaW9uX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggNSU7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM1ODU4NTg7XG4gIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLm5ld3N0eXBlIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICNjN2M3Yzc7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uc2NyZWVuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlIDBzO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24tcmVzcG9uc2l2ZSB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuaW9uLWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWFnZSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDJ2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaGVhZGluZyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMTJweCA1JSAwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzE2MTYxNjtcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3BhY2l0eTogMC45O1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlLWl0ZW0ge1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/news/news.page.ts":
/*!***********************************!*\
  !*** ./src/app/news/news.page.ts ***!
  \***********************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let NewsPage = class NewsPage {
    constructor(http, router, navCtrl) {
        this.http = http;
        this.router = router;
        this.navCtrl = navCtrl;
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
        this.pages = [
            {
                title: 'Category Page',
                url: 'news/category'
            },
            {
                title: 'Login Page',
                url: 'news/login'
            },
            {
                title: 'Registration Page',
                url: 'news/registration'
            },
            {
                title: 'About Page',
                url: 'news/about'
            }
        ];
        this.selectedPath = '';
        this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
            this.data = data.data;
        }, err => {
            console.log("Oops!");
        });
        this.router.events.subscribe((event) => {
            this.selectedPath = event.url;
        });
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    // ionViewWillEnter() {
    //   this.tabBarElement.style.display = "flex";
    // }
    ionViewWillLeave() {
        this.tabBarElement.style.display = "flex";
    }
};
NewsPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.page.scss */ "./src/app/news/news.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], NewsPage);



/***/ })

}]);
//# sourceMappingURL=news-news-module-es2015.js.map