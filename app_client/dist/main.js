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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<navbar [aUser]=\"aUser\" ></navbar>\n<router-outlet></router-outlet> -->\n\n<div class=\"container body\">\n    <div class=\"main_container\">\n      <app-sidebar></app-sidebar>\n\n      <!-- top navigation -->\n      <navbar class=\"top_nav\" [aUser]=\"aUser\" ></navbar>\n      <!-- /top navigation -->\n      <div class=\"right_col\" role=\"main\">   \n        <router-outlet ></router-outlet> \n      </div>\n      \n    </div>\n  </div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.user = {
            address: '',
            email: 'alexionutale@me.com',
            name: 'Ionel Utale',
            phone: '',
            profileImage: '../assets/images/ion.utale.profile.jpg',
            qualification: ''
        };
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _common_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/navigation/navbar/navbar.component */ "./src/app/common/navigation/navbar/navbar.component.ts");
/* harmony import */ var _common_services_nav_bar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/services/nav-bar.service */ "./src/app/common/services/nav-bar.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/navigation/sidebar/sidebar.component */ "./src/app/common/navigation/sidebar/sidebar.component.ts");
/* harmony import */ var _components_smart_input_smart_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/smart-input/smart-input.component */ "./src/app/components/smart-input/smart-input.component.ts");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "./src/app/components/users-list/users-list.component.ts");
/* harmony import */ var _components_profile_image_profile_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/profile-image/profile-image.component */ "./src/app/components/profile-image/profile-image.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// plugin

var appRoutes = [
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: 'profile/:username', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'logout', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'users', component: _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_16__["UsersListComponent"] },
    { path: 'users/:search', component: _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_16__["UsersListComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _common_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _common_navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _components_smart_input_smart_input_component__WEBPACK_IMPORTED_MODULE_15__["SmartInputComponent"],
                _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_16__["UsersListComponent"],
                _components_profile_image_profile_image_component__WEBPACK_IMPORTED_MODULE_17__["ProfileImageComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__["FileSelectDirective"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
            ],
            providers: [_common_services_nav_bar_service__WEBPACK_IMPORTED_MODULE_11__["NavBarService"] /*AuthenticationService, , DataService*/],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1 class=\"form-signin-heading\">Sign in</h1>\n      <p class=\"lead\">Not a member? Please <a routerLink=\"../register\">register</a> instead.</p>\n      <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Sign in!</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/authentication.service */ "./src/app/common/services/authentication.service.ts");
/* harmony import */ var _common_services_nav_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/nav-bar.service */ "./src/app/common/services/nav-bar.service.ts");
/* harmony import */ var _common_services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/user */ "./src/app/common/services/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authentication, router, navSer) {
        this.authentication = authentication;
        this.router = router;
        this.navSer = navSer;
        this.isLoggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.credentials = {
            email: '',
            password: ''
        };
    };
    // submit and go to profile
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('login pressed');
        this.authentication.login(this.credentials, function () {
            _this.router.navigate(['/profile/' + _this.credentials.email.split('@')[0]]);
        });
    };
    ;
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")],
            providers: [_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _common_services_user__WEBPACK_IMPORTED_MODULE_4__["User"]]
        }),
        __metadata("design:paramtypes", [_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_services_nav_bar_service__WEBPACK_IMPORTED_MODULE_3__["NavBarService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Register</h1>\n      <p class=\"lead\">Already a member? Please <a routerLink=\"../login\">log in</a> instead.</p>\n      <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\"  name=\"name\" placeholder=\"Enter your name\" required [(ngModel)]=\"credentials.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"surname\">Surname</label>\n          <input type=\"text\" class=\"form-control\" id=\"suename\"  name=\"surname\" placeholder=\"Enter your surname\" required [(ngModel)]=\"credentials.surname\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter email\" required [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\"  name=\"password\" id=\"password\" placeholder=\"Password\" required [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Register!</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/authentication.service */ "./src/app/common/services/authentication.service.ts");
/* harmony import */ var _common_services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/user */ "./src/app/common/services/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authentication, router) {
        this.authentication = authentication;
        this.router = router;
    }
    // clear Credentials when inizializing
    RegisterComponent.prototype.ngOnInit = function () {
        this.credentials = {
            email: '',
            password: '',
            name: '',
            surname: ''
        };
    };
    // submit and go to profile
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('form action');
        console.log('credentials :', this.credentials);
        this.authentication.register(this.credentials, function () {
            console.log('credentials --', _this.credentials);
            _this.router.navigate(['/profile/' + _this.credentials.email.split('@')[0]]);
        });
    };
    ;
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")],
            providers: [_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _common_services_user__WEBPACK_IMPORTED_MODULE_3__["User"]]
        }),
        __metadata("design:paramtypes", [_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/common/navigation/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/common/navigation/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.user-profile {\n    color: #5E6974 !important\n}\n\n.user-profile img {\n    width: 29px;\n    height: 29px;\n    border-radius: 50%;\n    margin-right: 10px\n}"

/***/ }),

/***/ "./src/app/common/navigation/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/common/navigation/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <div id=\"navbar-main\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"!isLoggedIn\"><a routerLink=\"login\">Sign in</a></li>\n                <li *ngIf=\"isLoggedIn\">\n                    <a class=\"user-profile\" md-button [mdMenuTriggerFor]=\"menu\" >\n                        <img src=\"./img/user.png\" alt=\"\">{{ aUser.name }}\n                        <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                    </a>\n                    <md-menu class=\"\" #menu=\"mdMenu\" yPosition=\"above\" [overlapTrigger]=\"false\">\n                        <button md-menu-item routerLink=\"profile\">Profile</button>\n                        <button md-menu-item *ngIf=\"isLoggedIn\" (click)=\"logout()\" routerLink=\"logout\">Logout</button>                        \n                    </md-menu>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n-->\n<!-- top navigation -->\n<div class=\"top_nav\">\n    <div class=\"nav_menu\">\n      <nav>\n        <div class=\"nav toggle\">\n          <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\n        </div>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!isLoggedIn\"><a routerLink=\"login\">Sign in</a></li>\n        <li *ngIf=\"isLoggedIn\">\n            <a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n              <img [src]=\"user.profileImage\" alt=\"\">{{ user.name }}\n              <span class=\" fa fa-angle-down\"></span>\n            </a>\n            <ul class=\"dropdown-menu dropdown-usermenu pull-right\">\n              <li>\n                <!--<a  routerLink=\"profile\"> Profile</a>-->\n                <a  (click)=\"seeProfile()\"> Profile</a>\n              </li>\n              <li>\n                <a href=\"javascript:;\">\n                  <span class=\"badge bg-red pull-right\">50%</span>\n                  <span>Settings</span>\n                </a>\n              </li>\n              <li><a href=\"javascript:;\">Help</a></li>\n              <li><a (click)=\"logout()\" routerLink=\"logout\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\n            </ul>\n          </li>\n\n\n        </ul>\n      </nav>\n    </div>\n  </div>\n  <!-- /top navigation -->\n"

/***/ }),

