function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postdetails-postdetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/postdetails/postdetails.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postdetails/postdetails.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostdetailsPostdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Post Detail\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n<div *ngIf=\"post$ | async as post\">\n  <h1 [innerHTML]=\"post.title.rendered\"> </h1>\n  <p no-margin> <small> By {{post._embedded.author[0].name }} </small> </p>\n  <div text-center padding *ngIf=\"post.featured_image\">\n    <img class=\"featured_image\" [src]=\"post.featured_image\" alt=\"Featured Image\">\n  </div>\n  <div [innerHTML]=\"post.content.rendered\"></div>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/postdetails/postdetails-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/postdetails/postdetails-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PostdetailsPageRoutingModule */

  /***/
  function srcAppPostdetailsPostdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostdetailsPageRoutingModule", function () {
      return PostdetailsPageRoutingModule;
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


    var _postdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./postdetails.page */
    "./src/app/postdetails/postdetails.page.ts");

    var routes = [{
      path: '',
      component: _postdetails_page__WEBPACK_IMPORTED_MODULE_3__["PostdetailsPage"]
    }];

    var PostdetailsPageRoutingModule = function PostdetailsPageRoutingModule() {
      _classCallCheck(this, PostdetailsPageRoutingModule);
    };

    PostdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostdetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/postdetails/postdetails.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/postdetails/postdetails.module.ts ***!
    \***************************************************/

  /*! exports provided: PostdetailsPageModule */

  /***/
  function srcAppPostdetailsPostdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostdetailsPageModule", function () {
      return PostdetailsPageModule;
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


    var _postdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./postdetails-routing.module */
    "./src/app/postdetails/postdetails-routing.module.ts");
    /* harmony import */


    var _postdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./postdetails.page */
    "./src/app/postdetails/postdetails.page.ts");

    var PostdetailsPageModule = function PostdetailsPageModule() {
      _classCallCheck(this, PostdetailsPageModule);
    };

    PostdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _postdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostdetailsPageRoutingModule"]],
      declarations: [_postdetails_page__WEBPACK_IMPORTED_MODULE_6__["PostdetailsPage"]]
    })], PostdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/postdetails/postdetails.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/postdetails/postdetails.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostdetailsPostdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".featured_image {\n  max-width: 100%;\n  max-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdGRldGFpbHMvQzpcXFVzZXJzXFxTaXZha3VtYXJcXERvY3VtZW50c1xcbmV3c2FwcC9zcmNcXGFwcFxccG9zdGRldGFpbHNcXHBvc3RkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9zdGRldGFpbHMvcG9zdGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wb3N0ZGV0YWlscy9wb3N0ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZWRfaW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn0iLCIuZmVhdHVyZWRfaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/postdetails/postdetails.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/postdetails/postdetails.page.ts ***!
    \*************************************************/

  /*! exports provided: PostdetailsPage */

  /***/
  function srcAppPostdetailsPostdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostdetailsPage", function () {
      return PostdetailsPage;
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


    var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/posts.service */
    "./src/app/services/posts.service.ts");

    var PostdetailsPage =
    /*#__PURE__*/
    function () {
      function PostdetailsPage(route, postSrvc) {
        _classCallCheck(this, PostdetailsPage);

        this.route = route;
        this.postSrvc = postSrvc;
      }

      _createClass(PostdetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.post$ = this.route.paramMap.pipe();
        }
      }]);

      return PostdetailsPage;
    }();

    PostdetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
      }];
    };

    PostdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-postdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./postdetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/postdetails/postdetails.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./postdetails.page.scss */
      "./src/app/postdetails/postdetails.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]])], PostdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=postdetails-postdetails-module-es5.js.map