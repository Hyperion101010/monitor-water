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
/* harmony import */ var _usage_config_usage_config_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usage-config/usage-config.component */ "./src/app/usage-config/usage-config.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");











var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'comparision', component: _comparision_comparision_component__WEBPACK_IMPORTED_MODULE_5__["ComparisionComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'monitoring', component: _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_6__["MonitoringComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'usageconfig', component: _usage_config_usage_config_component__WEBPACK_IMPORTED_MODULE_7__["UsageConfigComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'prediction', component: _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_9__["PredictionComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
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

module.exports = "<mat-toolbar color=\"primary\">\n    <button mat-button [matMenuTriggerFor]=\"menu\"><i class=\"material-icons\">menu</i></button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item routerLink=\"/login\">Login</button>\n        <button mat-menu-item routerLink=\"/usageconfig\">Configure</button>\n    </mat-menu>\n    <span>Groundwater Monitoring </span>\n\n    <button mat-flat-button color=\"primary\" routerLink=\"/home\">Home</button>\n    <button mat-flat-button color=\"primary\" routerLink=\"/map\">Map</button>\n    <button mat-flat-button color=\"primary\" routerLink=\"/monitoring\">Monitoring</button>\n    <button mat-flat-button color=\"primary\" routerLink=\"/comparision\">Analysis</button>\n    <button mat-flat-button color=\"primary\" routerLink=\"/prediction\">Prediction</button>\n\n    <!-- This fills the remaining space of the current row -->\n    <span class=\"example-fill-remaining-space\"></span>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n<br>\n\n<mat-toolbar color=\"primary\">\n    <div id=\"Footer\" class=\"example-fill-remaining-space\">Content Provided and Updated by Central Ground Water Authority (CGWA)<br> Designed and developed by Team hiddenforprivacy, PICT, Pune </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n#Footer {\n  text-align: center;\n  font-size: 12px;\n  padding-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N3YXBuaWwvSGFja2F0aG9uL2dyb3VuZHdhdGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtxRENDaUQ7RURDakQsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gIFxuICAjRm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH0iLCIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87IH1cblxuI0Zvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4OyB9XG4iXX0= */"

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
/* harmony import */ var _usage_config_usage_config_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./usage-config/usage-config.component */ "./src/app/usage-config/usage-config.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");


















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
                _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_13__["MonitoringComponent"],
                _usage_config_usage_config_component__WEBPACK_IMPORTED_MODULE_15__["UsageConfigComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"],
                _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_17__["PredictionComponent"]
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

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"120px\">\n  <mat-grid-tile *ngFor=\"let tile of tiles; let i=index\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background-color]=\"tile.color\">\n    \n    <div *ngIf=\"i===0\">\n      <!-- <a id=\"updatebutton\" mat-raised-button color=\"primary\" target=\"_blank\" href=\"http://cgwa-noc.gov.in/ExternalLogin.aspxReturnUrl=%2fExternalUser%2fApplicantHome.aspx\">Update NOC</a>     -->\n      <mat-form-field class=\"Input\">\n        <input matInput placeholder=\"Enter NOC ID\" [(ngModel)]=\"NOCid\" (keyup.enter)=handleNOCinput($event)>\n      </mat-form-field>\n    </div>\n\n    <div *ngIf=\"i==1\">\n      <h2>Industry Information</h2>\n      <table>\n      <tr><td>Type of Industry:</td><td>Private</td></tr>\n      <tr><td>Type of Structure:</td><td>Bore Well</td></tr>\n      <tr><td>Average discharge/day:</td><td>100 cubic m</td></tr>\n      <tr><td>H.P. of motor:</td><td>3</td></tr>\n      <tr><td>Region: </td><td>Safe</td></tr>\n      </table>\n    </div>\n\n    <div *ngIf=\"i==2\">\n      <h2> Industry Wise Consumption Data </h2>\n      <mat-tab-group>\n        <mat-tab label=\"Daily\">  \n          <ngx-charts-line-chart [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"reuse\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [autoScale]=\"autoScale\" (select)=\"onSelect($event)\">\n          </ngx-charts-line-chart>\n        </mat-tab>\n         <mat-tab label=\"Weekly\">\n           <ngx-charts-line-chart [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"multi\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [autoScale]=\"autoScale\" (select)=\"onSelect($event)\">\n          </ngx-charts-line-chart>\n        </mat-tab>\n         <mat-tab label=\"Monthly\">\n           <ngx-charts-line-chart [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"reuse2\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [autoScale]=\"autoScale\" (select)=\"onSelect($event)\">\n          </ngx-charts-line-chart>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n\n    <div *ngIf=\"i===3\"><br><br><br><br>\n    <h2 id=\"piechart\"> Weekly Water Usage (cubic cms)</h2>\n      <ngx-charts-advanced-pie-chart [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"single\" [gradient]=\"gradient\"\n        (select)=\"onSelect($event)\">\n      </ngx-charts-advanced-pie-chart>\n    </div>\n\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/comparision/comparision.component.scss":
/*!********************************************************!*\
  !*** ./src/app/comparision/comparision.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Input {\n  margin: auto;\n  float: right; }\n\n#updatebutton {\n  margin-left: -70%;\n  margin-top: 12px; }\n\n.graph1 {\n  margin: auto;\n  padding: 10px; }\n\n.graph2 {\n  margin: auto;\n  padding: 1px; }\n\ntd, th {\n  border: 1px solid #000000;\n  text-align: left;\n  padding: 8px;\n  font-size: 20px;\n  background-color: #fdfdfd; }\n\nh2 {\n  margin-left: 40px; }\n\n#piechart {\n  margin-bottom: -50px;\n  margin-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N3YXBuaWwvSGFja2F0aG9uL2dyb3VuZHdhdGVyL3NyYy9hcHAvY29tcGFyaXNpb24vY29tcGFyaXNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUVqQjtFQUNJLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBRWhCO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUNGLEVBQUE7O0FBRUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wYXJpc2lvbi9jb21wYXJpc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5JbnB1dHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jdXBkYXRlYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogLTcwJTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uZ3JhcGgxe1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmdyYXBoMntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMXB4O1xufVxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmRcbn1cblxuaDIge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuI3BpZWNoYXJ0e1xuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _monitordb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../monitordb.service */ "./src/app/monitordb.service.ts");