/***/ "./src/app/common/navigation/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/navigation/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/common/services/data.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/common/services/authentication.service.ts");
/* harmony import */ var _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/nav-bar.service */ "./src/app/common/services/nav-bar.service.ts");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user */ "./src/app/common/services/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(data, auth, user, navState$, router) {
        var _this = this;
        this.data = data;
        this.auth = auth;
        this.user = user;
        this.navState$ = navState$;
        this.router = router;
        this.currentUser = '';
        this.isLoggedIn = false;
        this.navState$.navState$.subscribe(function (aUser) {
            _this.user = aUser;
            _this.isLoggedInF();
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedInF();
        this.navState$.navState$.subscribe(function (aUser) {
            _this.user = aUser;
            _this.isLoggedInF();
        });
    };
    // check if is logedin
    NavbarComponent.prototype.isLoggedInF = function () {
        this.isLoggedIn = this.auth.isLoggedIn();
        if (this.isLoggedIn) {
            this.user = this.auth.currentUser();
            this.currentUser = this.user.name;
        }
        else {
            // if not loged in, then route to home
            this.currentUser = null;
            this.router.navigate(['/home']);
        }
        // call again to remove the user name button on the navigation bar
        this.isLoggedIn = this.auth.isLoggedIn();
    };
    // go to profile of this particular user
    NavbarComponent.prototype.seeProfile = function () {
        this.navState$.setNavBarState(this.user);
        this.router.navigate(['/profile/' + this.currentUserUserName()]);
    };
    // util function that extracts the username
    NavbarComponent.prototype.currentUserUserName = function () {
        var username = this.user.email.split('@')[0];
        return "" + username;
    };
    NavbarComponent.prototype.logout = function () {
        // logout
        this.auth.logout();
        // run check if is still loged in, which should not
        // this will force an update of the nav bar with new links
        // called to update the sidebar 
        this.navState$.setNavBarState(this.user);
        this.isLoggedInF();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _services_user__WEBPACK_IMPORTED_MODULE_5__["User"])
    ], NavbarComponent.prototype, "aUser", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/common/navigation/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/common/navigation/navbar/navbar.component.css")],
            providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_user__WEBPACK_IMPORTED_MODULE_5__["User"]]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_user__WEBPACK_IMPORTED_MODULE_5__["User"],
            _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_4__["NavBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/common/navigation/sidebar/sidebar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/common/navigation/sidebar/sidebar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/navigation/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/common/navigation/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 left_col\">\n  <div class=\"left_col scroll-view\">\n    <div class=\"navbar nav_title\" style=\"border: 0;\">\n      <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-paw\"></i> <span>Personel</span></a>\n    </div>\n\n    <div class=\"clearfix\"></div>\n\n    <!-- menu profile quick info -->\n    <div *ngIf=\"isLoggedIn\" class=\"profile clearfix\">\n      <div class=\"profile_pic\">\n        <img [src]=\"user.profileImage\" alt=\"...\" class=\"img-circle profile_img\">\n      </div>\n      <div class=\"profile_info\">\n        <span>Welcome,</span>\n        <h2>{{ user.name }}</h2>\n      </div>\n    </div>\n    <!-- /menu profile quick info -->\n    <br />\n\n    <!-- sidebar menu -->\n    <div *ngIf=\"isLoggedIn\" id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\n      <div class=\"menu_section\">\n        <h3>General</h3>\n        <ul class=\"nav side-menu\">\n          <li><a><i class=\"fa fa-home\"></i> Home <span class=\"fa fa-chevron-down\"></span></a>\n            <ul class=\"nav child_menu\">\n              <li><a href=\"index.html\">Dashboard</a></li>\n              <li><a href=\"index2.html\">Dashboard2</a></li>\n              <li><a href=\"index3.html\">Dashboard3</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- /sidebar menu -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/navigation/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/common/navigation/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/common/services/authentication.service.ts");
