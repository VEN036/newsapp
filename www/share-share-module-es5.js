function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-share-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/share/share.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/share.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShareSharePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Social Sharing News Data</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"full\" (click)=\"share()\" logo=\"share\">Share</ion-item>\n  <ion-item lines=\"full\" (click)=\"shareViaEmail()\">Share Via Email</ion-item>\n  <ion-item lines=\"full\" (click)=\"shareViaWhatsapp()\">Share Via Whatsapp</ion-item>\n  <ion-item lines=\"full\" (click)=\"shareViaFacebook()\">Share Via Facebook</ion-item>\n  <ion-item lines=\"full\" (click)=\"shareViaTwitter()\">Share Via Twitter</ion-item>\n  <ion-item lines=\"full\" (click)=\"shareViaInstagram()\">Share Via Instagram</ion-item>\n  <ion-item lines=\"full\" (click)=\"shareViaSMS()\">Share Via SMS</ion-item>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/share/share-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/share/share-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: SharePageRoutingModule */

  /***/
  function srcAppShareShareRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharePageRoutingModule", function () {
      return SharePageRoutingModule;
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


    var _share_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./share.page */
    "./src/app/share/share.page.ts");

    var routes = [{
      path: '',
      component: _share_page__WEBPACK_IMPORTED_MODULE_3__["SharePage"]
    }];

    var SharePageRoutingModule = function SharePageRoutingModule() {
      _classCallCheck(this, SharePageRoutingModule);
    };

    SharePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SharePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/share/share.module.ts":
  /*!***************************************!*\
    !*** ./src/app/share/share.module.ts ***!
    \***************************************/

  /*! exports provided: SharePageModule */

  /***/
  function srcAppShareShareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharePageModule", function () {
      return SharePageModule;
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


    var _share_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./share-routing.module */
    "./src/app/share/share-routing.module.ts");
    /* harmony import */


    var _share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./share.page */
    "./src/app/share/share.page.ts");

    var SharePageModule = function SharePageModule() {
      _classCallCheck(this, SharePageModule);
    };

    SharePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _share_routing_module__WEBPACK_IMPORTED_MODULE_5__["SharePageRoutingModule"]],
      declarations: [_share_page__WEBPACK_IMPORTED_MODULE_6__["SharePage"]]
    })], SharePageModule);
    /***/
  },

  /***/
  "./src/app/share/share.page.scss":
  /*!***************************************!*\
    !*** ./src/app/share/share.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppShareSharePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3NoYXJlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/share/share.page.ts":
  /*!*************************************!*\
    !*** ./src/app/share/share.page.ts ***!
    \*************************************/

  /*! exports provided: SharePage */

  /***/
  function srcAppShareSharePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharePage", function () {
      return SharePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");

    var SharePage =
    /*#__PURE__*/
    function () {
      function SharePage(platform, socialSharing) {
        _classCallCheck(this, SharePage);

        this.platform = platform;
        this.socialSharing = socialSharing;
      } // Share Options


      _createClass(SharePage, [{
        key: "share",
        value: function share() {
          var _this = this;

          this.platform.ready().then(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.socialSharing.share('share news data').then(function () {}).catch(function (err) {
                        console.log(err);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        } // Share Via Email

      }, {
        key: "shareViaEmail",
        value: function shareViaEmail() {
          var _this2 = this;

          this.socialSharing.canShareViaEmail().then(function () {
            _this2.platform.ready().then(function () {
              _this2.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']);
            });
          }).catch(function (err) {
            alert('Email not available');
          });
        } // Share Via WhatsApp

      }, {
        key: "shareViaWhatsapp",
        value: function shareViaWhatsapp() {
          this.socialSharing.shareViaWhatsApp('Hello WhatsApp', null, 'https://codevampires.com/').then(function () {
            console.log('It works');
          }).catch(function () {
            alert('WhatsApp not available');
          });
        } // Share Via Facebook

      }, {
        key: "shareViaFacebook",
        value: function shareViaFacebook() {
          this.socialSharing.shareViaFacebook('Hello Friends', null, 'https://codevampires.com/').then(function () {
            console.log('It works');
          }).catch(function () {
            alert('Facebook not available');
          });
        } // Share Via Twitter

      }, {
        key: "shareViaTwitter",
        value: function shareViaTwitter() {
          this.socialSharing.shareViaTwitter('Hello Twitter', null, 'https://codevampires.com/').then(function () {
            console.log('It works');
          }).catch(function () {
            alert('Twitter not available');
          });
        } // Share Via Instagram

      }, {
        key: "shareViaInstagram",
        value: function shareViaInstagram() {
          this.socialSharing.shareViaInstagram('Hello Instagram', null).then(function () {
            console.log('It works');
          }).catch(function () {
            alert('Instagram not available');
          });
        } // Share via SMS

      }, {
        key: "shareViaSMS",
        value: function shareViaSMS() {
          this.socialSharing.shareViaSMS('Hello', '+999 123123 123').then(function () {
            console.log('It works');
          }).catch(function () {
            alert('Not available');
          });
        }
      }]);

      return SharePage;
    }();

    SharePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]
      }];
    };

    SharePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-share',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./share.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/share/share.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./share.page.scss */
      "./src/app/share/share.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]])], SharePage);
    /***/
  }
}]);
//# sourceMappingURL=share-share-module-es5.js.map