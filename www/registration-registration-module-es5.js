function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\" style=\"font-size: medium; font-family: NotoSansTamil-Regular;\">பதிவு செய்தல்</ion-title>\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form>    \r\n    <ion-item>\r\n    </ion-item>\r\n    \r\n    <ion-item lines=\"full\">\r\n      <div class=\"ion_label\">\r\n      <ion-label position=\"floating\">மின்னஞ்சல்</ion-label>\r\n      <ion-input type=\"text\" #email required></ion-input>\r\n      </div>\r\n    </ion-item> \r\n\r\n    <ion-item lines=\"full\">\r\n      <div class=\"ion_label\">\r\n      <ion-label position=\"floating\">கடவுச்சொல்</ion-label>\r\n      <ion-input type=\"password\" #password required></ion-input>\r\n      </div>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col> \r\n      <ion-button type=\"submit\" (click)=\"signUp(email, password)\" expand=\"block\">பதிவுபெறுக</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/registration/registration-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/registration/registration-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: RegistrationPageRoutingModule */

  /***/
  function srcAppRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
      return RegistrationPageRoutingModule;
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


    var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/registration/registration.page.ts");

    var routes = [{
      path: '',
      component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }];

    var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
      _classCallCheck(this, RegistrationPageRoutingModule);
    };

    RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registration/registration.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/registration/registration.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegistrationPageModule */

  /***/
  function srcAppRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
      return RegistrationPageModule;
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


    var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registration-routing.module */
    "./src/app/registration/registration-routing.module.ts");
    /* harmony import */


    var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/registration/registration.page.ts");

    var RegistrationPageModule = function RegistrationPageModule() {
      _classCallCheck(this, RegistrationPageModule);
    };

    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]],
      declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })], RegistrationPageModule);
    /***/
  },

  /***/
  "./src/app/registration/registration.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/registration/registration.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/registration/registration.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/registration/registration.page.ts ***!
    \***************************************************/

  /*! exports provided: RegistrationPage */

  /***/
  function srcAppRegistrationRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
      return RegistrationPage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var RegistrationPage =
    /*#__PURE__*/
    function () {
      function RegistrationPage(authService, router, toastController, loadingController, alertController) {
        _classCallCheck(this, RegistrationPage);

        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
      }

      _createClass(RegistrationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signUp",
        value: function signUp(email, password) {
          var _this = this;

          this.authService.RegisterUser(email.value, password.value).then(function (data) {
            console.log(data);

            _this.presentToast('புதிய பதிவு வெற்றி பெற்றது', false, 'bottom', 1000);

            _this.router.navigate(['login']);
          }).catch(function (error) {
            window.alert("தொடர்ந்து புதிய பதிவைப் பயன்படுத்துவதற்கு சரியான மின்னஞ்சல் முகவரியைக் கொடுங்கள்");
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

      return RegistrationPage;
    }();

    RegistrationPage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.page.scss */
      "./src/app/registration/registration.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], RegistrationPage);
    /***/
  }
}]);
//# sourceMappingURL=registration-registration-module-es5.js.map