/* harmony import */ var _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nav-bar.service */ "./src/app/common/services/nav-bar.service.ts");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user */ "./src/app/common/services/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(auth, user, navState$) {
        var _this = this;
        this.auth = auth;
        this.user = user;
        this.navState$ = navState$;
        this.isLoggedIn = false;
        this.navState$.navState$.subscribe(function (aUser) {
            _this.user = aUser;
            _this.isLoggedInF();
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.isLoggedInF = function () {
        this.isLoggedIn = this.auth.isLoggedIn();
        if (this.isLoggedIn) {
            this.user = this.auth.currentUser();
            this.currentUser = this.user;
            // console.log(this.user);
        }
        this.isLoggedIn = this.auth.isLoggedIn();
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/common/navigation/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/common/navigation/sidebar/sidebar.component.css")],
            providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_user__WEBPACK_IMPORTED_MODULE_3__["User"]]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _services_user__WEBPACK_IMPORTED_MODULE_3__["User"],
            _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_2__["NavBarService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/common/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "./src/app/common/services/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, user, document) {
        this.http = http;
        this.user = user;
        this.document = document;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // console.log(this.document.location.origin);
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
    };
    ;
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('mean-token');
    };
    ;
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        var payload;
        if (token !== 'undefined' && token != null) {
            payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    ;
    AuthenticationService.prototype.currentUser = function () {
        if (this.isLoggedIn()) {
            var token = this.getToken();
            var payload = token.split('.')[1];
            var aUser = void 0;
            payload = atob(payload);
            aUser = JSON.parse(payload);
            this.user.name = aUser.name;
            this.user.email = aUser.email;
            this.user.profileImage = aUser.profileImage;
            return this.user;
        }
    };
    ;
    AuthenticationService.prototype.register = function (user, callback) {
        var _this = this;
        return this.http.post(this.getUrl() + '/api/register', user).subscribe(function (data) {
            console.log(JSON.parse(data['_body']));
            _this.saveToken(JSON.parse(data['_body']).token);
            _this.currentUser();
            callback();
        });
    };
    ;
    AuthenticationService.prototype.login = function (user, callback) {
        var _this = this;
        return this.http.post(this.getUrl() + '/api/login', user).subscribe(function (data) {
            console.log("JSON.parse(data['_body']).token:", data);
            _this.saveToken(JSON.parse(data['_body']).token);
            _this.currentUser();
            callback();
        });
    };
    ;
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('mean-token');
        this.currentUser();
    };
    ;
    // development only
    AuthenticationService.prototype.getUrl = function () {
        var reg = /localhost/gmi;
        return reg.test(this.document.location.origin) ? 'http://127.0.0.1:8080' : this.document.location.origin;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _user__WEBPACK_IMPORTED_MODULE_5__["User"], Object])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/common/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/common/services/authentication.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    DataService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
    };
    DataService.prototype.getProfile = function (username, callBackRes, callBackErr) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.createAuthorizationHeader(headers);
        this.http.get('/api/profile/' + username, {
            headers: headers
        }).subscribe(function (data) {
            callBackRes(data);
        }, function (err) {
            callBackErr(err);
        });
        return true;
    };
    // save profile information
    // or maybe update
    DataService.prototype.saveProfile = function (data, callBackRes, callBackErr) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.createAuthorizationHeader(headers);
        this.http.post('/api/save/profile', data, {
            headers: headers
        }).subscribe(function (aData) {
            callBackRes(aData);
        }, function (err) {
            callBackErr(err);
        });
    };
    // get a pecific user
    DataService.prototype.getUserByName = function (url, callBackRes, callBackErr) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.createAuthorizationHeader(headers);
        this.http.get(url, {
            headers: headers
        }).subscribe(function (aUser) {
            callBackRes(JSON.parse(aUser['_body']));
        }, function (err) {
            callBackErr(err);
        });
    };
    // get all users
    DataService.prototype.getUsers = function (url, callBackRes, callBackErr) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        }).subscribe(function (users) {
            callBackRes(JSON.parse(users['_body']));
        }, function (err) {
            callBackErr(err);
        });
    };
    // upload files service
    DataService.prototype.uploadFile = function (url, data, callBackRes, callBackErr) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.createAuthorizationHeader(headers);
        // post request needs url, data and then the header
        this.http.post(url, data, {
            headers: headers
        }).subscribe(function (users) {
            callBackRes(JSON.parse(users['_body']));
        }, function (err) {
            callBackErr(err);
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/common/services/nav-bar.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common/services/nav-bar.service.ts ***!
  \****************************************************/
/*! exports provided: NavBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarService", function() { return NavBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarService = /** @class */ (function () {
    function NavBarService() {
        this.navStateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.navState$ = this.navStateSource.asObservable();
    }
    NavBarService.prototype.setNavBarState = function (user) {
        this.navStateSource.next(user);
    };
    NavBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavBarService);
    return NavBarService;
}());



/***/ }),

