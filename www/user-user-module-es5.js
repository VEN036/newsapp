function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> User Profile </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-item></ion-item>\n<ion-content padding>\n  <p>Username: {{(profileData | async)?.username}}</p>\n  <p>Firstname: {{(profileData | async)?.firstname}}</p>\n  <p>Lastname: {{(profileData | async)?.lastname}}</p>\n  <p>Email: {{(profileData | async)?.email}}</p>\n  <ion-button expand=\"block\" (click)=\"logout()\" color=\"undefined\" class=\"transition\">\n    <strong class=\"white\">Logout</strong></ion-button>\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserPageRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
      return UserPageRoutingModule;
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


    var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/user/user.page.ts");

    var routes = [{
      path: '',
      component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }];

    var UserPageRoutingModule = function UserPageRoutingModule() {
      _classCallCheck(this, UserPageRoutingModule);
    };

    UserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserPageModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
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


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/user/user.page.ts");

    var UserPageModule = function UserPageModule() {
      _classCallCheck(this, UserPageModule);
    };

    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
      declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], UserPageModule);
    /***/
  },

  /***/
  "./src/app/user/user.page.scss":
  /*!*************************************!*\
    !*** ./src/app/user/user.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/user.page.ts":
  /*!***********************************!*\
    !*** ./src/app/user/user.page.ts ***!
    \***********************************/

  /*! exports provided: UserPage */

  /***/
  function srcAppUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPage", function () {
      return UserPage;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ionic-angular */
    "./node_modules/ionic-angular/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/add/operator/take */
    "./node_modules/rxjs-compat/_esm2015/add/operator/take.js");

    var UserPage =
    /*#__PURE__*/
    function () {
      function UserPage(router, afAuth, toast, afDatabase, authService) {
        _classCallCheck(this, UserPage);

        this.router = router;
        this.afAuth = afAuth;
        this.toast = toast;
        this.afDatabase = afDatabase;
        this.authService = authService;
      }

      _createClass(UserPage, [{
        key: "ionViewWillLoad",
        value: function ionViewWillLoad() {
          var _this = this;

          this.afAuth.authState.take(1).subscribe(function (data) {
            if (data && data.email && data.uid) {
              _this.toast.create({
                message: "Welcome to User, ".concat(data.email),
                duration: 3000
              });

              _this.profileData = _this.afDatabase.object("profile/".concat(data.uid));
            } else {
              _this.toast.create({
                message: "Could not find authentication details.",
                duration: 3000
              });
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this2 = this;

          this.authService.SignOut().then(function (res) {
            _this2.router.navigate(['category']);
          }, function (error) {
            console.log("Logout error", error);
          });
        }
      }]);

      return UserPage;
    }();

    UserPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }];
    };

    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicPage"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.page.scss */
      "./src/app/user/user.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])], UserPage);
    /***/
  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map