var ComparisionComponent = /** @class */ (function () {
    function ComparisionComponent(nocService) {
        this.nocService = nocService;
        this.tiles = [
            { cols: 2, rows: 1, color: '#fdfdfd' },
            { cols: 2, rows: 3, color: 'white' },
            { cols: 2, rows: 5, color: 'white' },
            { cols: 2, rows: 3, color: 'white' },
        ];
        this.reuse = [];
        this.reuse2 = [];
        this.view = [600, 400];
        this.view34 = [300, 300];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Duration';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Consumption';
        // trimYAxisTicks = true;
        // yScaleMin = 150;
        this.autoScale = true;
        this.colorScheme = {
            domain: ['#5AA154', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.colorScheme1 = {
            domain: ['#5AA154', '#A10A28']
        };
        Object.assign(this, { single: _data__WEBPACK_IMPORTED_MODULE_2__["single"], multi: _data__WEBPACK_IMPORTED_MODULE_2__["multi"] });
    }
    ComparisionComponent.prototype.ngOnInit = function () {
    };
    ComparisionComponent.prototype.handleNOCinput = function (event) {
        var _this = this;
        this.nocService.nocIndustry(this.NOCid).subscribe(function (response) {
            console.log(response);
            _this.reuse = response;
        });
        this.nocService.nocIndustryMonthly(this.NOCid).subscribe(function (response2) {
            console.log(response2);
            _this.reuse2 = response2;
        });
    };
    ComparisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comparision',
            template: __webpack_require__(/*! ./comparision.component.html */ "./src/app/comparision/comparision.component.html"),
            styles: [__webpack_require__(/*! ./comparision.component.scss */ "./src/app/comparision/comparision.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_monitordb_service__WEBPACK_IMPORTED_MODULE_3__["MonitordbService"]])
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
/*! exports provided: single, month, month2, multi, reuse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "month", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "month2", function() { return month2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reuse", function() { return reuse; });
var single = [
    {
        "name": "Week1",
        "value": 89400
    },
    {
        "name": "Week2",
        "value": 50000
    },
    {
        "name": "Week3",
        "value": 72000
    }
];
var month = [
    {
        "name": "January",
        "value": 10
    },
    {
        "name": "February",
        "value": 20
    },
    {
        "name": "March",
        "value": 34
    },
    {
        "name": "April",
        "value": 56,
    },
    {
        "name": "May",
        "value": 34
    },
    {
        "name": "June",
        "value": 23
    },
    {
        "name": "July",
        "value": 23
    },
    {
        "name": "August",
        "value": 22
    },
    {
        "name": "Spetember",
        "value": 11
    },
    {
        "name": "November",
        "value": 22
    },
    {
        "name": "December",
        "value": 22
    }
];
var month2 = [
    {
        "name": "January",
        "value": 10
    },
    {
        "name": "February",
        "value": 20
    },
    {
        "name": "March",
        "value": 34
    },
    {
        "name": "April",
        "value": 56,
    },
    {
        "name": "May",
        "value": 34
    },
    {
        "name": "June",
        "value": 23
    },
    {
        "name": "July",
        "value": 23
    },
    {
        "name": "August",
        "value": 22
    },
    {
        "name": "Spetember",
        "value": 11
    },
    {
        "name": "November",
        "value": 22
    },
    {
        "name": "December",
        "value": 22
    }
];
var multi = [
    {
        "name": "Week1",
        "series": [
            {
                "name": "Monday",
                "value": 3700
            },
            {
                "name": "Tuesday",
                "value": 3500
            },
            {
                "name": "Wednesday",
                "value": 4800
            },
            {
                "name": "Thursday",
                "value": 2100
            },
            {
                "name": "Friday",
                "value": 3200
            }, {
                "name": "Saturday",
                "value": 4500
            }, {
                "name": "Sunday",
                "value": 5200
            },
        ]
    },
    {
        "name": "Week2",
        "series": [
            {
                "name": "Monday",
                "value": 5300
            },
            {
                "name": "Tuesday",
                "value": 3800
            },
            {
                "name": "Wednesday",
                "value": 2300
            },
            {
                "name": "Thursday",
                "value": 4200
            },
            {
                "name": "Friday",
                "value": 2300
            }, {
                "name": "Saturday",
                "value": 5600
            }, {
                "name": "Sunday",
                "value": 6200
            },
        ]
    },
];
var reuse = [
    {
        "name": "Maharashtra",
        "value": 60
    },
    {
        "name": "Tripura",
        "value": 41.4162806088683
    },
    {
        "name": "Lakshadweep (UT)",
        "value": 40.57553956834533
    },
    {
        "name": "Daman and Diu (UT)",
        "value": 37.12
    },
    {
        "name": "Mizoram",
        "value": 40.374581939799334
    },
    {
        "name": "Kerala",
        "value": 48.24324324324324
    }
];
/*
export var ref = [
  {
    'name' : "Safe",
    'value' : 1000
  },
  {
    'name' : "Semi-Critical",
    'value' : 2000
  },
  {
    'name' : "Critical",
    'value' : 3000
  },
  {
    'name' : "Exploited",
    'value' : 5000
  }
]
*/ 


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <!--<mat-card-title>MAP</mat-card-title>-->\n  </mat-card-header>\n  <img mat-card-image src=\"https://www.indiawaterportal.org/sites/indiawaterportal.org/files/aquifer_systems.jpg\" alt=\"Principle Aquifiers\">\n</mat-card>\n\n<mat-card class=\"example-card-2\">\n  <mat-card-header>\n    <mat-card-title>ABOUT</mat-card-title>\n  </mat-card-header>\n  <mat-card-content id=\"Content\">\n    <p><strong> Central Ground Water Authority</strong> has been constituted under Section 3 (3) of the Environment (Protection) Act, 1986 to regulate and control development and management of ground water resources in the country.</p>\n    Regulatory measures:<p id=\"intent\"> 1. The Central Ground Water Authority is regulating withdrawal of ground water by industries/ projects in 802 Over-exploited and 169 Critical Assessment Units.</p>\n    <p id=\"intent\">2. CGWA has notified 162 critical/ overexploited areas in parts of NCT Delhi, Haryana, Punjab, Andhra Pradesh, Rajasthan, MP, Gujarat, West Bengal, Uttar Pradesh, Karnataka, Tamil Nadu, UT of Puducherry and UT of Diu for control and regulation of development of ground water resources. </p>\n    <p id=\"intent\">3. Construction of new ground water structures is prohibited in the notified areas. Permission of drilling tubewells is being granted only to the Govt. agencies responsible for drinking water supply.</p>\n  </mat-card-content>\n</mat-card>\n\n<br>\n<h3> STATE-WISE GROUNDWATER CONSUMPTION </h3>\n    <ngx-charts-bar-vertical class=\"graph1\"\n      [view]=\"view\" \n      [scheme]=\"colorScheme\" \n      [results]=\"reuse\" \n      [gradient]=\"gradient\" \n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\" \n      [showXAxisLabel]=\"showXAxisLabel\" \n      [showYAxisLabel]=\"showYAxisLabel\" \n      [yAxisLabel]=\"yAxisLabel\" \n      [xAxisLabel]=\"xAxisLabel\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-bar-vertical>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  float: right;\n  width: 48%; }\n\n.example-card-2 {\n  width: 46%; }\n\nh3 {\n  margin-left: 120px; }\n\n#Content {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px;\n  text-indent: 5px; }\n\n#indent {\n  text-indent: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N3YXBuaWwvSGFja2F0aG9uL2dyb3VuZHdhdGVyL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDQ4JTtcbiB9XG4uZXhhbXBsZS1jYXJkLTIge1xuICAgIHdpZHRoOiA0NiU7IFxufVxuaDN7XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuI0NvbnRlbnR7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtaW5kZW50OiA1cHg7XG59XG5cbiNpbmRlbnR7XG4gICAgdGV4dC1pbmRlbnQ6IDIwcHg7XG59Il19 */"

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
/* harmony import */ var _water_harvesting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../water-harvesting.service */ "./src/app/water-harvesting.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(waterHarvestService) {
        var _this = this;
        this.waterHarvestService = waterHarvestService;
        this.reuse = [];
        this.view = [600, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'State';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Consumption %';
        this.colorScheme = {
            domain: ['#0D88E3', '#17159C', '#4948C2', '#0F0E6A']
        };
        this.waterHarvestService.harvesting().subscribe(function (response) {
            // console.log(response);
            for (var state in response) {
                console.log(state, response[state]);
                _this.reuse.push({
                    name: state,
                    value: response[state]
                });
            }
            console.log(_this.reuse);
            _this.reuse = _this.reuse.slice();
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_water_harvesting_service__WEBPACK_IMPORTED_MODULE_2__["WaterHarvestingService"]])
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

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n    <!--<mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>-->\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  margin-left: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N3YXBuaWwvSGFja2F0aG9uL2dyb3VuZHdhdGVyL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjMwJTtcbn0iXX0= */"

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

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile *ngFor=\"let tile of tiles;let i=index\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background-color]=\"tile.color\">\n      <div *ngIf=\"i==1\">\n        <h1> Spatial Assessment: Groundwater Extraction </h1>\n        <mat-form-field id=\"form_field\">\n          <mat-select placeholder=\"Select State\" [(value)]=\"selectedState\" [(ngModel)]=\"selectedState\" (ngModelChange)='handleStateChange(selectedState);'required>\n            <mat-option>--</mat-option>\n              <div *ngFor=\"let state of states;\">\n                <mat-option value=\"{{state.name}}\">{{state.name}}</mat-option>\n              </div>\n          </mat-select>\n        </mat-form-field>\n        <iframe id=\"mapframe\" width=\"800\" height=\"550\" frameBorder=\"0\" scrolling=\"no\" style=\"overflow:hidden;\" src='../../assets/map.html'></iframe>\n      </div>\n  </mat-grid-tile>\n</mat-grid-list>\n      "

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mapframe {\n  margin-left: 17%;\n  margin-top: 4%; }\n\nh1 {\n  margin-left: 2%;\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif; }\n\n#form_field {\n  margin-left: 320px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N3YXBuaWwvSGFja2F0aG9uL2dyb3VuZHdhdGVyL3NyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0Q0FDSixFQUFBOztBQUVBO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcGZyYW1le1xuICAgIG1hcmdpbi1sZWZ0OiAxNyU7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG5oMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZlxufVxuXG4jZm9ybV9maWVsZHtcbiAgICBtYXJnaW4tbGVmdDogMzIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.states = [];
        this.selectedState = '';
        this.tiles = [
            { cols: 1, rows: 8, color: 'white' },
            { cols: 2, rows: 8, color: 'white' },
            { cols: 1, rows: 8, color: 'white' },
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
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
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
        return this.http.get('http://localhost:8100/getData/' + selectedState + '/' + selectedCity);
    };
    MonitordbService.prototype.nocValidity = function () {
        return this.http.get('http://localhost:8100/nocValidity');
    };
    MonitordbService.prototype.sendMail = function (email) {
        return this.http.get('http://localhost:8100/sendMail?to=' + email);
    };
    MonitordbService.prototype.checkUsageDefaulters = function (state, city) {
        return this.http.get('http://localhost:8100/checkUsageDefaulters?state=' + state + '&city=' + city);
    };
    MonitordbService.prototype.nocIndustry = function (nocid) {
        return this.http.get('http://localhost:8100/getNOCIndustry/' + nocid);
    };
    MonitordbService.prototype.nocIndustryMonthly = function (nocid) {
        return this.http.get('http://localhost:8100/getNOCIndustry/monthly/' + nocid);
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

module.exports = "<h1 id=\"welcomemessage\">REGION WISE MONITORING OF GROUNDWATER EXTRACTION</h1>\n<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile *ngFor=\"let tile of tiles;let i=index\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background-color]=\"tile.color\">\n    <div *ngIf=\"i===0\">\n      <mat-form-field>\n        <mat-select placeholder=\"Select State\" [(value)]=\"selectedState\" [(ngModel)]=\"selectedState\" (ngModelChange)='handleStateChange(selectedState);'\n          required>\n          <mat-option>--</mat-option>\n          <div *ngFor=\"let state of states;\">\n            <mat-option value=\"{{state.name}}\">{{state.name}}</mat-option>\n          </div>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select placeholder=\"Select District\" [(value)]=\"selectedCity\" [(ngModel)]=\"selectedCity\" (ngModelChange)='handleCityChange(selectedCity);'\n          required>\n          <mat-option>--</mat-option>\n          <div *ngFor=\"let city of cities;\">\n            <mat-option value=\"{{city}}\">{{city}}</mat-option>\n          </div>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div *ngIf=\"i==1\">\n      <h2 id=\"WandA\">WARNINGS AND ALARMS</h2>\n      <h4 id=\"noc\">NOC Validity</h4>\n      <table>\n        <tr id=\"customTable\">\n          <th id=\"customTable\">Safe NOCs:</th>\n          <td id=\"customTable\">{{safecount}}</td>\n        </tr>\n        <tr id=\"customTable\">\n          <th id=\"customTable\">Renewal alert:</th>\n          <td id=\"customTable\">{{renewcount}}</td>\n        </tr>\n        <tr id=\"customTable\">\n          <th id=\"customTable\">Expired NOCs:</th>\n          <td id=\"customTable\">{{expcount}}</td>\n        </tr>\n      </table>\n    </div>\n\n    <div *ngIf=\"i==2\">\n      <table mat-table [dataSource]=\"waterUsage\" class=\"mat-elevation-z8\" style='border: 1px solid black; '>\n\n        <!--- Note that these columns can be defined in any order.\n                  The actual rendered columns are set as a property on the row definition\" -->\n\n        <!-- Industry Name Column -->\n        <ng-container matColumnDef=\"name_of_industry\">\n          <th mat-header-cell *matHeaderCellDef> Industry </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name_of_industry}} </td>\n        </ng-container>\n\n        <!-- Email Column -->\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef> Email </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n        </ng-container>\n\n        <!-- State Column -->\n        <ng-container matColumnDef=\"state\">\n          <th mat-header-cell *matHeaderCellDef> State </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.state}} </td>\n        </ng-container>\n\n        <!-- City Column -->\n        <ng-container matColumnDef=\"city\">\n          <th mat-header-cell *matHeaderCellDef> City </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.city}} </td>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef> Status </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n        </ng-container>\n\n        <!-- NOC Specified Column -->\n        <ng-container matColumnDef=\"total_water_req\">\n          <th mat-header-cell *matHeaderCellDef> NOC Specified </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.total_water_req}} </td>\n        </ng-container>\n\n        <!-- Consumption Column -->\n        <ng-container matColumnDef=\"consumption\">\n          <th mat-header-cell *matHeaderCellDef> Consumption </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.consumption}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n\n    <div *ngIf=\"i==3\">\n      <strong>CLASSIFICATION OF INDUSTRIES WITH RESPECT TO QUANTUM OF EXTRACTION</strong>\n      <br><br>\n      <ngx-charts-bar-vertical class=\"graph1\" [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"totals\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\n        [yAxis]=\"showYAxis\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n        (select)=\"onSelect($event)\">\n      </ngx-charts-bar-vertical>\n    </div>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/monitoring/monitoring.component.scss":
/*!******************************************************!*\
  !*** ./src/app/monitoring/monitoring.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  padding: 10px; }\n\n#welcomemessage {\n  text-align: center; }\n\n#WandA {\n  color: blue;\n  margin-left: -40px; }\n\n.Alarm {\n  margin-top: 100px;\n  float: right;\n  width: 90%; }\n\nmat-list {\n  padding: 0px; }\n\n#customTable {\n  border: 1px solid #000000;\n  text-align: left;\n  padding: 8px;\n  font-size: 20px;\n  background-color: #fdfdfd; }\n\n#predict {\n  margin-left: 200px; }\n\n#noc {\n  margin-left: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N3YXBuaWwvSGFja2F0aG9uL2dyb3VuZHdhdGVyL3NyYy9hcHAvbW9uaXRvcmluZy9tb25pdG9yaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsWUFBVztFQUNYLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVksRUFBQTs7QUFPaEI7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQ0YsRUFBQTs7QUFPQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9uaXRvcmluZy9tb25pdG9yaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiN3ZWxjb21lbWVzc2FnZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNXYW5kQSB7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuXG4uQWxhcm17XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxubWF0LWxpc3R7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4vLyB0YWJsZSB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgIH1cblxuI2N1c3RvbVRhYmxlIHsgICBcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmRcbn1cblxuLy8gLnRhYmxle1xuLy8gICAgIG1hcmdpbi1yaWdodDogLTEwMHB4O1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4jcHJlZGljdHtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG59XG4jbm9je1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuIl19 */"

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



var MonitoringComponent = /** @class */ (function () {
    function MonitoringComponent(monitordbService) {
        var _this = this;
        this.monitordbService = monitordbService;
        this.tiles = [
            { cols: 2, rows: 1, color: 'white' },
            { cols: 2, rows: 3, color: 'white' },
            { cols: 2, rows: 7, color: '#FDFDFD' },
            { cols: 2, rows: 5, color: '#ECECEC' },
        ];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Quantum of Extraction';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Number of Industries';
        this.colorScheme = {
            domain: ['#0D88E3', '#17159C', '#4948C2', '#0F0E6A']
        };
        this.email = 'contact@technobuz.in';
        this.waterUsage = [];
        this.totals = [];
        this.displayedColumns = ['name_of_industry', 'email', 'state', 'city', 'status', 'total_water_req', 'consumption'];
        this.selectedState = '';
        this.selectedCity = '';
        this.selectedQuantum = '';
        this.states = [];
        this.cities = [];
        this.quantum = [];
        this.count = 0;
        this.reuse = [];
        this.expcount = 0;
        this.renewcount = 0;
        this.safecount = 0;
        this.view = [600, 400];
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
        // Object.assign(this, { single, multi });
        this.checkUsageDefaulters();
        this.monitordbService.nocValidity().subscribe(function (response) {
            console.log(response);
            _this.expcount = response[0].value;
            _this.renewcount = response[1].value;
            _this.safecount = response[2].value;
        });
    }
    MonitoringComponent.prototype.ngOnInit = function () {
    };
    MonitoringComponent.prototype.sendMail = function () {
        this.monitordbService.sendMail(this.email).subscribe(function (response) {
            console.log(response);
        });
    };
    MonitoringComponent.prototype.handleStateChange = function (selectedStateName) {
        console.log(this.selectedCity);
        this.cities = this.statesData[selectedStateName];
        this.selectedCity = '';
        this.checkUsageDefaulters();
    };
    MonitoringComponent.prototype.handleCityChange = function (selectedCity) {
        console.log(this.selectedCity);
        this.checkUsageDefaulters();
    };
    MonitoringComponent.prototype.checkUsageDefaulters = function () {
        var _this = this;
        this.monitordbService.checkUsageDefaulters(this.selectedState, this.selectedCity).subscribe(function (response) {
            console.log('checkUsageDefaulters', response);
            _this.waterUsage = response['defaulters'];
            _this.totals = response['totals'];
        });
    };
    MonitoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitoring',
            template: __webpack_require__(/*! ./monitoring.component.html */ "./src/app/monitoring/monitoring.component.html"),
            styles: [__webpack_require__(/*! ./monitoring.component.scss */ "./src/app/monitoring/monitoring.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_monitordb_service__WEBPACK_IMPORTED_MODULE_2__["MonitordbService"]])
    ], MonitoringComponent);
    return MonitoringComponent;
}());



/***/ }),

/***/ "./src/app/prediction/prediction.component.html":
/*!******************************************************!*\
  !*** ./src/app/prediction/prediction.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 id=\"predict\"> PREDICTION OF INCREASE IN WATER CONSUMPTION OVER THE NEXT TEN YEARS </h3>\n<br>\n<img width=\"290\" height=\"270\" src=\"../assets/test.jpg\">\n<img width=\"290\" height=\"270\" src=\"../assets/training.jpg\">\n<br>"

/***/ }),

/***/ "./src/app/prediction/prediction.component.scss":
/*!******************************************************!*\
  !*** ./src/app/prediction/prediction.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZWRpY3Rpb24vcHJlZGljdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/prediction/prediction.component.ts":
/*!****************************************************!*\
  !*** ./src/app/prediction/prediction.component.ts ***!
  \****************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PredictionComponent = /** @class */ (function () {
    function PredictionComponent() {
    }
    PredictionComponent.prototype.ngOnInit = function () {
    };
    PredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prediction',
            template: __webpack_require__(/*! ./prediction.component.html */ "./src/app/prediction/prediction.component.html"),
            styles: [__webpack_require__(/*! ./prediction.component.scss */ "./src/app/prediction/prediction.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PredictionComponent);
    return PredictionComponent;
}());



/***/ }),

/***/ "./src/app/usage-config/usage-config.component.html":
/*!**********************************************************!*\
  !*** ./src/app/usage-config/usage-config.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Usage Configuration</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"warningLimit\" [(ngModel)]=\"usageConfig.warningLimit\" name=\"warningLimit\" required>times water limit\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"alertLimit\" [(ngModel)]=\"usageConfig.alertLimit\" name=\"alertLimit\" required>times water limit\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n    <!-- <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner> -->\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"saveLimits()\" color=\"primary\">Save</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/usage-config/usage-config.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/usage-config/usage-config.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzYWdlLWNvbmZpZy91c2FnZS1jb25maWcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/usage-config/usage-config.component.ts":
/*!********************************************************!*\
  !*** ./src/app/usage-config/usage-config.component.ts ***!
  \********************************************************/
/*! exports provided: UsageConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageConfigComponent", function() { return UsageConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _water_harvesting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../water-harvesting.service */ "./src/app/water-harvesting.service.ts");



var UsageConfigComponent = /** @class */ (function () {
    function UsageConfigComponent(waterHarvestService) {
        var _this = this;
        this.waterHarvestService = waterHarvestService;
        this.usageConfig = {
            alertLimit: null,
            warningLimit: null,
            renewalNoticePeriod: null
        };
        this.waterHarvestService.getUsageConfig().subscribe(function (response) {
            console.log('getUsageConfig', response);
            _this.usageConfig.alertLimit = response[0].alertLimit;
            _this.usageConfig.warningLimit = response[0].warningLimit;
            _this.usageConfig.renewalNoticePeriod = response[0].renewalNoticePeriod;
        });
    }
    UsageConfigComponent.prototype.ngOnInit = function () {
    };
    UsageConfigComponent.prototype.saveLimits = function () {
        this.waterHarvestService.setUsageConfig(this.usageConfig.warningLimit, this.usageConfig.alertLimit).subscribe(function (response) {
            console.log('setUsageConfig', response);
        });
    };
    UsageConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usage-config',
            template: __webpack_require__(/*! ./usage-config.component.html */ "./src/app/usage-config/usage-config.component.html"),
            styles: [__webpack_require__(/*! ./usage-config.component.scss */ "./src/app/usage-config/usage-config.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_water_harvesting_service__WEBPACK_IMPORTED_MODULE_2__["WaterHarvestingService"]])
    ], UsageConfigComponent);
    return UsageConfigComponent;
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
        return this.http.get('http://localhost:8100/getPercentage');
    };
    WaterHarvestingService.prototype.getUsageConfig = function () {
        return this.http.get('http://localhost:8100/getUsageConfig');
    };
    WaterHarvestingService.prototype.setUsageConfig = function (warningLimit, alertLimit) {
        return this.http.get('http://localhost:8100/setUsageConfig?warningLimit=' + warningLimit + '&alertLimit=' + alertLimit);
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

module.exports = __webpack_require__(/*! /home/swapnil/Hackathon/groundwater/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map