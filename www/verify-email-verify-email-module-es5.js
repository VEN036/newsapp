function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-email-verify-email-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerifyEmailVerifyEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Email Verification </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <h2> Firebase Email Verification </h2>\n      <p>\n        Please click your email address and check the email address.\n      </p>\n      <ion-button type=\"submit\" (click)=\"authService.SendVerificationMail()\" expand=\"block\">\n        Send Verification Email\n      </ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/verify-email/verify-email-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/verify-email/verify-email-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: VerifyEmailPageRoutingModule */

  /***/
  function srcAppVerifyEmailVerifyEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailPageRoutingModule", function () {
      return VerifyEmailPageRoutingModule;
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


    var _verify_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verify-email.page */
    "./src/app/verify-email/verify-email.page.ts");

    var routes = [{
      path: '',
      component: _verify_email_page__WEBPACK_IMPORTED_MODULE_3__["VerifyEmailPage"]
    }];

    var VerifyEmailPageRoutingModule = function VerifyEmailPageRoutingModule() {
      _classCallCheck(this, VerifyEmailPageRoutingModule);
    };

    VerifyEmailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerifyEmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/verify-email/verify-email.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/verify-email/verify-email.module.ts ***!
    \*****************************************************/

  /*! exports provided: VerifyEmailPageModule */

  /***/
  function srcAppVerifyEmailVerifyEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function () {
      return VerifyEmailPageModule;
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


    var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verify-email-routing.module */
    "./src/app/verify-email/verify-email-routing.module.ts");
    /* harmony import */


    var _verify_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verify-email.page */
    "./src/app/verify-email/verify-email.page.ts");

    var VerifyEmailPageModule = function VerifyEmailPageModule() {
      _classCallCheck(this, VerifyEmailPageModule);
    };

    VerifyEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPageRoutingModule"]],
      declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailPage"]]
    })], VerifyEmailPageModule);
    /***/
  },

  /***/
  "./src/app/verify-email/verify-email.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/verify-email/verify-email.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerifyEmailVerifyEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/verify-email/verify-email.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/verify-email/verify-email.page.ts ***!
    \***************************************************/

  /*! exports provided: VerifyEmailPage */

  /***/
  function srcAppVerifyEmailVerifyEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function () {
      return VerifyEmailPage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var VerifyEmailPage =
    /*#__PURE__*/
    function () {
      function VerifyEmailPage(authService) {
        _classCallCheck(this, VerifyEmailPage);

        this.authService = authService;
      }

      _createClass(VerifyEmailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerifyEmailPage;
    }();

    VerifyEmailPage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    VerifyEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify-email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-email.page.scss */
      "./src/app/verify-email/verify-email.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], VerifyEmailPage);
    /***/
  }
}]);
//# sourceMappingURL=verify-email-verify-email-module-es5.js.map