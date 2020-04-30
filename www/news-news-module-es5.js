function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsNewsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto&display=swap\" rel=\"stylesheet\">\n</head>\n\n<!-- <ion-ion-split-pane> -->\n<ion-toolbar *ngIf=\"hideMe\">\n  <ion-buttons slot=\"start\" (click)=\"menuClick()\">\n    <!-- <ion-buttons > -->\n      <ion-menu-button auto-hide=\"false\" color=\"primary\"></ion-menu-button>\n    <!-- </ion-buttons> -->\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n    <ion-button href=\"/news\">\n      <ion-icon name=\"ios-refresh\" color=\"primary\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title color=\"primary\">மெட்ராஸ் டெய்லி</ion-title>\n</ion-toolbar>\n\n<!-- <ion-menu contentId=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title> பட்டியல் </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-item>\n        <ion-label></ion-label>\n      </ion-item>\n      <ion-list class=menu_list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath === p.url\" color=\"primary\">\n            {{ p.title }}\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-item (click)=\"quit()\" color=\"primary\">\n          <ion-label >வெளியேற</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu> -->\n<ion-router-outlet id=\"content\" main></ion-router-outlet>\n\n<!-- Tab bar code (footer)-Start -->\n\n<!-- <ion-tab-bar slot=\"bottom\" translucent=\"true\" *ngIf=\"hideMe\">\n    <ion-tab-button (click)=\"shareNews()\">\n      <ion-icon name=\"md-share\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">Share</ion-label>\n    </ion-tab-button> -->\n\n<!--    <ion-tab-button href=\"/login\">\n      <ion-icon name=\"log-in\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">Login</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button href=\"/registration\">\n      <ion-icon name=\"person-add\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">Signup</ion-label>\n  </ion-tab-button>\n   <ion-tab-button href=\"/news\">\n      <ion-icon name=\"home\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">Home</ion-label>\n    </ion-tab-button>\n    \n     <ion-tab-button href=\"/bookmark\">\n    <ion-icon name=\"bookmark\"></ion-icon>\n  </ion-tab-button>\n  </ion-tab-bar> -->\n\n<!-- Tab bar code (footer)-End -->\n\n<!-- </ion-ion-split-pane> -->\n\n<div class=screen>\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" (ionSlideTap)=\"singleTap()\">\n    <ion-slide *ngFor=\"let data of data\">\n      <ion-card class=\"ion-no-margin\">\n        <div class=image [style.backgroundImage]=\"'url(' + data.news_pics + ')'\"></div>\n        <div class=\"heading\">\n          {{ data.heading }}\n        </div>\n        <div class=ion_content>\n          <div class=newstype>\n            {{ data.news_type }} / {{data.last_updated | date: 'dd-MM-yyyy'}}\n          </div>\n          <div class=content>\n            {{ data.news_content }}\n          </div>\n        </div>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>";
    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/add/operator/map.js":
  /*!***************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/add/operator/map.js ***!
    \***************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddOperatorMapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../operator/map */
    "./node_modules/rxjs-compat/_esm2015/operator/map.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"]; //# sourceMappingURL=map.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/operator/map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/operator/map.js ***!
    \***********************************************************/

  /*! exports provided: map */

  /***/
  function node_modulesRxjsCompat_esm2015OperatorMapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "map", function () {
      return map;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function map(project, thisArg) {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
    } //# sourceMappingURL=map.js.map

    /***/

  },

  /***/
  "./src/app/news/news-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/news/news-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: NewsPageRoutingModule */

  /***/
  function srcAppNewsNewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function () {
      return NewsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./news.page */
    "./src/app/news/news.page.ts");

    var routes = [{
      path: 'news',
      component: _news_page__WEBPACK_IMPORTED_MODULE_3__["NewsPage"],
      children: [{
        path: 'news',
        children: [{
          path: 'category',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | category-category-module */
            "category-category-module").then(__webpack_require__.bind(null,
            /*! ../category/category.module */
            "./src/app/category/category.module.ts")).then(function (m) {
              return m.CategoryPageModule;
            });
          }
        }, {
          path: 'login',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | login-login-module */
            [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
            /*! ../login/login.module */
            "./src/app/login/login.module.ts")).then(function (m) {
              return m.LoginPageModule;
            });
          }
        }, {
          path: 'registration',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | registration-registration-module */
            [__webpack_require__.e("common"), __webpack_require__.e("registration-registration-module")]).then(__webpack_require__.bind(null,
            /*! ../registration/registration.module */
            "./src/app/registration/registration.module.ts")).then(function (m) {
              return m.RegistrationPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/news',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/news',
      pathMatch: 'full'
    }];

    var NewsPageRoutingModule = function NewsPageRoutingModule() {
      _classCallCheck(this, NewsPageRoutingModule);
    };

    NewsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/news/news.module.ts":
  /*!*************************************!*\
    !*** ./src/app/news/news.module.ts ***!
    \*************************************/

  /*! exports provided: NewsPageModule */

  /***/
  function srcAppNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
      return NewsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./news-routing.module */
    "./src/app/news/news-routing.module.ts");
    /* harmony import */


    var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./news.page */
    "./src/app/news/news.page.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/@angular/http.js");

    var routes = [{
      path: 'news',
      component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"],
      children: [{
        path: 'category',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | category-category-module */
          "category-category-module").then(__webpack_require__.bind(null,
          /*! ../category/category.module */
          "./src/app/category/category.module.ts")).then(function (m) {
            return m.CategoryPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ../login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'registration',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | registration-registration-module */
          [__webpack_require__.e("common"), __webpack_require__.e("registration-registration-module")]).then(__webpack_require__.bind(null,
          /*! ../registration/registration.module */
          "./src/app/registration/registration.module.ts")).then(function (m) {
            return m.RegistrationPageModule;
          });
        }
      }]
    }, {
      path: '',
      redirectTo: '/news/news'
    }];

    var NewsPageModule = function NewsPageModule() {
      _classCallCheck(this, NewsPageModule);
    };

    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageRoutingModule"]],
      declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]],
      entryComponents: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], NewsPageModule);
    /***/
  },

  /***/
  "./src/app/news/news.page.scss":
  /*!*************************************!*\
    !*** ./src/app/news/news.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsNewsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: notoSansTamil;\n  src: url(\"/src/assets/NotoSansTamil-Regular.ttf\");\n}\n@media (max-width: 820px) {\n  page-home .mobile-fab {\n    display: none;\n  }\n}\n@media (min-width: 820px) {\n  page-home .web-fab {\n    display: none;\n  }\n}\n.header-image {\n  height: 40vh;\n}\nion-button {\n  --color: #383a3e;\n}\nion-tab-button {\n  --background: #eff7f8;\n  --color: #5bdff6 ;\n}\nion-tab-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n.hideMe {\n  -webkit-transition: -webkit-transform 0.5s ease-in;\n  transition: -webkit-transform 0.5s ease-in;\n  transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;\n}\nion-toolbar {\n  opacity: 80%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\nion-card-title {\n  text-align: left;\n  width: 90%;\n  margin: 12px 5% 6px;\n  font-size: 1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  opacity: 0.9;\n  line-height: 1.3rem;\n}\n.content {\n  text-align: left;\n  Width: 90%;\n  margin: 0;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.ion_content {\n  width: 100%;\n  margin: 0px 5%;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.newstype {\n  text-align: start;\n  font-size: 0.75rem;\n  color: #c7c7c7;\n  font-weight: 500;\n  font-family: Roboto;\n  font-style: bold;\n  margin-bottom: 7px;\n}\nion-slides {\n  height: 100%;\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.screen {\n  height: 100%;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  -webkit-transition: -webkit-transform 0.2s ease 0s;\n  transition: -webkit-transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;\n  direction: ltr;\n  display: -webkit-box;\n  display: flex;\n  will-change: transform;\n  -webkit-transform: translate(0%, 0px);\n          transform: translate(0%, 0px);\n  margin: 0 auto;\n  z-index: 0;\n}\nion-responsive {\n  height: 500px;\n  width: 250px;\n}\nion-card {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\nion-title {\n  text-align: center;\n}\n.image {\n  margin: 0;\n  width: 100%;\n  height: 38vh;\n  background-position: 50%;\n  background-color: #ccc;\n  background-size: cover;\n}\n.heading {\n  width: 90%;\n  margin: 12px 5% 0px;\n  font-size: 1.1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 400;\n  opacity: 0.9;\n  line-height: 1.5rem;\n  text-align: left;\n}\n.active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9DOlxcVXNlcnNcXGVsYW1wYXJpdGhpXFxuZXdzYXBwLW5ldy9zcmNcXGFwcFxcbmV3c1xcbmV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURTSTtFQUNJO0lBQ0ksYUFBQTtFQ1BWO0FBQ0Y7QURVSTtFQUNJO0lBQ0ksYUFBQTtFQ1JWO0FBQ0Y7QURZRTtFQUNFLFlBQUE7QUNUSjtBRFlFO0VBQ0UsZ0JBQUE7QUNUSjtBRFlFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ1RKO0FEWUU7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEYUU7RUFDRSxrREFBQTtFQUFBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSxrRUFBQTtBQ1ZKO0FEY0c7RUFDQyxZQUFBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ1hMO0FEZUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNaSjtBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNaSjtBRGVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDWko7QURlRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDWko7QURlRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0VBQ0Esa0RBQUE7RUFBQSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsa0VBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNaSjtBRGdCRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDYko7QURpQkU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZEo7QURpQkc7RUFDRSxrQkFBQTtBQ2RMO0FEbUJFO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDaEJGO0FEbUJFO0VBQ0EsVUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDaEJKO0FEbUJFO0VBQ0UsK0NBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG5vdG9TYW5zVGFtaWw7XG4gICAgc3JjOiB1cmwoJy9zcmMvYXNzZXRzL05vdG9TYW5zVGFtaWwtUmVndWxhci50dGYnKTtcbiAgXG4gIH1cbiAgXG4gIFxuICBwYWdlLWhvbWUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICBcbiAgICB9XG4gIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgICAgICAubW9iaWxlLWZhYiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgICAgICAgLndlYi1mYWIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmhlYWRlci1pbWFnZSB7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICB9XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiAjMzgzYTNlO1xuICB9XG4gIFxuICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZWZmN2Y4O1xuICAgIC0tY29sb3I6ICM1YmRmZjYgO1xuICB9XG4gIFxuICBpb24tdGFiLWJhciB7XG4gICAgLy8gVHJhbnNsdWNlbnQgcG9zaXRpb25pbmcgZWZmZWN0XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmhpZGVNZXtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW47XG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgfVxuXG4gICBpb24tdG9vbGJhcntcbiAgICBvcGFjaXR5OiA4MCU7XG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICB0b3A6MDtcbiAgICAgbGVmdDowO1xuICAgICBcbiAgIH1cbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxMnB4IDUlIDZweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMxNjE2MTY7XG4gICAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcbiAgICBvcGFjaXR5OiAuOTtcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xuICB9XG4gIFxuICAuY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBXaWR0aDogOTAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMS4zNXJlbTtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIGNvbG9yOiAjNTg1ODU4O1xuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBvcGFjaXR5OiAuODtcbiAgfVxuICBcbiAgLmlvbl9jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4IDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1cmVtO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgY29sb3I6ICM1ODU4NTg7XG4gICAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG9wYWNpdHk6IC44O1xuICB9XG4gIFxuICAubmV3c3R5cGUge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgIGNvbG9yOiAjYzdjN2M3O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICBcbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OjAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6MCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuc2NyZWVue1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSAwcztcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDBweCk7IFxuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6MFxuICB9XG4gIFxuICBcbiAgaW9uLXJlc3BvbnNpdmUge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIFxuICBcbiAgaW9uLWNhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICB9XG5cbiAgIGlvbi10aXRsZXtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgfVxuXG5cbiAgXG4gIC5pbWFnZXtcbiAgbWFyZ2luOjA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6Mzh2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxuICAuaGVhZGluZ3tcbiAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDEycHggNSUgMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGNvbG9yOiAjMTYxNjE2O1xuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvcGFjaXR5OiAuOTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuYWN0aXZlLWl0ZW0ge1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gICIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbm90b1NhbnNUYW1pbDtcbiAgc3JjOiB1cmwoXCIvc3JjL2Fzc2V0cy9Ob3RvU2Fuc1RhbWlsLVJlZ3VsYXIudHRmXCIpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIHBhZ2UtaG9tZSAubW9iaWxlLWZhYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIHBhZ2UtaG9tZSAud2ViLWZhYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uaGVhZGVyLWltYWdlIHtcbiAgaGVpZ2h0OiA0MHZoO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogIzM4M2EzZTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNlZmY3Zjg7XG4gIC0tY29sb3I6ICM1YmRmZjYgO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhpZGVNZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW47XG59XG5cbmlvbi10b29sYmFyIHtcbiAgb3BhY2l0eTogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEycHggNSUgNnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMTYxNjE2O1xuICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xuICBvcGFjaXR5OiAwLjk7XG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG59XG5cbi5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgV2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4zNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5pb25fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCA1JTtcbiAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzU4NTg1ODtcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ubmV3c3R5cGUge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogI2M3YzdjNztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JlZW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UgMHM7XG4gIGRpcmVjdGlvbjogbHRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDA7XG59XG5cbmlvbi1yZXNwb25zaXZlIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Uge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM4dmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlYWRpbmcge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEycHggNSUgMHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGl2ZS1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/news/news.page.ts":
  /*!***********************************!*\
    !*** ./src/app/news/news.page.ts ***!
    \***********************************/

  /*! exports provided: NewsPage */

  /***/
  function srcAppNewsNewsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
      return NewsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/@angular/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/screenshot/ngx */
    "./node_modules/@ionic-native/screenshot/ngx/index.js");

    var NewsPage =
    /*#__PURE__*/
    function () {
      function NewsPage(http, router, platform, socialSharing, screenshot) {
        var _this = this;

        _classCallCheck(this, NewsPage);

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
            modifier: 1
          }
        };
        this.data = [];
        this.newsType = [];
        this.hideMe = false;
        this.pages = [// {
        //   title: 'Category',
        //   url: 'news/category'
        // },
        {
          title: 'உள்நுழைக',
          url: '../login'
        }, {
          // title: 'பதிவு',
          url: '../category'
        }];
        this.selectedPath = '';
        this.subscribe = this.platform.backButton.subscribeWithPriority(666666, function () {
          if (_this.constructor.name == "NewsPage") {
            if (window.confirm("மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?")) {
              navigator["app"].exitApp();
            }
          } else {}
        });
        this.news_data(); // this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
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

        this.router.events.subscribe(function (event) {
          _this.selectedPath = event.url;
        });
      }

      _createClass(NewsPage, [{
        key: "singleTap",
        value: function singleTap() {
          this.hideMe = !this.hideMe;
          console.log("Single tap operation done");
        }
      }, {
        key: "quit",
        value: function quit() {
          if (window.confirm("மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?")) {
            navigator["app"].exitApp();
          }
        }
      }, {
        key: "news_data",
        value: function news_data() {
          var _this2 = this;

          this.http.get('https://madras-daily.herokuapp.com/api/news').map(function (res) {
            return res.json();
          }).subscribe(function (data) {
            _this2.data = data.data; // this.newsType = this.data.filter(function (entry){
            //     return entry.news_type === 'பொருளாதாரம்';
            //   })

            console.log(_this2.newsType);
          }, function (err) {
            console.log("Oops!");
          });
        }
      }, {
        key: "menuClick",
        value: function menuClick() {
          this.router.navigate(['../category']);
        }
      }]);

      return NewsPage;
    }();

    NewsPage.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]
      }, {
        type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__["Screenshot"]
      }];
    };

    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news.page.scss */
      "./src/app/news/news.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"], _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__["Screenshot"]])], NewsPage);
    /***/
  }
}]);
//# sourceMappingURL=news-news-module-es5.js.map