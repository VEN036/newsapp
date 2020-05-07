(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n\r\n<!-- <ion-ion-split-pane> -->\r\n<ion-toolbar *ngIf=\"hideMe\">\r\n  <ion-buttons slot=\"start\" (click)=\"menuClick()\">\r\n    <!-- <ion-buttons > -->\r\n      <ion-menu-button auto-hide=\"false\" color=\"primary\"></ion-menu-button>\r\n    <!-- </ion-buttons> -->\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button href=\"/news\">\r\n      <ion-icon name=\"ios-refresh\" color=\"primary\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title color=\"primary\">மெட்ராஸ் டெய்லி</ion-title>\r\n</ion-toolbar>\r\n\r\n<!-- <ion-menu contentId=\"content\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title> பட்டியல் </ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-item>\r\n        <ion-label></ion-label>\r\n      </ion-item>\r\n      <ion-list class=menu_list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\r\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath === p.url\" color=\"primary\">\r\n            {{ p.title }}\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-item (click)=\"quit()\" color=\"primary\">\r\n          <ion-label >வெளியேற</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu> -->\r\n<ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n\r\n<!-- Tab bar code (footer)-Start -->\r\n\r\n<!-- <ion-tab-bar slot=\"bottom\" translucent=\"true\" *ngIf=\"hideMe\">\r\n    <ion-tab-button (click)=\"shareNews()\">\r\n      <ion-icon name=\"md-share\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"primary\">Share</ion-label>\r\n    </ion-tab-button> -->\r\n\r\n<!--    <ion-tab-button href=\"/login\">\r\n      <ion-icon name=\"log-in\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"primary\">Login</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button href=\"/registration\">\r\n      <ion-icon name=\"person-add\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"primary\">Signup</ion-label>\r\n  </ion-tab-button>\r\n   <ion-tab-button href=\"/news\">\r\n      <ion-icon name=\"home\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"primary\">Home</ion-label>\r\n    </ion-tab-button>\r\n    \r\n     <ion-tab-button href=\"/bookmark\">\r\n    <ion-icon name=\"bookmark\"></ion-icon>\r\n  </ion-tab-button>\r\n  </ion-tab-bar> -->\r\n\r\n<!-- Tab bar code (footer)-End -->\r\n\r\n<!-- </ion-ion-split-pane> -->\r\n\r\n<div class=screen>\r\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" (ionSlideTap)=\"singleTap()\">\r\n    <ion-slide *ngFor=\"let data of data\">\r\n      <ion-card class=\"ion-no-margin\">\r\n        <div class=image [style.backgroundImage]=\"'url(' + data.news_pics + ')'\"></div>\r\n        <div class=\"heading\">\r\n          {{ data.heading }}\r\n        </div>\r\n        <div class=ion_content>\r\n          <div class=newstype>\r\n            {{ data.news_type }} / {{data.last_updated | date: 'dd-MM-yyyy'}}\r\n          </div>\r\n          <div class=content>\r\n            {{ data.news_content }}\r\n          </div>\r\n        </div>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>");

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
                        loadChildren: () => __webpack_require__.e(/*! import() | category-category-module */ "category-category-module").then(__webpack_require__.bind(null, /*! ../category/category.module */ "./src/app/category/category.module.ts")).then(m => m.CategoryPageModule)
                    },
                    {
                        path: 'login',
                        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginPageModule)
                    },
                    {
                        path: 'registration',
                        loadChildren: () => Promise.all(/*! import() | registration-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("registration-registration-module")]).then(__webpack_require__.bind(null, /*! ../registration/registration.module */ "./src/app/registration/registration.module.ts")).then(m => m.RegistrationPageModule)
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
                loadChildren: () => __webpack_require__.e(/*! import() | category-category-module */ "category-category-module").then(__webpack_require__.bind(null, /*! ../category/category.module */ "./src/app/category/category.module.ts")).then(m => m.CategoryPageModule)
            },
            {
                path: 'login',
                loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginPageModule)
            },
            {
                path: 'registration',
                loadChildren: () => Promise.all(/*! import() | registration-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("registration-registration-module")]).then(__webpack_require__.bind(null, /*! ../registration/registration.module */ "./src/app/registration/registration.module.ts")).then(m => m.RegistrationPageModule)
            },
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
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: notoSansTamil;\n  src: url(\"/src/assets/NotoSansTamil-Regular.ttf\");\n}\n@media (max-width: 820px) {\n  page-home .mobile-fab {\n    display: none;\n  }\n}\n@media (min-width: 820px) {\n  page-home .web-fab {\n    display: none;\n  }\n}\n.header-image {\n  height: 40vh;\n}\nion-button {\n  --color: #383a3e;\n}\nion-tab-button {\n  --background: #eff7f8;\n  --color: #5bdff6 ;\n}\nion-tab-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n.hideMe {\n  -webkit-transition: -webkit-transform 0.5s ease-in;\n  transition: -webkit-transform 0.5s ease-in;\n  transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;\n}\nion-toolbar {\n  opacity: 80%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\nion-card-title {\n  text-align: left;\n  width: 90%;\n  margin: 12px 5% 6px;\n  font-size: 1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  opacity: 0.9;\n  line-height: 1.3rem;\n}\n.content {\n  text-align: left;\n  Width: 90%;\n  margin: 0;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.ion_content {\n  width: 100%;\n  margin: 0px 5%;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.newstype {\n  text-align: start;\n  font-size: 0.75rem;\n  color: #c7c7c7;\n  font-weight: 500;\n  font-family: Roboto;\n  font-style: bold;\n  margin-bottom: 7px;\n}\nion-slides {\n  height: 100%;\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.screen {\n  height: 100%;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  -webkit-transition: -webkit-transform 0.2s ease 0s;\n  transition: -webkit-transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;\n  direction: ltr;\n  display: -webkit-box;\n  display: flex;\n  will-change: transform;\n  -webkit-transform: translate(0%, 0px);\n          transform: translate(0%, 0px);\n  margin: 0 auto;\n  z-index: 0;\n}\nion-responsive {\n  height: 500px;\n  width: 250px;\n}\nion-card {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\nion-title {\n  text-align: center;\n}\n.image {\n  margin: 0;\n  width: 100%;\n  height: 38vh;\n  background-position: 50%;\n  background-color: #ccc;\n  background-size: cover;\n}\n.heading {\n  width: 90%;\n  margin: 12px 5% 0px;\n  font-size: 1.1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 400;\n  opacity: 0.9;\n  line-height: 1.5rem;\n  text-align: left;\n}\n.active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9DOlxcVXNlcnNcXFNpdmFrdW1hclxcRG9jdW1lbnRzXFxuZXdzYXBwLWxpdmVcXG5ld3NhcHBfbGl2ZS9zcmNcXGFwcFxcbmV3c1xcbmV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURTSTtFQUNJO0lBQ0ksYUFBQTtFQ1BWO0FBQ0Y7QURVSTtFQUNJO0lBQ0ksYUFBQTtFQ1JWO0FBQ0Y7QURZRTtFQUNFLFlBQUE7QUNUSjtBRFlFO0VBQ0UsZ0JBQUE7QUNUSjtBRFlFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ1RKO0FEWUU7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEYUU7RUFDRSxrREFBQTtFQUFBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSxrRUFBQTtBQ1ZKO0FEY0c7RUFDQyxZQUFBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ1hMO0FEZUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNaSjtBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNaSjtBRGVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDWko7QURlRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDWko7QURlRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0VBQ0Esa0RBQUE7RUFBQSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsa0VBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNaSjtBRGdCRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDYko7QURpQkU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZEo7QURpQkc7RUFDRSxrQkFBQTtBQ2RMO0FEbUJFO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDaEJGO0FEbUJFO0VBQ0EsVUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDaEJKO0FEbUJFO0VBQ0UsK0NBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbm90b1NhbnNUYW1pbDtcclxuICAgIHNyYzogdXJsKCcvc3JjL2Fzc2V0cy9Ob3RvU2Fuc1RhbWlsLVJlZ3VsYXIudHRmJyk7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHBhZ2UtaG9tZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgICAgIC5tb2JpbGUtZmFiIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcclxuICAgICAgICAud2ViLWZhYiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWltYWdlIHtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjMzgzYTNlO1xyXG4gIH1cclxuICBcclxuICBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlZmY3Zjg7XHJcbiAgICAtLWNvbG9yOiAjNWJkZmY2IDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRhYi1iYXIge1xyXG4gICAgLy8gVHJhbnNsdWNlbnQgcG9zaXRpb25pbmcgZWZmZWN0XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaGlkZU1le1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICB9XHJcblxyXG4gICBpb24tdG9vbGJhcntcclxuICAgIG9wYWNpdHk6IDgwJTtcclxuICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICB0b3A6MDtcclxuICAgICBsZWZ0OjA7XHJcbiAgICAgXHJcbiAgIH1cclxuICBcclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTJweCA1JSA2cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzE2MTYxNjtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBXaWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICM1ODU4NTg7XHJcbiAgICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gIH1cclxuICBcclxuICAuaW9uX2NvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4IDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICM1ODU4NTg7XHJcbiAgICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gIH1cclxuICBcclxuICAubmV3c3R5cGUge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIGNvbG9yOiAjYzdjN2M3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIH1cclxuICBcclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSAwcztcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMHB4KTsgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6MFxyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tcmVzcG9uc2l2ZSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgfVxyXG5cclxuICAgaW9uLXRpdGxle1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG5cclxuXHJcbiAgXHJcbiAgLmltYWdle1xyXG4gIG1hcmdpbjowO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDozOHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkaW5ne1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDEycHggNSUgMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogIzE2MTYxNjtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUtaXRlbSB7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBub3RvU2Fuc1RhbWlsO1xuICBzcmM6IHVybChcIi9zcmMvYXNzZXRzL05vdG9TYW5zVGFtaWwtUmVndWxhci50dGZcIik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgcGFnZS1ob21lIC5tb2JpbGUtZmFiIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgcGFnZS1ob21lIC53ZWItZmFiIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICBoZWlnaHQ6IDQwdmg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWNvbG9yOiAjMzgzYTNlO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2VmZjdmODtcbiAgLS1jb2xvcjogIzViZGZmNiA7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGlkZU1lIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBvcGFjaXR5OiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMTJweCA1JSA2cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcbn1cblxuLmNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBXaWR0aDogOTAlO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM1ODU4NTg7XG4gIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmlvbl9jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDUlO1xuICBsaW5lLWhlaWdodDogMS4zNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5uZXdzdHlwZSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjYzdjN2M3O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnNjcmVlbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSAwcztcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMDtcbn1cblxuaW9uLXJlc3BvbnNpdmUge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzh2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaGVhZGluZyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMTJweCA1JSAwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzE2MTYxNjtcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3BhY2l0eTogMC45O1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aXZlLWl0ZW0ge1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

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
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/ngx/index.js");








let NewsPage = class NewsPage {
    constructor(http, router, platform, socialSharing, screenshot) {
        this.http = http;
        this.router = router;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
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
        this.hideMe = false;
        this.pages = [
            // {
            //   title: 'Category',
            //   url: 'news/category'
            // },
            {
                title: 'உள்நுழைக',
                url: '../login'
            },
            {
                // title: 'பதிவு',
                url: '../category'
            },
        ];
        this.selectedPath = '';
        this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
            if (this.constructor.name == "NewsPage") {
                if (window.confirm("மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?")) {
                    navigator["app"].exitApp();
                }
            }
            else {
            }
        });
        this.news_data();
        // this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
        //   var data = data.data;
        //   var newsType = JSON.parse(data).filter(function (entry){
        //     return entry.news_type === 'பொருளாதாரம்';
        //   })
        //   console.log(newsType);
        // },
        //   err => {
        //     console.log("Oops!")
        //   });
        // JSON.parse(this.url).filter(function(entry){
        //   return entry.news_type === 'பொருளாதாரம்';
        // });
        this.router.events.subscribe((event) => {
            this.selectedPath = event.url;
        });
    }
    singleTap() {
        this.hideMe = !this.hideMe;
        console.log("Single tap operation done");
    }
    quit() {
        if (window.confirm("மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?")) {
            navigator["app"].exitApp();
        }
    }
    news_data() {
        this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
            this.data = data.data;
            // this.newsType = this.data.filter(function (entry){
            //     return entry.news_type === 'பொருளாதாரம்';
            //   })
            console.log(this.newsType);
        }, err => {
            console.log("Oops!");
        });
    }
    menuClick() {
        this.router.navigate(['../category']);
    }
};
NewsPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__["Screenshot"] }
];
NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.page.scss */ "./src/app/news/news.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"], _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__["Screenshot"]])
], NewsPage);



/***/ })

}]);
//# sourceMappingURL=news-news-module-es2015.js.map