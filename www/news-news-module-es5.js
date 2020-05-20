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


    __webpack_exports__["default"] = "<head>\r\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n\r\n<!-- <ion-ion-split-pane> -->\r\n<ion-toolbar *ngIf=\"hideMe\">\r\n  <ion-buttons slot=\"start\" (click)=\"menuClick()\">\r\n    <!-- <ion-buttons > -->\r\n      <ion-menu-button auto-hide=\"false\" color=\"primary\"></ion-menu-button>\r\n    <!-- </ion-buttons> -->\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button href=\"/news\">\r\n      <ion-icon name=\"ios-refresh\" color=\"primary\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title color=\"primary\">மெட்ராஸ் டெய்லி</ion-title>\r\n</ion-toolbar>\r\n\r\n<!-- <ion-menu contentId=\"content\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title> பட்டியல் </ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-item>\r\n        <ion-label></ion-label>\r\n      </ion-item>\r\n      <ion-list class=menu_list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\r\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath === p.url\" color=\"primary\">\r\n            {{ p.title }}\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-item (click)=\"quit()\" color=\"primary\">\r\n          <ion-label >வெளியேற</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu> -->\r\n<ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n\r\n<!-- Tab bar code (footer)-Start -->\r\n\r\n<!-- <ion-tab-bar slot=\"bottom\" translucent=\"true\" *ngIf=\"hideMe\">\r\n    <ion-tab-button (click)=\"shareNews()\">\r\n      <ion-icon name=\"md-share\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"primary\">Share</ion-label>\r\n    </ion-tab-button> -->\r\n\r\n<!--    <ion-tab-button href=\"/login\">\r\n      <ion-icon name=\"log-in\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"primary\">Login</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button href=\"/registration\">\r\n      <ion-icon name=\"person-add\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"primary\">Signup</ion-label>\r\n  </ion-tab-button>\r\n   <ion-tab-button href=\"/news\">\r\n      <ion-icon name=\"home\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"primary\">Home</ion-label>\r\n    </ion-tab-button>\r\n    \r\n     <ion-tab-button href=\"/bookmark\">\r\n    <ion-icon name=\"bookmark\"></ion-icon>\r\n  </ion-tab-button>\r\n  </ion-tab-bar> -->\r\n\r\n<!-- Tab bar code (footer)-End -->\r\n\r\n<!-- </ion-ion-split-pane> -->\r\n\r\n<div class=screen>\r\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" (ionSlideTap)=\"singleTap()\">\r\n    <ion-slide *ngFor=\"let data of data\">\r\n      <ion-card class=\"ion-no-margin\">\r\n        <div class=image [style.backgroundImage]=\"'url(' + data.news_pics + ')'\"></div>\r\n        <div class=\"heading\">\r\n          {{ data.heading }}\r\n        </div>\r\n        <div class=ion_content>\r\n          <div class=newstype>\r\n            {{ data.news_type }} / {{data.last_updated | date: 'dd-MM-yyyy'}}\r\n          </div>\r\n          <div class=content>\r\n            {{ data.news_content }}\r\n          </div>\r\n        </div>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-tab-bar slot=\"bottom\" *ngIf=\"hideMe\">\r\n    <ion-tab-button (click)=\"ShareSheet()\">\r\n      <ion-icon name=\"share\"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button (click)=\"unbookmarkNews()\" *ngIf=\"isBookmark\">\r\n      <ion-icon name=\"bookmarks\"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button (click)=\" bookmarkNews()\" *ngIf=\"!isBookmark\">\r\n      <ion-icon name=\"bookmarks\"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>";
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


    __webpack_exports__["default"] = "@font-face {\n  font-family: notoSansTamil;\n  src: url(\"/src/assets/NotoSansTamil-Regular.ttf\");\n}\n@media (max-width: 820px) {\n  page-home .mobile-fab {\n    display: none;\n  }\n}\n@media (min-width: 820px) {\n  page-home .web-fab {\n    display: none;\n  }\n}\n.header-image {\n  height: 40vh;\n}\nion-button {\n  --color: #383a3e;\n}\nion-tab-button {\n  --background: #eff7f8;\n  --color: #6fcedf ;\n  width: 100%;\n}\nion-tab-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n.hideMe {\n  -webkit-transition: -webkit-transform 0.5s ease-in;\n  transition: -webkit-transform 0.5s ease-in;\n  transition: transform 0.5s ease-in;\n  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;\n}\nion-toolbar {\n  opacity: 80%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\nion-card-title {\n  text-align: left;\n  width: 90%;\n  margin: 12px 5% 6px;\n  font-size: 1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  opacity: 0.9;\n  line-height: 1.3rem;\n}\n.content {\n  text-align: left;\n  Width: 90%;\n  margin: 0;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.ion_content {\n  width: 100%;\n  margin: 0px 5%;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.newstype {\n  text-align: start;\n  font-size: 0.75rem;\n  color: #c7c7c7;\n  font-weight: 500;\n  font-family: Roboto;\n  font-style: bold;\n  margin-bottom: 7px;\n}\nion-slides {\n  height: 100%;\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.screen {\n  height: 100%;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  -webkit-transition: -webkit-transform 0.2s ease 0s;\n  transition: -webkit-transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;\n  direction: ltr;\n  display: -webkit-box;\n  display: flex;\n  will-change: transform;\n  -webkit-transform: translate(0%, 0px);\n          transform: translate(0%, 0px);\n  margin: 0 auto;\n  z-index: 0;\n}\nion-responsive {\n  height: 500px;\n  width: 250px;\n}\nion-card {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\nion-title {\n  text-align: center;\n}\n.image {\n  margin: 0;\n  width: 100%;\n  height: 38vh;\n  background-position: 50%;\n  background-color: #ccc;\n  background-size: cover;\n}\n.heading {\n  width: 90%;\n  margin: 12px 5% 0px;\n  font-size: 1.1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 400;\n  opacity: 0.9;\n  line-height: 1.5rem;\n  text-align: left;\n}\n.active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9DOlxcVXNlcnNcXFNpdmFrdW1hclxcRG9jdW1lbnRzXFxuZXdzYXBwLWxpdmVcXG5ld3NhcHBfbGl2ZS9zcmNcXGFwcFxcbmV3c1xcbmV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGlEQUFBO0FDQ0o7QURTSTtFQUNJO0lBQ0ksYUFBQTtFQ1BWO0FBQ0Y7QURVSTtFQUNJO0lBQ0ksYUFBQTtFQ1JWO0FBQ0Y7QURZRTtFQUNFLFlBQUE7QUNUSjtBRFlFO0VBQ0UsZ0JBQUE7QUNUSjtBRFlFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNUSjtBRFlFO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNWSjtBRGFFO0VBQ0Usa0RBQUE7RUFBQSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsa0VBQUE7QUNWSjtBRGNHO0VBQ0MsWUFBQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNYTDtBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWko7QURlRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDWko7QURlRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1pKO0FEZUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWko7QURlRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ1pKO0FEZUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQUEsOEJBQUE7VUFBQSwyQkFBQTtFQUNBLGtEQUFBO0VBQUEsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLGtFQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDWko7QURnQkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2JKO0FEaUJFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2RKO0FEaUJHO0VBQ0Usa0JBQUE7QUNkTDtBRG1CRTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ2hCRjtBRG1CRTtFQUNBLFVBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLCtDQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG5vdG9TYW5zVGFtaWw7XHJcbiAgICBzcmM6IHVybCgnL3NyYy9hc3NldHMvTm90b1NhbnNUYW1pbC1SZWd1bGFyLnR0ZicpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBwYWdlLWhvbWUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgICAgICAubW9iaWxlLWZhYiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XHJcbiAgICAgICAgLndlYi1mYWIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogIzM4M2EzZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWZmN2Y4O1xyXG4gICAgLS1jb2xvcjogIzZmY2VkZiA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRhYi1iYXIge1xyXG4gICAgLy8gVHJhbnNsdWNlbnQgcG9zaXRpb25pbmcgZWZmZWN0XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaGlkZU1le1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICB9XHJcblxyXG4gICBpb24tdG9vbGJhcntcclxuICAgIG9wYWNpdHk6IDgwJTtcclxuICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICB0b3A6MDtcclxuICAgICBsZWZ0OjA7XHJcbiAgICAgXHJcbiAgIH1cclxuICBcclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTJweCA1JSA2cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzE2MTYxNjtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBXaWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICM1ODU4NTg7XHJcbiAgICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gIH1cclxuICBcclxuICAuaW9uX2NvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4IDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICM1ODU4NTg7XHJcbiAgICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gIH1cclxuICBcclxuICAubmV3c3R5cGUge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIGNvbG9yOiAjYzdjN2M3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIH1cclxuICBcclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSAwcztcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMHB4KTsgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6MFxyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tcmVzcG9uc2l2ZSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgfVxyXG5cclxuICAgaW9uLXRpdGxle1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG5cclxuXHJcbiAgXHJcbiAgLmltYWdle1xyXG4gIG1hcmdpbjowO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDozOHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkaW5ne1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDEycHggNSUgMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogIzE2MTYxNjtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUtaXRlbSB7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBub3RvU2Fuc1RhbWlsO1xuICBzcmM6IHVybChcIi9zcmMvYXNzZXRzL05vdG9TYW5zVGFtaWwtUmVndWxhci50dGZcIik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgcGFnZS1ob21lIC5tb2JpbGUtZmFiIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgcGFnZS1ob21lIC53ZWItZmFiIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICBoZWlnaHQ6IDQwdmg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWNvbG9yOiAjMzgzYTNlO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2VmZjdmODtcbiAgLS1jb2xvcjogIzZmY2VkZiA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhpZGVNZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW47XG59XG5cbmlvbi10b29sYmFyIHtcbiAgb3BhY2l0eTogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEycHggNSUgNnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMTYxNjE2O1xuICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xuICBvcGFjaXR5OiAwLjk7XG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG59XG5cbi5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgV2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4zNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5pb25fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCA1JTtcbiAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzU4NTg1ODtcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ubmV3c3R5cGUge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogI2M3YzdjNztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JlZW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UgMHM7XG4gIGRpcmVjdGlvbjogbHRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDA7XG59XG5cbmlvbi1yZXNwb25zaXZlIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Uge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM4dmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlYWRpbmcge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEycHggNSUgMHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGl2ZS1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/screenshot/ngx */
    "./node_modules/@ionic-native/screenshot/ngx/index.js");
    /* harmony import */


    var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/bookmark.service */
    "./src/app/services/bookmark.service.ts");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");

    var NewsPage =
    /*#__PURE__*/
    function () {
      function NewsPage(http, router, platform, socialSharing, screenshot, actionSheetController, bookmarkService, toastController) {
        var _this = this;

        _classCallCheck(this, NewsPage);

        this.http = http;
        this.router = router;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
        this.actionSheetController = actionSheetController;
        this.bookmarkService = bookmarkService;
        this.toastController = toastController;
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
        this.isBookmark = false;
        this.pages = [{
          title: 'உள்நுழைக',
          url: '../login'
        }, {
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
        this.news_data();
        this.router.events.subscribe(function (event) {
          _this.selectedPath = event.url;
        });
        this.heading = this.http.get('heading');
        this.bookmarkService.isBookmark(this.heading.news_id).then(function (isBook) {
          _this.isBookmark = isBook;
        });
      }

      _createClass(NewsPage, [{
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          this.message = "Welcome to Madras Daily";
          this.link = "https://play.google.com/store/apps/details?id=com.test.madrasDaily";
          this.URI = this.screenshot.save;
        }
      }, {
        key: "singleTap",
        value: function singleTap() {
          this.hideMe = !this.hideMe;
          console.log("Single tap operation done");
        }
      }, {
        key: "quit",
        value: function quit() {
          var confirm = this.alertCtrl.create({
            header: 'உறுதிப்படுத்தவும்!',
            message: 'மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?',
            buttons: [{
              text: 'சரி',
              handler: function handler() {
                navigator["app"].exitApp();
                ;
              }
            }, {
              text: 'ரத்துசெய்',
              role: 'cancel',
              handler: function handler() {}
            }]
          }).then(function (confirm) {
            return confirm.present();
          });
        }
      }, {
        key: "news_data",
        value: function news_data() {
          var _this2 = this;

          this.http.get('https://madras-daily.herokuapp.com/api/news').map(function (res) {
            return res.json();
          }).subscribe(function (data) {
            _this2.data = data.data;
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
      }, {
        key: "bookmarkNews",
        value: function bookmarkNews() {
          var _this3 = this;

          this.bookmarkService.bookmarkNews(this.heading.news_id).then(function () {
            _this3.isBookmark = true;
          }).then(function (data) {
            console.log(data);

            _this3.presentToast('செய்தி புக்மார்க்கைச் சேர்த்தது', false, 'bottom', 1000);
          });
        }
      }, {
        key: "unbookmarkNews",
        value: function unbookmarkNews() {
          var _this4 = this;

          this.bookmarkService.unbookmarkNews(this.heading.news_id).then(function () {
            _this4.isBookmark = false;
          }).then(function (data) {
            console.log(data);

            _this4.presentToast('புக்மார்க்கிலிருந்து செய்தி நீக்கப்பட்டது', false, 'bottom', 1000);
          });
        }
      }, {
        key: "ShareSheet",
        value: function ShareSheet() {
          var _this5 = this;

          this.actionSheet = this.actionSheetController.create({
            header: 'வழியாக பகிரவும்',
            buttons: [{
              text: 'முகநூல்',
              icon: 'logo-facebook',
              handler: function handler() {
                _this5.actionSheet = _this5.actionSheetController.dismiss().then(function (res) {
                  _this5.facebookShare();
                });
              }
            }, {
              text: 'பகிரி',
              icon: 'logo-whatsapp',
              handler: function handler() {
                _this5.actionSheet = _this5.actionSheetController.dismiss().then(function (res) {
                  _this5.whatsappShare();
                });
              }
            }, {
              text: 'இன்ஸ்டாகிராம்',
              icon: 'logo-instagram',
              handler: function handler() {
                _this5.actionSheet = _this5.actionSheetController.dismiss().then(function (res) {
                  _this5.instagramShare();
                });
              }
            }, {
              text: 'ட்விட்டர்',
              icon: 'logo-twitter',
              handler: function handler() {
                _this5.actionSheet = _this5.actionSheetController.dismiss().then(function (res) {
                  _this5.twitterShare();
                });
              }
            }, {
              text: 'ரத்துசெய்',
              icon: 'close',
              role: 'cancel',
              handler: function handler() {
                console.log('Cancel clicked');
              }
            }]
          }).then(function (actionsheet) {
            actionsheet.present();
          });
          this.hideMe = !this.hideMe;
        }
      }, {
        key: "facebookShare",
        value: function facebookShare() {
          var _this6 = this;

          this.platform.ready().then(function () {
            _this6.screenshot.URI(80).then(function (res) {
              _this6.socialSharing.shareViaFacebook(_this6.message, res.URI, _this6.link).then(function () {}, function () {
                alert('முகநூல் வழியாக பகிர் தோல்வியுற்றது');
              });
            }, function () {
              alert('ஸ்கிரீன் ஷாட் தோல்வியடைந்தது');
            });
          });
        }
      }, {
        key: "whatsappShare",
        value: function whatsappShare() {
          var _this7 = this;

          this.platform.ready().then(function () {
            _this7.screenshot.URI(80).then(function (res) {
              _this7.socialSharing.shareViaWhatsApp(_this7.message, res.URI, _this7.link).then(function () {}, function () {
                alert('பகிரி வழியாக பகிர் தோல்வியுற்றது');
              });
            }, function () {
              alert('ஸ்கிரீன் ஷாட் தோல்வியடைந்தது');
            });
          });
        }
      }, {
        key: "instagramShare",
        value: function instagramShare() {
          var _this8 = this;

          this.platform.ready().then(function () {
            _this8.screenshot.URI(80).then(function (res) {
              _this8.socialSharing.shareViaInstagram(_this8.message, res.URI).then(function () {}, function () {
                alert('இன்ஸ்டாகிராம் வழியாக பகிர் தோல்வியுற்றது');
              });
            }, function () {
              alert('ஸ்கிரீன் ஷாட் தோல்வியடைந்தது');
            });
          });
        }
      }, {
        key: "twitterShare",
        value: function twitterShare() {
          var _this9 = this;

          this.platform.ready().then(function () {
            _this9.screenshot.URI(80).then(function () {
              _this9.socialSharing.shareViaTwitter(_this9.message, _this9.URI, _this9.link).then(function () {}, function () {
                alert('ட்விட்டர் வழியாக பகிர் தோல்வியுற்றது');
              });
            }, function () {
              alert('ஸ்கிரீன் ஷாட் தோல்வியடைந்தது');
            });
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(message, show_button, position, duration) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: message,
                      showCloseButton: show_button,
                      position: position,
                      duration: duration
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return NewsPage;
    }();

    NewsPage.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]
      }, {
        type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_6__["Screenshot"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _services_bookmark_service__WEBPACK_IMPORTED_MODULE_7__["BookmarkService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_6__["Screenshot"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _services_bookmark_service__WEBPACK_IMPORTED_MODULE_7__["BookmarkService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], NewsPage);
    /***/
  }
}]);
//# sourceMappingURL=news-news-module-es5.js.map