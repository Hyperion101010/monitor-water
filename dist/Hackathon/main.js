(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _comparision_comparision_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comparision/comparision.component */ "./src/app/comparision/comparision.component.ts");
/* harmony import */ var _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monitoring/monitoring.component */ "./src/app/monitoring/monitoring.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");








var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'comparision', component: _comparision_comparision_component__WEBPACK_IMPORTED_MODULE_5__["ComparisionComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'monitoring', component: _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_6__["MonitoringComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n        <button mat-button [matMenuTriggerFor]=\"menu\"><i class=\"material-icons\">\r\n                menu\r\n            </i></button>\r\n        <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item routerLink=\"/login\">Login</button>\r\n            <!-- <button mat-menu-item routerLink=\"/home\">Home</button>\r\n            <button mat-menu-item routerLink=\"/comparision\">Comparision</button>\r\n            <button mat-menu-item routerLink=\"/monitoring\">Monitoring</button> -->\r\n        </mat-menu>\r\n    \r\n    <span>Groundwater Monitoring</span>\r\n\r\n    <!-- <button mat-button routerLink=\"/login\">Login</button> -->\r\n    <button mat-button routerLink=\"/home\">Home</button>\r\n    <button mat-button routerLink=\"/monitoring\">Monitoring</button>\r\n    <button mat-button routerLink=\"/comparision\">Comparision</button>\r\n\r\n    <!-- This fills the remaining space of the current row -->\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n\r\n    <span>Right Aligned Text</span>\r\n \r\n</mat-toolbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFNJSDIwMTlcXGdyb3VuZHdhdGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO3FEQ0NpRDtFRENqRCxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH0iLCIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXHJcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bzsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Hackathon';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _comparision_comparision_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comparision/comparision.component */ "./src/app/comparision/comparision.component.ts");
/* harmony import */ var _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./monitoring/monitoring.component */ "./src/app/monitoring/monitoring.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _comparision_comparision_component__WEBPACK_IMPORTED_MODULE_12__["ComparisionComponent"],
                _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_13__["MonitoringComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__["NgxChartsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem('sessionId')) {
            if (sessionStorage.getItem('sessionId') !== '') {
                return true;
            }
            else {
                // navigate to login page
                // this.router.navigate(['/login']);
                return false;
            }
        }
        else {
            // navigate to login page
            // this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/comparision/comparision.component.html":
/*!********************************************************!*\
  !*** ./src/app/comparision/comparision.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-charts-bar-vertical\r\n  [view]=\"view\"\r\n  [scheme]=\"colorScheme\"\r\n  [results]=\"single\"\r\n  [gradient]=\"gradient\"\r\n  [xAxis]=\"showXAxis\"\r\n  [yAxis]=\"showYAxis\"\r\n  [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\"\r\n  [showYAxisLabel]=\"showYAxisLabel\"\r\n  [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\"\r\n  (select)=\"onSelect($event)\">\r\n</ngx-charts-bar-vertical>\r\n\r\n<ngx-charts-pie-chart\r\n  [view]=\"view\"\r\n  [scheme]=\"colorScheme\"\r\n  [results]=\"single\"\r\n  [doughnut]=true\r\n  >\r\n</ngx-charts-pie-chart>\r\n\r\n<ngx-charts-pie-chart\r\n  [view]=\"view\"\r\n  [scheme]=\"colorScheme\"\r\n  [results]=\"single\"\r\n  [doughnut]=false\r\n  >\r\n</ngx-charts-pie-chart>\r\n\r\n<ngx-charts-heat-map\r\n  [view]=\"view\"\r\n  [scheme]=\"colorScheme\"\r\n  [results]=\"multi\"\r\n  [xAxis]=\"showXAxis\"\r\n  [yAxis]=\"showYAxis\"\r\n  [showXAxisLabel]=\"showXAxisLabel\"\r\n  [showYAxisLabel]=\"showYAxisLabel\"\r\n  [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\"\r\n  >\r\n</ngx-charts-heat-map>"

/***/ }),

/***/ "./src/app/comparision/comparision.component.scss":
/*!********************************************************!*\
  !*** ./src/app/comparision/comparision.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhcmlzaW9uL2NvbXBhcmlzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/comparision/comparision.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comparision/comparision.component.ts ***!
  \******************************************************/
