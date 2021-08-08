(self["webpackChunktracking_view"] = self["webpackChunktracking_view"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 69134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96900);



const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules, relativeLinkResolution: 'legacy' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 92236);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 11840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96900);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 41407);







class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 1655);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 69134);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 41407);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 92236);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 11840);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96900);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96900);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 90803:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ chunkName: stencil-[request] namespace object ***!
  \***********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-ios.entry.js": [
		86768,
		"common",
		"stencil-ion-action-sheet-ios-entry-js"
	],
	"./ion-action-sheet-md.entry.js": [
		211,
		"common",
		"stencil-ion-action-sheet-md-entry-js"
	],
	"./ion-alert-ios.entry.js": [
		79033,
		"common",
		"stencil-ion-alert-ios-entry-js"
	],
	"./ion-alert-md.entry.js": [
		8133,
		"common",
		"stencil-ion-alert-md-entry-js"
	],
	"./ion-app_8-ios.entry.js": [
		38767,
		"common",
		"stencil-ion-app_8-ios-entry-js"
	],
	"./ion-app_8-md.entry.js": [
		68872,
		"common",
		"stencil-ion-app_8-md-entry-js"
	],
	"./ion-avatar_3-ios.entry.js": [
		61978,
		"common",
		"stencil-ion-avatar_3-ios-entry-js"
	],
	"./ion-avatar_3-md.entry.js": [
		6957,
		"common",
		"stencil-ion-avatar_3-md-entry-js"
	],
	"./ion-back-button-ios.entry.js": [
		9976,
		"common",
		"stencil-ion-back-button-ios-entry-js"
	],
	"./ion-back-button-md.entry.js": [
		78655,
		"common",
		"stencil-ion-back-button-md-entry-js"
	],
	"./ion-backdrop-ios.entry.js": [
		50609,
		"stencil-ion-backdrop-ios-entry-js"
	],
	"./ion-backdrop-md.entry.js": [
		49058,
		"stencil-ion-backdrop-md-entry-js"
	],
	"./ion-button_2-ios.entry.js": [
		93112,
		"common",
		"stencil-ion-button_2-ios-entry-js"
	],
	"./ion-button_2-md.entry.js": [
		30273,
		"common",
		"stencil-ion-button_2-md-entry-js"
	],
	"./ion-card_5-ios.entry.js": [
		494,
		"common",
		"stencil-ion-card_5-ios-entry-js"
	],
	"./ion-card_5-md.entry.js": [
		65576,
		"common",
		"stencil-ion-card_5-md-entry-js"
	],
	"./ion-checkbox-ios.entry.js": [
		32526,
		"common",
		"stencil-ion-checkbox-ios-entry-js"
	],
	"./ion-checkbox-md.entry.js": [
		17145,
		"common",
		"stencil-ion-checkbox-md-entry-js"
	],
	"./ion-chip-ios.entry.js": [
		51353,
		"common",
		"stencil-ion-chip-ios-entry-js"
	],
	"./ion-chip-md.entry.js": [
		35860,
		"common",
		"stencil-ion-chip-md-entry-js"
	],
	"./ion-col_3.entry.js": [
		51462,
		"stencil-ion-col_3-entry-js"
	],
	"./ion-datetime_3-ios.entry.js": [
		26281,
		"common",
		"stencil-ion-datetime_3-ios-entry-js"
	],
	"./ion-datetime_3-md.entry.js": [
		23366,
		"common",
		"stencil-ion-datetime_3-md-entry-js"
	],
	"./ion-fab_3-ios.entry.js": [
		30525,
		"common",
		"stencil-ion-fab_3-ios-entry-js"
	],
	"./ion-fab_3-md.entry.js": [
		19238,
		"common",
		"stencil-ion-fab_3-md-entry-js"
	],
	"./ion-img.entry.js": [
		78967,
		"stencil-ion-img-entry-js"
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		4486,
		"common",
		"stencil-ion-infinite-scroll_2-ios-entry-js"
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		14505,
		"common",
		"stencil-ion-infinite-scroll_2-md-entry-js"
	],
	"./ion-input-ios.entry.js": [
		79705,
		"common",
		"stencil-ion-input-ios-entry-js"
	],
	"./ion-input-md.entry.js": [
		85495,
		"common",
		"stencil-ion-input-md-entry-js"
	],
	"./ion-item-option_3-ios.entry.js": [
		44871,
		"common",
		"stencil-ion-item-option_3-ios-entry-js"
	],
	"./ion-item-option_3-md.entry.js": [
		29755,
		"common",
		"stencil-ion-item-option_3-md-entry-js"
	],
	"./ion-item_8-ios.entry.js": [
		57257,
		"common",
		"stencil-ion-item_8-ios-entry-js"
	],
	"./ion-item_8-md.entry.js": [
		41193,
		"common",
		"stencil-ion-item_8-md-entry-js"
	],
	"./ion-loading-ios.entry.js": [
		2247,
		"common",
		"stencil-ion-loading-ios-entry-js"
	],
	"./ion-loading-md.entry.js": [
		71192,
		"common",
		"stencil-ion-loading-md-entry-js"
	],
	"./ion-menu_3-ios.entry.js": [
		52996,
		"common",
		"stencil-ion-menu_3-ios-entry-js"
	],
	"./ion-menu_3-md.entry.js": [
		27586,
		"common",
		"stencil-ion-menu_3-md-entry-js"
	],
	"./ion-modal-ios.entry.js": [
		14785,
		"common",
		"stencil-ion-modal-ios-entry-js"
	],
	"./ion-modal-md.entry.js": [
		40126,
		"common",
		"stencil-ion-modal-md-entry-js"
	],
	"./ion-nav_2.entry.js": [
		18581,
		"common",
		"stencil-ion-nav_2-entry-js"
	],
	"./ion-popover-ios.entry.js": [
		25614,
		"common",
		"stencil-ion-popover-ios-entry-js"
	],
	"./ion-popover-md.entry.js": [
		69196,
		"common",
		"stencil-ion-popover-md-entry-js"
	],
	"./ion-progress-bar-ios.entry.js": [
		33772,
		"common",
		"stencil-ion-progress-bar-ios-entry-js"
	],
	"./ion-progress-bar-md.entry.js": [
		44009,
		"common",
		"stencil-ion-progress-bar-md-entry-js"
	],
	"./ion-radio_2-ios.entry.js": [
		95604,
		"common",
		"stencil-ion-radio_2-ios-entry-js"
	],
	"./ion-radio_2-md.entry.js": [
		94768,
		"common",
		"stencil-ion-radio_2-md-entry-js"
	],
	"./ion-range-ios.entry.js": [
		51171,
		"common",
		"stencil-ion-range-ios-entry-js"
	],
	"./ion-range-md.entry.js": [
		91712,
		"common",
		"stencil-ion-range-md-entry-js"
	],
	"./ion-refresher_2-ios.entry.js": [
		3231,
		"common",
		"stencil-ion-refresher_2-ios-entry-js"
	],
	"./ion-refresher_2-md.entry.js": [
		33368,
		"common",
		"stencil-ion-refresher_2-md-entry-js"
	],
	"./ion-reorder_2-ios.entry.js": [
		80502,
		"common",
		"stencil-ion-reorder_2-ios-entry-js"
	],
	"./ion-reorder_2-md.entry.js": [
		14476,
		"common",
		"stencil-ion-reorder_2-md-entry-js"
	],
	"./ion-ripple-effect.entry.js": [
		33561,
		"stencil-ion-ripple-effect-entry-js"
	],
	"./ion-route_4.entry.js": [
		58695,
		"common",
		"stencil-ion-route_4-entry-js"
	],
	"./ion-searchbar-ios.entry.js": [
		11782,
		"common",
		"stencil-ion-searchbar-ios-entry-js"
	],
	"./ion-searchbar-md.entry.js": [
		27079,
		"common",
		"stencil-ion-searchbar-md-entry-js"
	],
	"./ion-segment_2-ios.entry.js": [
		94265,
		"common",
		"stencil-ion-segment_2-ios-entry-js"
	],
	"./ion-segment_2-md.entry.js": [
		30566,
		"common",
		"stencil-ion-segment_2-md-entry-js"
	],
	"./ion-select_3-ios.entry.js": [
		46257,
		"common",
		"stencil-ion-select_3-ios-entry-js"
	],
	"./ion-select_3-md.entry.js": [
		58248,
		"common",
		"stencil-ion-select_3-md-entry-js"
	],
	"./ion-slide_2-ios.entry.js": [
		44428,
		"stencil-ion-slide_2-ios-entry-js"
	],
	"./ion-slide_2-md.entry.js": [
		68407,
		"stencil-ion-slide_2-md-entry-js"
	],
	"./ion-spinner.entry.js": [
		2161,
		"common",
		"stencil-ion-spinner-entry-js"
	],
	"./ion-split-pane-ios.entry.js": [
		59469,
		"stencil-ion-split-pane-ios-entry-js"
	],
	"./ion-split-pane-md.entry.js": [
		84671,
		"stencil-ion-split-pane-md-entry-js"
	],
	"./ion-tab-bar_2-ios.entry.js": [
		48073,
		"common",
		"stencil-ion-tab-bar_2-ios-entry-js"
	],
	"./ion-tab-bar_2-md.entry.js": [
		21098,
		"common",
		"stencil-ion-tab-bar_2-md-entry-js"
	],
	"./ion-tab_2.entry.js": [
		83074,
		"common",
		"stencil-ion-tab_2-entry-js"
	],
	"./ion-text.entry.js": [
		2699,
		"common",
		"stencil-ion-text-entry-js"
	],
	"./ion-textarea-ios.entry.js": [
		27599,
		"common",
		"stencil-ion-textarea-ios-entry-js"
	],
	"./ion-textarea-md.entry.js": [
		48272,
		"common",
		"stencil-ion-textarea-md-entry-js"
	],
	"./ion-toast-ios.entry.js": [
		75475,
		"common",
		"stencil-ion-toast-ios-entry-js"
	],
	"./ion-toast-md.entry.js": [
		90854,
		"common",
		"stencil-ion-toast-md-entry-js"
	],
	"./ion-toggle-ios.entry.js": [
		14170,
		"common",
		"stencil-ion-toggle-ios-entry-js"
	],
	"./ion-toggle-md.entry.js": [
		4705,
		"common",
		"stencil-ion-toggle-md-entry-js"
	],
	"./ion-virtual-scroll.entry.js": [
		84606,
		"stencil-ion-virtual-scroll-entry-js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 90803;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map