/***/ "./src/app/common/services/user.ts":
/*!*****************************************!*\
  !*** ./src/app/common/services/user.ts ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.qualification = '';
        this.address = {
            street: '',
            number: '',
            city: '',
            postalCode: '',
            country: '',
            full: ''
        };
        this.phone = '';
    }
    return User;
}());

;


/***/ }),

/***/ "./src/app/components/profile-image/profile-image.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/profile-image/profile-image.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: auto;\n    transition: .5s ease;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n  }\n\n  .middle {\n    transition: .5s ease;\n    opacity: 0;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%)\n  }\n\n  .container:hover .image {\n    opacity: 0.3;\n  }\n\n  .container:hover .middle {\n    opacity: 1;\n  }\n\n  .text {\n    background-color: rgb(150, 158, 173);\n    color: white;\n    font-size: 16px;\n    padding: 16px 32px;\n  }\n\n  #inputPhoto {\n      display: none;\n  }"

/***/ }),

/***/ "./src/app/components/profile-image/profile-image.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/profile-image/profile-image.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img class=\"img-responsive avatar-view image\" (click)=\"editProfilePicture()\" [src]=\"profileImage\" alt=\"Avatar\" title=\"Change the avatar\">\n  <div class=\"middle\">\n    <div class=\"text\">edit</div>\n  </div>\n</div>\n<!-- File input for the file-upload plugin, with special ng2-file-upload directive called ng2FileSelect -->\n<input id=\"inputPhoto\" type=\"file\" name=\"photo\" (change)=\"fileChanged($event)\" placeholder=\"Upload File\" accept=\".png,.jpg\"\n/>\n"

/***/ }),

