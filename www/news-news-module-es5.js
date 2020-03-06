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


    __webpack_exports__["default"] = "<head>\r\n<link href=\"https://fonts.googleapis.com/css?family=Roboto&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<div class=screen>\r\n<ion-slides pager=\"false\" [options]=\"slideOpts\">\r\n  <ion-slide *ngFor=\"let data of data.data\">\r\n  <ion-card class=\"ion-no-margin\">\r\n   <!-- <ion-img [src]=\"item.news_pics\"></ion-img> -->\r\n    <div class=image [style.backgroundImage]=\"'url(' + data.news_pics + ')'\"></div>\r\n<div class=\"heading\">\r\n     {{ data.heading }}\r\n</div>\r\n<div class=ion_content>\r\n    <div class=newstype>\r\n     {{ data.news_type }} / {{data.last_updated | date: 'dd-MM-yyyy'}}\r\n    </div>\r\n    <div class=content>\r\n     {{ data.news_content }}\r\n    </div>\r\n    </div>\r\n  </ion-card>\r\n  </ion-slide>\r\n  </ion-slides>\r\n<!--<ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n<ion-slide *ngFor=\"let data of data.data\">\r\n<ion-card class=\"ion-no-margin\">\r\n  <ion-img [src]=\"data.news_pics\"></ion-img>\r\n<ion-card-content>\r\n  <ion-card-header >\r\n    <ion-card-title>\r\n      <h1> {{ data.heading }} </h1>\r\n    </ion-card-title>\r\n  </ion-card-header>\r\n  <div class=newstype>\r\n    <p> {{ data.news_type }} </p>\r\n  </div>\r\n  <div class=content>\r\n    <p> {{ data.news_content }} </p>\r\n  </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-slide>\r\n</ion-slides>-->\r\n  \r\n<!--\r\n<ion-slide *ngFor=\"let item of data\">\r\n<ion-card>\r\n  <img [src]=\"item.image\">\r\n<ion-card-content>\r\n  <ion-card-header>\r\n    <ion-card-title >\r\n      <h3> {{item.name }} </h3>\r\n    </ion-card-title>\r\n  </ion-card-header>\r\n    <p> {{ item.company }} </p>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-slide>\r\n\r\n<ion-slide>\r\n<ion-card>\r\n  <img [src]=\"item.image\">\r\n<ion-card-content>\r\n  <ion-card-header>\r\n    <ion-card-title>\r\n      <h3> {{ item.name }} </h3>\r\n    </ion-card-title>\r\n  </ion-card-header>\r\n    <p> {{ item.company }} </p>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-slide>-->\r\n\r\n\r\n<!--<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n    <ion-tab-button tab=\"paper\">\r\n      <ion-icon name=\"paper\"></ion-icon>\r\n      <ion-label>Discover</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"share\">\r\n      <ion-icon name=\"share\"></ion-icon>\r\n      <ion-label>Share</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"bookmarks\">\r\n      <ion-icon name=\"bookmarks\"></ion-icon>\r\n      <ion-label>Bookmarks</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n</ion-tabs>-->\r\n\r\n<router-outlet main></router-outlet>";
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
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ./news.module */
            "./src/app/news/news.module.ts")).then(function (m) {
              return m.NewsPageModule;
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

    var NewsPageModule = function NewsPageModule() {
      _classCallCheck(this, NewsPageModule);
    };

    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageRoutingModule"]],
      declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
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


    __webpack_exports__["default"] = "@font-face {\n  font-family: notoSansTamil;\n  src: url(\"/src/assets/NotoSansTamil-Regular.ttf\");\n}\n@media (max-width: 820px) {\n  page-home .mobile-fab {\n    display: none;\n  }\n}\n@media (min-width: 820px) {\n  page-home .web-fab {\n    display: none;\n  }\n}\n.header-image {\n  height: 40vh;\n}\nion-button {\n  --color: #383a3e;\n}\nion-tab-button {\n  --background: #eff7f8;\n  --color: #0fdd98 ;\n}\nion-tab-bar {\n  --color: rgb(172, 169, 169);\n}\nion-card-title {\n  text-align: left;\n  width: 90%;\n  margin: 12px 5% 6px;\n  font-size: 1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  opacity: 0.9;\n  line-height: 1.3rem;\n}\n.content {\n  text-align: left;\n  Width: 90%;\n  margin: 0;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.ion_content {\n  width: 100%;\n  margin: 0px 5%;\n  line-height: 1.35rem;\n  font-size: 0.9rem;\n  color: #585858;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 300;\n  opacity: 0.8;\n}\n.newstype {\n  text-align: start;\n  font-size: 0.75rem;\n  color: #c7c7c7;\n  font-weight: 500;\n  font-family: Roboto;\n  font-style: bold;\n  margin-bottom: 7px;\n}\nion-slides {\n  height: 100%;\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.screen {\n  height: 100%;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  -webkit-transition: -webkit-transform 0.2s ease 0s;\n  transition: -webkit-transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s;\n  transition: transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;\n  direction: ltr;\n  display: -webkit-box;\n  display: flex;\n  will-change: transform;\n  -webkit-transform: translate(0%, 0px);\n          transform: translate(0%, 0px);\n  margin: 0 auto;\n}\nion-responsive {\n  height: 500px;\n  width: 250px;\n}\nion-card {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.image {\n  margin: 0;\n  width: 100%;\n  height: 42vh;\n  background-position: 50%;\n  background-color: #ccc;\n  background-size: cover;\n}\n.heading {\n  width: 90%;\n  margin: 12px 5% 0px;\n  font-size: 1.1rem;\n  color: #161616;\n  font-family: NotoSansTamil-Regular;\n  font-weight: 400;\n  opacity: 0.9;\n  line-height: 1.5rem;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9DOlxcVXNlcnNcXFNpdmFrdW1hclxcRG9jdW1lbnRzXFxuZXdzYXBwL3NyY1xcYXBwXFxuZXdzXFxuZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7QUNDSjtBRFNJO0VBQ0k7SUFDSSxhQUFBO0VDUFY7QUFDRjtBRFVJO0VBQ0k7SUFDSSxhQUFBO0VDUlY7QUFDRjtBRFlFO0VBQ0UsWUFBQTtBQ1RKO0FEWUU7RUFDRSxnQkFBQTtBQ1RKO0FEWUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FDVEo7QURZRTtFQUNFLDJCQUFBO0FDVEo7QURZRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1RKO0FEWUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEWUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNUSjtBRFlFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEWUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNUSjtBRFlFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUFBLDhCQUFBO1VBQUEsMkJBQUE7RUFDQSxrREFBQTtFQUFBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSxrRUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxjQUFBO0FDVEo7QURhRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDVko7QURjRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNYSjtBRGNFO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDWEY7QURjRTtFQUNBLFVBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG5vdG9TYW5zVGFtaWw7XHJcbiAgICBzcmM6IHVybCgnL3NyYy9hc3NldHMvTm90b1NhbnNUYW1pbC1SZWd1bGFyLnR0ZicpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBwYWdlLWhvbWUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgICAgICAubW9iaWxlLWZhYiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XHJcbiAgICAgICAgLndlYi1mYWIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogIzM4M2EzZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWZmN2Y4O1xyXG4gICAgLS1jb2xvcjogIzBmZGQ5OCA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10YWItYmFyIHtcclxuICAgIC0tY29sb3IgOiByZ2IoMTcyLCAxNjksIDE2OSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxMnB4IDUlIDZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMTYxNjE2O1xyXG4gICAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcclxuICAgIG9wYWNpdHk6IC45O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIFdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBjb2xvcjogIzU4NTg1ODtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb25fY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHggNSU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBjb2xvcjogIzU4NTg1ODtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc1RhbWlsLVJlZ3VsYXI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZXdzdHlwZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgY29sb3I6ICNjN2M3Yzc7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDowICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc2NyZWVue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlIDBzO1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwcHgpOyBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tcmVzcG9uc2l2ZSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgfVxyXG4gIFxyXG4gIC5pbWFnZXtcclxuICBtYXJnaW46MDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6NDJ2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGluZ3tcclxuICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxMnB4IDUlIDBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6ICMxNjE2MTY7XHJcbiAgICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG9wYWNpdHk6IC45O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gICIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbm90b1NhbnNUYW1pbDtcbiAgc3JjOiB1cmwoXCIvc3JjL2Fzc2V0cy9Ob3RvU2Fuc1RhbWlsLVJlZ3VsYXIudHRmXCIpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIHBhZ2UtaG9tZSAubW9iaWxlLWZhYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIHBhZ2UtaG9tZSAud2ViLWZhYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uaGVhZGVyLWltYWdlIHtcbiAgaGVpZ2h0OiA0MHZoO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogIzM4M2EzZTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNlZmY3Zjg7XG4gIC0tY29sb3I6ICMwZmRkOTggO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIC0tY29sb3I6IHJnYigxNzIsIDE2OSwgMTY5KTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEycHggNSUgNnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMTYxNjE2O1xuICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xuICBvcGFjaXR5OiAwLjk7XG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG59XG5cbi5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgV2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4zNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5pb25fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCA1JTtcbiAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzU4NTg1ODtcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5zVGFtaWwtUmVndWxhcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ubmV3c3R5cGUge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogI2M3YzdjNztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JlZW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UgMHM7XG4gIGRpcmVjdGlvbjogbHRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1yZXNwb25zaXZlIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdlIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MnZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5oZWFkaW5nIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxMnB4IDUlIDBweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjMTYxNjE2O1xuICBmb250LWZhbWlseTogTm90b1NhbnNUYW1pbC1SZWd1bGFyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBvcGFjaXR5OiAwLjk7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */";
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

    var NewsPage = function NewsPage(http) {
      var _this = this;

      _classCallCheck(this, NewsPage);

      this.http = http; // Slide Operation Controller

      this.slideOpts = {
        speed: 400,
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
      this.http.get('https://madras-daily.herokuapp.com/api/news').map(function (res) {
        return res.json();
      }).subscribe(function (data) {
        _this.data = data;
      }, function (err) {
        console.log("Oops!");
      });
    };

    NewsPage.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])], NewsPage);
    /***/
  }
}]);
//# sourceMappingURL=news-news-module-es5.js.map