/*! exports provided: ComparisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisionComponent", function() { return ComparisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");



var ComparisionComponent = /** @class */ (function () {
    function ComparisionComponent() {
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        Object.assign(this, { single: _data__WEBPACK_IMPORTED_MODULE_2__["single"], multi: _data__WEBPACK_IMPORTED_MODULE_2__["multi"] });
    }
    ComparisionComponent.prototype.ngOnInit = function () {
    };
    ComparisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comparision',
            template: __webpack_require__(/*! ./comparision.component.html */ "./src/app/comparision/comparision.component.html"),
            styles: [__webpack_require__(/*! ./comparision.component.scss */ "./src/app/comparision/comparision.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComparisionComponent);
    return ComparisionComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
    }
    DataService.prototype.login = function (username, password) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: '_page=1&_limit=1' });
        return this.httpClient.request('GET', 'http://127.0.0.1:8100/login?username=' + username + '&password=' + password, { responseType: 'json', params: params });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: single, multi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
var single = [
    {
        "name": "Germany",
        "value": 8940000
    },
    {
        "name": "USA",
        "value": 5000000
    },
    {
        "name": "France",
        "value": 7200000
    }
];
var multi = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 7300000
            },
            {
                "name": "2011",
                "value": 8940000
            }
        ]
    },
    {
        "name": "USA",
        "series": [
            {
                "name": "2010",
                "value": 7870000
            },
            {
                "name": "2011",
                "value": 8270000
            }
        ]
    },
    {
        "name": "France",
        "series": [
            {
                "name": "2010",
                "value": 5000002
            },
            {
                "name": "2011",
                "value": 5800000
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title>MAP</mat-card-title>\r\n  </mat-card-header>\r\n  <img mat-card-image src=\"http://cgwb.gov.in/MAP/MAJOR%20AQUIFERS.JPG\" alt=\"Major Aquifiers\">\r\n</mat-card>\r\n\r\n<mat-card class=\"example-card-2\">\r\n  <mat-card-header>\r\n    <mat-card-title>ABOUT</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>\r\n      Lorem ipsum dolor si amet.  Lorem  ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.\r\n      Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.\r\n      Lorem ips  um dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dol or si amet. Lore m ipsum dolor si amet.\r\n      Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si  amet. Lorem ipsum dolor si amet.\r\n      Lorem ips um dolor si amet. Lorem ipsum d olor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.\r\n      Lorem ipsum dolor si amet. Lorem ipsum dolor si  a met. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.\r\n      Loremum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.\r\n      Lorem  ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem i psum dolor si amet.\r\n      Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.\r\n      Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.\r\n      Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  float: right;\n  width: 48%; }\n\n.example-card-2 {\n  width: 46%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcU0lIMjAxOVxcZ3JvdW5kd2F0ZXIvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUVkO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gfVxyXG4uZXhhbXBsZS1jYXJkLTIge1xyXG4gICAgd2lkdGg6IDQ2JTsgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title>Login</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form class=\"example-form\">\r\n      <table class=\"example-full-width\" cellspacing=\"0\">\r\n        <tr>\r\n          <td>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n    <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, snackBar, router) {
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.router = router;
        this.showSpinner = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        sessionStorage.removeItem('sessionId');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.dataService.login(this.username, this.password).subscribe(function (data) {
            console.log(data);
            var snackBarRef = _this.snackBar.open('Login status: ', data['status'], {
                duration: 2000,
            });
            snackBarRef.afterDismissed().subscribe(function () {
                if (data['status'] === 'Success') {
                    sessionStorage.setItem('sessionId', data['sessionId']);
                    _this.router.navigate(['/home']);
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());



/***/ }),

/***/ "./src/app/monitordb.service.ts":
/*!**************************************!*\
  !*** ./src/app/monitordb.service.ts ***!
  \**************************************/
/*! exports provided: MonitordbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitordbService", function() { return MonitordbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MonitordbService = /** @class */ (function () {
    function MonitordbService(http) {
        this.http = http;
    }
    MonitordbService.prototype.submitted = function (selectedState, selectedCity) {
        var obs = this.http.get('http://localhost:8100/getData/' + selectedState + '/' + selectedCity);
        return obs;
    };
    MonitordbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MonitordbService);
    return MonitordbService;
}());



/***/ }),

/***/ "./src/app/monitoring/monitoring.component.html":
/*!******************************************************!*\
  !*** ./src/app/monitoring/monitoring.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n  <mat-grid-tile *ngFor=\"let tile of tiles;let i=index\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\">\r\n    <div *ngIf=\"i===0\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Select State\" [(value)]=\"selectedState\" [(ngModel)]=\"selectedState\" (ngModelChange)='handleStateChange(selectedState);' required>\r\n            <mat-option>--</mat-option>\r\n          <div *ngFor=\"let state of states;\">\r\n            <mat-option value=\"{{state.name}}\">{{state.name}}</mat-option>\r\n          </div>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Select District\" [(value)]=\"selectedCity\" [(ngModel)]=\"selectedCity\" (ngModelChange)='submitted();' required>\r\n            <mat-option>--</mat-option>\r\n          <div *ngFor=\"let city of cities;\">\r\n            <mat-option value=\"{{city}}\">{{city}}</mat-option>\r\n          </div>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Quantum of Extraction\" [(value)]=\"selectedQuantum\" required>\r\n            <mat-option>--</mat-option>\r\n          <div *ngFor=\"let quanta of quantumData\">\r\n            <mat-option value=\"{{quanta}}\">{{quanta}}</mat-option>\r\n          </div>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div *ngIf=\"i==3\">\r\n      <mat-card class=\"Chart\">\r\n        <mat-card-header>\r\n          <mat-card-title>Chart</mat-card-title>\r\n        </mat-card-header>\r\n          <img mat-card-image src=\"http://cgwb.gov.in/MAP/MAJOR%20AQUIFERS.JPG\" alt=\"Major Aquifiers\">\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div *ngIf=\"i==1\">\r\n      <mat-card class=\"Alarm\">\r\n        <mat-card-header>\r\n          <mat-card-title>Warnings and Alarms</mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\">\r\n            <h4>NOC Validity</h4>\r\n          </mat-list-item>\r\n          <mat-list role=\"sublist\">\r\n            <mat-list-item role=\"sublistitem\">\r\n              <mat-icon matListIcon>arrow_right_alt</mat-icon>\r\n              <span>Safe:297350</span>\r\n            </mat-list-item>\r\n\r\n            <mat-list-item role=\"sublistitem\">\r\n              <mat-icon matListIcon>arrow_right_alt</mat-icon>\r\n              <span>Renew:523952</span>\r\n            </mat-list-item>\r\n\r\n            <mat-list-item role=\"sublistitem\">\r\n              <mat-icon matListIcon>arrow_right_alt</mat-icon>\r\n              <span>Expired: 248 </span>\r\n            </mat-list-item>\r\n          </mat-list>\r\n\r\n          <mat-list-item role=\"listitem\">\r\n            <h4>Water Usage</h4>\r\n          </mat-list-item>\r\n          <mat-list role=\"sublist\">\r\n\r\n            <mat-list-item role=\"sublistitem\">\r\n              <mat-icon matListIcon>arrow_right_alt</mat-icon>\r\n              <span>Safe: 27305</span>\r\n            </mat-list-item>\r\n\r\n            <mat-list-item role=\"sublistitem\">\r\n              <mat-icon matListIcon>arrow_right_alt</mat-icon>\r\n              <span>Critical: 25830</span>\r\n            </mat-list-item>\r\n\r\n          </mat-list>\r\n        </mat-list>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div *ngIf=\"i==2\">\r\n      <!---Donut Graph here-->\r\n    </div>\r\n  </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/monitoring/monitoring.component.scss":
/*!******************************************************!*\
  !*** ./src/app/monitoring/monitoring.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  padding: 10px; }\n\n.Chart {\n  max-width: 600px; }\n\n.Alarm {\n  margin-top: 100px;\n  float: right;\n  width: 90%; }\n\nmat-list {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9uaXRvcmluZy9EOlxcU0lIMjAxOVxcZ3JvdW5kd2F0ZXIvc3JjXFxhcHBcXG1vbml0b3JpbmdcXG1vbml0b3JpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb25pdG9yaW5nL21vbml0b3JpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uQ2hhcnR7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uQWxhcm17XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxubWF0LWxpc3R7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/monitoring/monitoring.component.ts":
/*!****************************************************!*\
  !*** ./src/app/monitoring/monitoring.component.ts ***!
  \****************************************************/
/*! exports provided: MonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringComponent", function() { return MonitoringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _monitordb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../monitordb.service */ "./src/app/monitordb.service.ts");
/* harmony import */ var _water_harvesting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../water-harvesting.service */ "./src/app/water-harvesting.service.ts");