/***/ "./src/app/components/profile-image/profile-image.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-image/profile-image.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImageComponent", function() { return ProfileImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/data.service */ "./src/app/common/services/data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileImageComponent = /** @class */ (function () {
    function ProfileImageComponent(data, http) {
        this.data = data;
        this.http = http;
        this.profileImage = '';
        this.userID = '';
        // declare a property called fileuploader and assign it to an instance of a new fileUploader.
        // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: '/api/upload', itemAlias: 'photo' });
    }
    ProfileImageComponent.prototype.ngOnInit = function () {
    };
    ProfileImageComponent.prototype.fileEvent = function (fileInput) {
        // let file = fileInput.target.files[0];
        var file = event.target.files[0];
        var fileName = file.name;
    };
    ProfileImageComponent.prototype.fileChanged = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('photo', file, file.name);
            formData.append('userID', this.userID);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            /** No need to include Content-Type in Angular 4 */
            // actualy if you apend the "Content-Type" in angular 4, it will only bring trouble. just don't
            // headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
            this.http.post('/api/upload', formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error); })
                .subscribe(function (data) {
                _this.profileImage = "./images/" + data.image;
            }, function (error) { return console.log(error); });
        }
    };
    ProfileImageComponent.prototype.editProfilePicture = function () {
        var input = document.getElementById('inputPhoto');
        input.addEventListener('click', function (e) { });
        // opening dialog
        input.click();
        console.log('edit image');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileImageComponent.prototype, "profileImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileImageComponent.prototype, "userID", void 0);
    ProfileImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-image',
            template: __webpack_require__(/*! ./profile-image.component.html */ "./src/app/components/profile-image/profile-image.component.html"),
            styles: [__webpack_require__(/*! ./profile-image.component.css */ "./src/app/components/profile-image/profile-image.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProfileImageComponent);
    return ProfileImageComponent;
}());



/***/ }),

/***/ "./src/app/components/smart-input/smart-input.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/smart-input/smart-input.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    display: inline;\n}"

/***/ }),

/***/ "./src/app/components/smart-input/smart-input.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/smart-input/smart-input.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!editMode\">\n  {{valoare}}\n</p>\n<input *ngIf=\"editMode\" type=\"text\" [(value)]=\"valoare\" (keyup)=\"setValoare($event)\">\n"

/***/ }),

/***/ "./src/app/components/smart-input/smart-input.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/smart-input/smart-input.component.ts ***!
  \*****************************************************************/
