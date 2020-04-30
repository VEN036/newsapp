function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-entertainment-entertainment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/entertainment/entertainment.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/entertainment/entertainment.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriesEntertainmentEntertainmentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>entertainment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/categories/entertainment/entertainment-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/categories/entertainment/entertainment-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: EntertainmentPageRoutingModule */

  /***/
  function srcAppCategoriesEntertainmentEntertainmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntertainmentPageRoutingModule", function () {
      return EntertainmentPageRoutingModule;
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


    var _entertainment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./entertainment.page */
    "./src/app/categories/entertainment/entertainment.page.ts");

    var routes = [{
      path: '',
      component: _entertainment_page__WEBPACK_IMPORTED_MODULE_3__["EntertainmentPage"]
    }];

    var EntertainmentPageRoutingModule = function EntertainmentPageRoutingModule() {
      _classCallCheck(this, EntertainmentPageRoutingModule);
    };

    EntertainmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EntertainmentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/categories/entertainment/entertainment.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/categories/entertainment/entertainment.module.ts ***!
    \******************************************************************/

  /*! exports provided: EntertainmentPageModule */

  /***/
  function srcAppCategoriesEntertainmentEntertainmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntertainmentPageModule", function () {
      return EntertainmentPageModule;
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


    var _entertainment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./entertainment-routing.module */
    "./src/app/categories/entertainment/entertainment-routing.module.ts");
    /* harmony import */


    var _entertainment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entertainment.page */
    "./src/app/categories/entertainment/entertainment.page.ts");

    var EntertainmentPageModule = function EntertainmentPageModule() {
      _classCallCheck(this, EntertainmentPageModule);
    };

    EntertainmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _entertainment_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntertainmentPageRoutingModule"]],
      declarations: [_entertainment_page__WEBPACK_IMPORTED_MODULE_6__["EntertainmentPage"]]
    })], EntertainmentPageModule);
    /***/
  },

  /***/
  "./src/app/categories/entertainment/entertainment.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/categories/entertainment/entertainment.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesEntertainmentEntertainmentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvZW50ZXJ0YWlubWVudC9lbnRlcnRhaW5tZW50LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/categories/entertainment/entertainment.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/categories/entertainment/entertainment.page.ts ***!
    \****************************************************************/

  /*! exports provided: EntertainmentPage */

  /***/
  function srcAppCategoriesEntertainmentEntertainmentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntertainmentPage", function () {
      return EntertainmentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EntertainmentPage =
    /*#__PURE__*/
    function () {
      function EntertainmentPage() {
        _classCallCheck(this, EntertainmentPage);
      }

      _createClass(EntertainmentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EntertainmentPage;
    }();

    EntertainmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entertainment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entertainment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/entertainment/entertainment.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entertainment.page.scss */
      "./src/app/categories/entertainment/entertainment.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EntertainmentPage);
    /***/
  }
}]);
//# sourceMappingURL=categories-entertainment-entertainment-module-es5.js.map