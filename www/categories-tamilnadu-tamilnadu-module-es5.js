function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-tamilnadu-tamilnadu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/tamilnadu/tamilnadu.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/tamilnadu/tamilnadu.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriesTamilnaduTamilnaduPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar *ngIf=\"hideMe\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button href=\"/news\">\r\n      <ion-icon name=\"md-home\" color=\"primary\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title color=\"primary\">தமிழ்நாடு</ion-title>\r\n</ion-toolbar>\r\n\r\n<div class=screen>\r\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" (ionSlideTap)=\"singleTap()\">\r\n    <ion-slide *ngFor=\"let data of newsType\">\r\n      <ion-card class=\"ion-no-margin\">\r\n        <div class=image [style.backgroundImage]=\"'url(' + data.news_pics + ')'\"></div>\r\n        <div class=\"heading\">\r\n          {{ data.heading }}\r\n        </div>\r\n        <div class=ion_content>\r\n          <div class=newstype>\r\n            {{ data.news_type }} / {{data.last_updated | date: 'dd-MM-yyyy'}}\r\n          </div>\r\n          <div class=content>\r\n            {{ data.news_content }}\r\n          </div>\r\n        </div>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>";
    /***/
  },

  /***/
  "./src/app/categories/tamilnadu/tamilnadu-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/categories/tamilnadu/tamilnadu-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: TamilnaduPageRoutingModule */

  /***/
  function srcAppCategoriesTamilnaduTamilnaduRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TamilnaduPageRoutingModule", function () {
      return TamilnaduPageRoutingModule;
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


    var _tamilnadu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tamilnadu.page */
    "./src/app/categories/tamilnadu/tamilnadu.page.ts");

    var routes = [{
      path: '',
      component: _tamilnadu_page__WEBPACK_IMPORTED_MODULE_3__["TamilnaduPage"]
    }];

    var TamilnaduPageRoutingModule = function TamilnaduPageRoutingModule() {
      _classCallCheck(this, TamilnaduPageRoutingModule);
    };

    TamilnaduPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TamilnaduPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/categories/tamilnadu/tamilnadu.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/categories/tamilnadu/tamilnadu.module.ts ***!
    \**********************************************************/

  /*! exports provided: TamilnaduPageModule */

  /***/
  function srcAppCategoriesTamilnaduTamilnaduModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TamilnaduPageModule", function () {
      return TamilnaduPageModule;
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


    var _tamilnadu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tamilnadu-routing.module */
    "./src/app/categories/tamilnadu/tamilnadu-routing.module.ts");
    /* harmony import */


    var _tamilnadu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tamilnadu.page */
    "./src/app/categories/tamilnadu/tamilnadu.page.ts");

    var TamilnaduPageModule = function TamilnaduPageModule() {
      _classCallCheck(this, TamilnaduPageModule);
    };

    TamilnaduPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tamilnadu_routing_module__WEBPACK_IMPORTED_MODULE_5__["TamilnaduPageRoutingModule"]],
      declarations: [_tamilnadu_page__WEBPACK_IMPORTED_MODULE_6__["TamilnaduPage"]]
    })], TamilnaduPageModule);
    /***/
  },

  /***/
  "./src/app/categories/tamilnadu/tamilnadu.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/categories/tamilnadu/tamilnadu.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesTamilnaduTamilnaduPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvdGFtaWxuYWR1L3RhbWlsbmFkdS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/categories/tamilnadu/tamilnadu.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/categories/tamilnadu/tamilnadu.page.ts ***!
    \********************************************************/

  /*! exports provided: TamilnaduPage */

  /***/
  function srcAppCategoriesTamilnaduTamilnaduPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TamilnaduPage", function () {
      return TamilnaduPage;
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

    var TamilnaduPage =
    /*#__PURE__*/
    function () {
      function TamilnaduPage(http) {
        _classCallCheck(this, TamilnaduPage);

        this.http = http;
        this.data = [];
        this.newsType = [];
        this.hideMe = true;
        this.news_data();
      }

      _createClass(TamilnaduPage, [{
        key: "singleTap",
        value: function singleTap() {
          this.hideMe = !this.hideMe;
          console.log("Single tap operation done");
        }
      }, {
        key: "news_data",
        value: function news_data() {
          var _this = this;

          this.http.get('https://madras-daily.herokuapp.com/api/news').map(function (res) {
            return res.json();
          }).subscribe(function (data) {
            _this.data = data.data;
            _this.newsType = _this.data.filter(function (entry) {
              return entry.news_type === 'தமிழ்நாடு';
            });
            console.log(_this.newsType);
          }, function (err) {
            console.log("Oops!");
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TamilnaduPage;
    }();

    TamilnaduPage.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    TamilnaduPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tamilnadu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tamilnadu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/tamilnadu/tamilnadu.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tamilnadu.page.scss */
      "./src/app/categories/tamilnadu/tamilnadu.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])], TamilnaduPage);
    /***/
  }
}]);
//# sourceMappingURL=categories-tamilnadu-tamilnadu-module-es5.js.map