/*! exports provided: SmartInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartInputComponent", function() { return SmartInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartInputComponent = /** @class */ (function () {
    function SmartInputComponent() {
        this.editMode = false;
        this.valoare = 'default value';
        this.type = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SmartInputComponent.prototype.ngOnInit = function () {
    };
    SmartInputComponent.prototype.setValoare = function (event) {
        this.valoare = event.target.value;
        this.valueChange.emit(this.valoare);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmartInputComponent.prototype, "editMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmartInputComponent.prototype, "valoare", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmartInputComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SmartInputComponent.prototype, "valueChange", void 0);
    SmartInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smart-input',
            template: __webpack_require__(/*! ./smart-input.component.html */ "./src/app/components/smart-input/smart-input.component.html"),
            styles: [__webpack_require__(/*! ./smart-input.component.css */ "./src/app/components/smart-input/smart-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmartInputComponent);
    return SmartInputComponent;
}());



/***/ }),

/***/ "./src/app/components/users-list/users-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users-list/users-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title\">\n  <div class=\"title_left\">\n    <h3>All Employees </h3>\n  </div>\n\n  <div class=\"title_right\">\n    <div class=\"col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search\">\n      <div class=\"input-group\">\n        <input (keyup)=\"searchBarValueChange($event)\" type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"button\">Go!</button>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n    <ul class=\"pagination pagination-split\" (click)=\"updateUsers()\">\n      <li><a routerLink=\"../A\">A</a></li>\n      <li><a routerLink=\"../B\">B</a></li>\n      <li><a routerLink=\"../C\">C</a></li>\n      <li><a routerLink=\"../D\">D</a></li>\n      <li><a routerLink=\"../E\">E</a></li>\n      <li><a routerLink=\"../F\">F</a></li>\n      <li><a routerLink=\"../G\">G</a></li>\n      <li><a routerLink=\"../H\">H</a></li>\n      <li><a routerLink=\"../I\">I</a></li>\n      <li><a routerLink=\"../J\">J</a></li>\n      <li><a routerLink=\"../K\">K</a></li>\n      <li><a routerLink=\"../L\">L</a></li>\n      <li><a routerLink=\"../M\">M</a></li>\n      <li><a routerLink=\"../N\">N</a></li>\n      <li><a routerLink=\"../O\">O</a></li>\n      <li><a routerLink=\"../P\">P</a></li>\n      <li><a routerLink=\"../Q\">Q</a></li>\n      <li><a routerLink=\"../R\">R</a></li>\n      <li><a routerLink=\"../S\">S</a></li>\n      <li><a routerLink=\"../T\">T</a></li>\n      <li><a routerLink=\"../U\">U</a></li>\n      <li><a routerLink=\"../V\">V</a></li>\n      <li><a routerLink=\"../W\">W</a></li>\n      <li><a routerLink=\"../X\">X</a></li>\n      <li><a routerLink=\"../Y\">Y</a></li>\n      <li><a routerLink=\"../Z\">Z</a></li>\n    </ul>\n  </div>\n\n  <div class=\"clearfix\"></div>\n  <div class=\"x_panel\">\n    <div class=\"col-md-4 col-sm-4 col-xs-12 profile_details\" *ngFor=\"let user of aaUsers\">\n      <div class=\"well profile_view\">\n        <div class=\"col-sm-12\">\n          <h4 class=\"brief\"><i>Digital Strategist</i></h4>\n          <div class=\"left col-xs-7\">\n            <h2>{{user.name}} {{user.surname}}</h2>\n            <p><strong>About: </strong> {{user.qualification}} </p>\n            <ul class=\"list-unstyled\">\n              <li><i class=\"fa fa-envelope\"></i> Address: {{user.email}}</li>\n              <li><i class=\"fa fa-phone\"></i> Phone #: {{user.phone}}</li>\n            </ul>\n          </div>\n          <div class=\"right col-xs-5 text-center\">\n            <img [src]=\"user.profileImage\" alt=\"\" class=\"img-circle img-responsive\">\n          </div>\n        </div>\n        <div class=\"col-xs-12 bottom text-center\">\n          <div class=\"col-xs-12 col-sm-6 emphasis\">\n            <p class=\"ratings\">\n              <a>4.0</a>\n              <a href=\"#\"><span class=\"fa fa-star\"></span></a>\n              <a href=\"#\"><span class=\"fa fa-star\"></span></a>\n              <a href=\"#\"><span class=\"fa fa-star\"></span></a>\n              <a href=\"#\"><span class=\"fa fa-star\"></span></a>\n              <a href=\"#\"><span class=\"fa fa-star-o\"></span></a>\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 emphasis\">\n            <button type=\"button\" class=\"btn btn-success btn-xs\"> <i class=\"fa fa-user\">\n            </i> <i class=\"fa fa-comments-o\"></i> </button>\n            <button type=\"button\"  (click)=\"getButtonInfo(user.email)\"  class=\"btn btn-primary btn-xs\">\n            <i class=\"fa fa-user\"> </i> View Profile\n          </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users-list/users-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/authentication.service */ "./src/app/common/services/authentication.service.ts");
/* harmony import */ var _common_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/data.service */ "./src/app/common/services/data.service.ts");
/* harmony import */ var _common_services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/user */ "./src/app/common/services/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(document, router, authentication, data, user) {
        this.document = document;
        this.router = router;
        this.authentication = authentication;
        this.data = data;
        this.user = user;
        this.aaUsers = [
            { _id: '59af540c7cc3c11d199fa55b', name: 'Alex Ionel Utale' }
        ];
        this.searchBar = '';
        this.urlIndex = '';
        this.updateUsers();
    }
    UsersListComponent.prototype.getEntireUserList = function (url) {
        var _this = this;
        // get entire list of users
        // '/api/get/users'
        this.data.getUsers(url, function (aUsers) {
            _this.aaUsers = aUsers;
        }, function (err) {
            console.log(err);
        });
    };
    UsersListComponent.prototype.updateList = function (url) {
        var _this = this;
        // get user by name
        // this is a regex search, insert any
        // '/api/get/user/ion'
        console.log('get ions users: ', 'URL : ', url);
        this.data.getUserByName(url, function (aUsers) {
            console.log(aUsers);
            _this.aaUsers = aUsers;
        }, function (err) {
            console.log(err);
        });
    };
    UsersListComponent.prototype.searchBarValueChange = function (event) {
        this.searchBar = event.target.value;
        this.updateList('/api/get/user/' + this.searchBar);
    };
    UsersListComponent.prototype.getButtonInfo = function (username) {
        console.log(username);
        this.router.navigate(['/profile/' + username.split('@')[0]]);
    };
    UsersListComponent.prototype.ngOnInit = function () {
    };
    UsersListComponent.prototype.updateUsers = function () {
        this.urlIndex = this.document.location.pathname;
        if (this.urlIndex === '/users') {
            this.getEntireUserList('/api/get/users');
        }
        else {
            console.log(this.urlIndex.split('/users/')[1]);
            this.updateList('/api/get/user/' + this.urlIndex.split('/users/')[1]);
        }
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/components/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/components/users-list/users-list.component.css")],
            providers: [_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _common_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _common_services_user__WEBPACK_IMPORTED_MODULE_5__["User"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _common_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _common_services_user__WEBPACK_IMPORTED_MODULE_5__["User"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Hello there</h1>\n  <p>Won't you please <a routerLink=\"../login\">sign in</a> or <a routerLink=\"../register\">register</a>?</p>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/services/user */ "./src/app/common/services/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(user) {
        this.user = user;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_common_services_user__WEBPACK_IMPORTED_MODULE_1__["User"]]
        }),
        __metadata("design:paramtypes", [_common_services_user__WEBPACK_IMPORTED_MODULE_1__["User"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" role=\"main\">\n  <div class=\"\">\n    <div class=\"page-title\">\n      <div class=\"title_left\">\n        <h3 class=\"\"><a routerLink=\"../../users/A\" ><i class=\"fa fa-arrow-left\"></i> All Employees</a></h3>\n      </div>\n      <div class=\"title_right\">\n        <div class=\"col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n            <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"button\">Go!</button>\n      </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /page content -->\n    <div class=\"clearfix\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"x_panel\">\n          <div class=\"x_title\">\n            <h2>Employee Report <small>Activity report</small></h2>\n            \n            <div class=\"clearfix\"></div>\n          </div>\n          <!-- ***************\n            user profile\n            ***************-->\n          <div id=\"ViewUserProfile\" class=\"x_content\">\n            <div class=\"col-md-3 col-sm-3 col-xs-12 profile_left\">\n              <div class=\"profile_img\">\n                <div id=\"crop-avatar\">\n                  <!-- Current avatar -->\n                  <app-profile-image [profileImage]=\"user.profileImage\" [userID]=\"this.user._id\"></app-profile-image>\n                  </div>\n              </div>\n              <h3>\n                <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.name\" (valueChange)=\"user.name=$event\"></app-smart-input>\n                <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.surname\" (valueChange)=\"user.surname=$event\"></app-smart-input>\n              </h3>\n              <ul class=\"list-unstyled user_data\">\n                <li>\n                  <i class=\"fa fa-briefcase user-profile-icon\"></i>\n                  <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.qualification\" (valueChange)=\"user.qualification=$event\"></app-smart-input>\n                </li>\n                <li><i class=\"fa fa-map-marker user-profile-icon\"></i>\n                  <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.address.full\" (valueChange)=\"user.address.full=$event\"></app-smart-input>                                  \n                </li>\n                <li><i class=\"fa fa-envelope user-profile-icon\"></i>\n                  <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.email\" (valueChange)=\"user.email=$event\"></app-smart-input>                  \n                </li>\n                <li><i class=\"fa fa-phone user-profile-icon\"></i>\n                  <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.phone\" (valueChange)=\"user.phone=$event\"></app-smart-input>\n                </li>\n              </ul>\n              <a class=\"btn\" (click)=\"editModeF()\" [className]=\"editModeButtonClass\"><i [class]=\"editButtonIconClass\"></i>{{editButtonTitle}}</a>\n              <br />\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-12\">\n              <!-- user profile tabs -->\n              <div class=\"\" role=\"tabpanel\" data-example-id=\"togglable-tabs\">\n                <ul id=\"myTab\" class=\"nav nav-tabs bar_tabs\" role=\"tablist\">\n                  <li role=\"presentation\" class=\"active\"><a href=\"#tab_content1\" id=\"home-tab\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"true\">Recent Activity</a>\n                  </li>\n                  <li role=\"presentation\" class=\"\"><a href=\"#tab_content2\" role=\"tab\" id=\"profile-tab\" data-toggle=\"tab\" aria-expanded=\"false\">Projects Worked on</a>\n                  </li>\n                  <li role=\"presentation\" class=\"\"><a href=\"#tab_content3\" role=\"tab\" id=\"profile-tab2\" data-toggle=\"tab\" aria-expanded=\"false\">Profile</a>\n                  </li>\n                </ul>\n                <div id=\"myTabContent\" class=\"tab-content\">\n                  <div role=\"tabpanel\" class=\"tab-pane fade active in\" id=\"tab_content1\" aria-labelledby=\"home-tab\">\n                    <!-- start recent activity -->\n                    <!-- end recent activity -->\n                  </div>\n                  <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab_content2\" aria-labelledby=\"profile-tab\">\n                    <!-- start user projects -->\n                    <table class=\"data table table-striped no-margin\">\n                      <thead>\n                        <tr>\n                          <th>#</th>\n                          <th>Project Name</th>\n                          <th>Client Company</th>\n                          <th class=\"hidden-phone\">Hours Spent</th>\n                          <th>Contribution</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>1</td>\n                          <td>New Company Takeover Review</td>\n                          <td>Deveint Inc</td>\n                          <td class=\"hidden-phone\">18</td>\n                          <td class=\"vertical-align-mid\">\n                            <div class=\"progress\">\n                              <div class=\"progress-bar progress-bar-success\" data-transitiongoal=\"35\"></div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>2</td>\n                          <td>New Partner Contracts Consultanci</td>\n                          <td>Deveint Inc</td>\n                          <td class=\"hidden-phone\">13</td>\n                          <td class=\"vertical-align-mid\">\n                            <div class=\"progress\">\n                              <div class=\"progress-bar progress-bar-danger\" data-transitiongoal=\"15\"></div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>3</td>\n                          <td>Partners and Inverstors report</td>\n                          <td>Deveint Inc</td>\n                          <td class=\"hidden-phone\">30</td>\n                          <td class=\"vertical-align-mid\">\n                            <div class=\"progress\">\n                              <div class=\"progress-bar progress-bar-success\" data-transitiongoal=\"45\"></div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>4</td>\n                          <td>New Company Takeover Review</td>\n                          <td>Deveint Inc</td>\n                          <td class=\"hidden-phone\">28</td>\n                          <td class=\"vertical-align-mid\">\n                            <div class=\"progress\">\n                              <div class=\"progress-bar progress-bar-success\" data-transitiongoal=\"75\"></div>\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <!-- end user projects -->\n                  </div>\n                  <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab_content3\" aria-labelledby=\"profile-tab\">\n                    <p>xxFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation\n                      +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/authentication.service */ "./src/app/common/services/authentication.service.ts");
/* harmony import */ var _common_services_nav_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/nav-bar.service */ "./src/app/common/services/nav-bar.service.ts");
/* harmony import */ var _common_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/data.service */ "./src/app/common/services/data.service.ts");
/* harmony import */ var _common_services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/services/user */ "./src/app/common/services/user.ts");
/* harmony import */ var _components_smart_input_smart_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/smart-input/smart-input.component */ "./src/app/components/smart-input/smart-input.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(document, authentication, data, user, navSer, smartInput) {
        this.document = document;
        this.authentication = authentication;
        this.data = data;
        this.user = user;
        this.navSer = navSer;
        this.smartInput = smartInput;
        this.editModeButtonClass = 'btn  btn-warning';
        this.editButtonTitle = ' Edit Profile';
        this.editButtonIconClass = 'fa fa-edit m-right-xs';
        this.editMode = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.document.location.pathname.split('/profile/')[1]);
        var username = this.document.location.pathname.split('/profile/')[1];
        this.data.getProfile(username, function (data) {
            console.log(data);
            console.log(data['body']);
            var aUser = JSON.parse(data['_body']);
            _this.user = aUser;
            console.log('this.user', _this.user);
            console.log('aUser', aUser);
            aUser.profileImage = _this.checkIFUserHasProfileImage(aUser);
            _this.navSer.setNavBarState(aUser);
        }, function (err) {
            console.log('no profile found', err);
        });
    };
    // edit button title, icon and color change
    ProfileComponent.prototype.editModeF = function () {
        if (this.editModeButtonClass === 'btn  btn-warning') {
            // this part will enable the changes
            this.editMode = true;
            this.editModeButtonClass = 'btn  btn-success';
            this.editButtonTitle = ' Save Profile';
            this.editButtonIconClass = ' fa fa-save m-right-xs';
        }
        else {
            // this part will save the changes
            this.editMode = false;
            this.editModeButtonClass = 'btn  btn-warning';
            this.editButtonTitle = ' Edit Profile';
            this.editButtonIconClass = 'fa fa-edit m-right-xs';
            this.data.saveProfile(this.user, function (data) {
                console.log('saveProfile response:', JSON.parse(data['_body']));
            }, function (err) {
                console.log(err);
            });
        }
        // console.log(this.smartInput.value);
        // this.smartInput.editModeF();
    };
    ProfileComponent.prototype.checkIFUserHasProfileImage = function (user) {
        console.log('user', user);
        if (user.profileImage === '') {
            return './images/ion.utale.profile.jpg';
        }
        return user.profileImage;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _common_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _common_services_user__WEBPACK_IMPORTED_MODULE_5__["User"], _components_smart_input_smart_input_component__WEBPACK_IMPORTED_MODULE_6__["SmartInputComponent"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _common_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _common_services_user__WEBPACK_IMPORTED_MODULE_5__["User"],
            _common_services_nav_bar_service__WEBPACK_IMPORTED_MODULE_3__["NavBarService"],
            _components_smart_input_smart_input_component__WEBPACK_IMPORTED_MODULE_6__["SmartInputComponent"]])
    ], ProfileComponent);
    return ProfileComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aiu/Developer 2/GitHub/personel-cms/app_client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map