var MonitoringComponent = /** @class */ (function () {
    function MonitoringComponent(monitordbService, waterHarvestService) {
        this.monitordbService = monitordbService;
        this.waterHarvestService = waterHarvestService;
        this.tiles = [
            { cols: 2, rows: 1, color: 'lightblue' },
            { cols: 1, rows: 8, color: 'lightgreen' },
            { cols: 1, rows: 4, color: 'lightpink' },
            { cols: 2, rows: 7, color: 'lightcoral' },
            { cols: 1, rows: 4, color: 'lightyellow' }
        ];
        this.selectedState = '';
        this.selectedCity = '';
        this.selectedQuantum = '';
        this.states = [];
        this.cities = [];
        this.quantum = [];
        this.quantumData = [
            'Critical',
            'Semi-Critical',
            'Safe',
        ];
        this.statesData = {
            'Andhra Pradesh': ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Prakasam', 'Srikakulam', 'Sri Potti Sriramulu Nellore', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR District, Kadapa (Cuddapah)'],
            'Arunachal Pradesh': ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kra Daadi', 'Kurung Kumey', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Papum Pare', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'],
            'Assam': ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao (North Cachar Hills)', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salamara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'],
            'Bihar': ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran (Motihari)', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur (Bhabua)', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger (Monghyr)', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia (Purnea)', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'],
            'Chhattisgarh': ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada (South Bastar)', 'Dhamtari', 'Durg', 'Gariyaband', 'Janjgir-Champa', 'Jashpur', 'Kabirdham (Kawardha)', 'Kanker (North Bastar)', 'Kondagaon', 'Korba', 'Korea (Koriya)', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur  ', 'Surguja'],
            'Goa': ['North Goa', 'South Goa'],
            'Gujarat': ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha (Palanpur)', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udepur', 'Dahod', 'Dangs (Ahwa)', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kheda (Nadiad)', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada (Rajpipla)', 'Navsari', 'Panchmahal (Godhra)', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha (Himmatnagar)', 'Surat', 'Surendranagar', 'Tapi (Vyara)', 'Vadodara', 'Valsad'],
            'Haryana': ['Bhiwani', 'Ambala', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram (Gurgaon)', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
            'Himachal Pradesh': ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul & Spiti', 'Mandi', 'Shimla', 'Sirmaur (Sirmour)', 'Solan', 'Una'],
            'Jammu and Kashmir': ['Anantnag', 'Bandipore', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kargil', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Leh', 'Poonch', 'Pulwama', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Srinagar', 'Udhampur'],
            'Jharkhand': ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribag', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Seraikela-Kharsawan', 'Simdega', 'West Singhbhum'],
            'Karnataka': ['Bagalkot', 'Ballari (Bellary)', 'Belagavi (Belgaum)', 'Bengaluru (Bangalore) Rural', 'Bengaluru (Bangalore) Urban', 'Bidar', 'Chamarajanagar', 'Chikballapur', 'Chikkamagaluru (Chikmagalur)', 'Chitradurga', 'Dakshina Kannada', 'Davangere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi (Gulbarga)', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru (Mysore)', 'Raichur', 'Ramanagara', 'Shivamogga (Shimoga)', 'Tumakuru (Tumkur)', 'Udupi', 'Uttara Kannada (Karwar)', 'Vijayapura (Bijapur)', 'Yadgir'],
            'Kerala': ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'],
            'Madhya Pradesh': ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'],
            'Maharashtra': ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'],
            'Manipur': ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'],
            'Meghalaya': ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ri Bhoi', 'South Garo Hills', 'South West Garo Hills ', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'],
            'Mizoram': ['Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip'],
            'Nagaland': ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'],
            'Odisha': ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghapur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar (Keonjhar)', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Sonepur', 'Sundargarh'],
            'Punjab': ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Muktsar', 'Nawanshahr (Shahid Bhagat Singh Nagar)', 'Pathankot', 'Patiala', 'Rupnagar', 'Sahibzada Ajit Singh Nagar (Mohali)', 'Sangrur', 'Tarn Taran'],
            'Rajasthan': ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur'],
            'Sikkim': ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'],
            'Tamil Nadu': ['Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Salem', 'Sivaganga', 'Thanjavur', 'Theni', 'Thoothukudi (Tuticorin)', 'Tiruchirappalli', 'Tirunelveli', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'],
            'Telangana': ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhoopalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem Asifabad', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal', 'Nagarkurnool', 'Nalgonda', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal (Rural)', 'Warangal (Urban)', 'Yadadri Bhuvanagiri'],
            'Tripura': ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'],
            'Uttar Pradesh': ['Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi (Chatrapati Sahuji Mahraj Nagar)', 'Amroha (J.P. Nagar)', 'Auraiya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur (Panchsheel Nagar)', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kanshiram Nagar (Kasganj)', 'Kaushambi', 'Kushinagar (Padrauna)', 'Lakhimpur - Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'RaeBareli', 'Rampur', 'Saharanpur', 'Sambhal (Bhim Nagar)', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamali (Prabuddh Nagar)', 'Shravasti', 'Siddharth Nagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'],
            'Uttarakhand': ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'],
            'West Bengal': ['Alipurduar', 'Bankura', 'Birbhum', 'Burdwan (Bardhaman)', 'Cooch Behar', 'Dakshin Dinajpur (South Dinajpur)', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Medinipur (West Medinipur)', 'Purba Medinipur (East Medinipur)', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur (North Dinajpur)'],
            'Andaman and Nicobar Island (UT)': ['Nicobar', 'North and Middle Andaman', 'South Andaman'],
            'Chandigarh (UT)': ['Chandigarh'],
            'Dadra and Nagar Haveli (UT)': ['Dadra & Nagar Haveli'],
            'Daman and Diu (UT)': ['Daman', 'Diu'],
            'Delhi (NCT)': ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East  Delhi', 'North West  Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West  Delhi', 'West Delhi'],
            'Lakshadweep (UT)': ['Lakshadweep'],
            'Puducherry (UT)': ['Karaikal', 'Mahe', 'Pondicherry', 'Yanam'],
        };
        for (var i in this.statesData) {
            this.states.push({
                'name': i
            });
        }
        console.log(this.states);
        for (var i in this.quantumData) {
            this.quantum.push({
                'name': i
            });
        }
        console.log(this.quantum);
    }
    MonitoringComponent.prototype.ngOnInit = function () {
    };
    MonitoringComponent.prototype.handleStateChange = function (selectedStateName) {
        console.log(this.selectedCity);
        this.cities = this.statesData[selectedStateName];
        this.selectedCity = '';
    };
    MonitoringComponent.prototype.submitted = function () {
        this.monitordbService.submitted(this.selectedState, this.selectedCity).subscribe(function (response) {
            console.log(response);
        });
    };
    MonitoringComponent.prototype.harvesting = function () {
        this.waterHarvestService.harvesting().subscribe(function (response) {
            console.log(response);
        });
    };
    MonitoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitoring',
            template: __webpack_require__(/*! ./monitoring.component.html */ "./src/app/monitoring/monitoring.component.html"),
            styles: [__webpack_require__(/*! ./monitoring.component.scss */ "./src/app/monitoring/monitoring.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_monitordb_service__WEBPACK_IMPORTED_MODULE_2__["MonitordbService"], _water_harvesting_service__WEBPACK_IMPORTED_MODULE_3__["WaterHarvestingService"]])
    ], MonitoringComponent);
    return MonitoringComponent;
}());



/***/ }),

/***/ "./src/app/water-harvesting.service.ts":
/*!*********************************************!*\
  !*** ./src/app/water-harvesting.service.ts ***!
  \*********************************************/
/*! exports provided: WaterHarvestingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterHarvestingService", function() { return WaterHarvestingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WaterHarvestingService = /** @class */ (function () {
    function WaterHarvestingService(http) {
        this.http = http;
    }
    WaterHarvestingService.prototype.harvesting = function () {
        var obs = this.http.get('http://localhost:8100/getData');
        return obs;
    };
    WaterHarvestingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WaterHarvestingService);
    return WaterHarvestingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SIH2019\groundwater\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map