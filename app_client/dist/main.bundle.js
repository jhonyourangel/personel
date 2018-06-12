webpackJsonp([1,4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartInputComponent = (function () {
    function SmartInputComponent() {
        this.editMode = false;
        this.valoare = 'default value';
        this.type = '';
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SmartInputComponent.prototype.ngOnInit = function () {
    };
    SmartInputComponent.prototype.setValoare = function (event) {
        this.valoare = event.target.value;
        this.valueChange.emit(this.valoare);
    };
    return SmartInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SmartInputComponent.prototype, "editMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SmartInputComponent.prototype, "valoare", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SmartInputComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SmartInputComponent.prototype, "valueChange", void 0);
SmartInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-smart-input',
        template: __webpack_require__(345),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [])
], SmartInputComponent);

var _a;
//# sourceMappingURL=smart-input.component.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
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
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 246;


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(266);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(339),
        styles: [__webpack_require__(322)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_login_login_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_register_register_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_navigation_navbar_navbar_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_services_nav_bar_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_navigation_sidebar_sidebar_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_smart_input_smart_input_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_users_list_users_list_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_image_profile_image_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_file_upload__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// plugin

var appRoutes = [
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:username', component: __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__auth_register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_16__components_users_list_users_list_component__["a" /* UsersListComponent */] },
    { path: 'users/:search', component: __WEBPACK_IMPORTED_MODULE_16__components_users_list_users_list_component__["a" /* UsersListComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__auth_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__common_navigation_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__common_navigation_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_smart_input_smart_input_component__["a" /* SmartInputComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_users_list_users_list_component__["a" /* UsersListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_profile_image_profile_image_component__["a" /* ProfileImageComponent */],
            __WEBPACK_IMPORTED_MODULE_18_ng2_file_upload__["FileSelectDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__common_services_nav_bar_service__["a" /* NavBarService */] /*AuthenticationService, , DataService*/],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_nav_bar_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_user__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(340),
        styles: [__webpack_require__(323)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__common_services_user__["a" /* User */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_services_nav_bar_service__["a" /* NavBarService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_user__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
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
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(341),
        styles: [__webpack_require__(324)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__common_services_user__["a" /* User */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nav_bar_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
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
    return NavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "currentUser", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user__["a" /* User */]) === "function" && _a || Object)
], NavbarComponent.prototype, "aUser", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'navbar',
        template: __webpack_require__(342),
        styles: [__webpack_require__(325)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__services_user__["a" /* User */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user__["a" /* User */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
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
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(343),
        styles: [__webpack_require__(326)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* User */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user__["a" /* User */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _c || Object])
], SidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileImageComponent = (function () {
    function ProfileImageComponent(data, http) {
        this.data = data;
        this.http = http;
        this.profileImage = '';
        this.userID = '';
        // declare a property called fileuploader and assign it to an instance of a new fileUploader.
        // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: '/api/upload', itemAlias: 'photo' });
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
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
            /** No need to include Content-Type in Angular 4 */
            // actualy if you apend the "Content-Type" in angular 4, it will only bring trouble. just don't
            // headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
            this.http.post('/api/upload', formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error); })
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
    return ProfileImageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProfileImageComponent.prototype, "profileImage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProfileImageComponent.prototype, "userID", void 0);
ProfileImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-image',
        template: __webpack_require__(344),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _b || Object])
], ProfileImageComponent);

var _a, _b;
//# sourceMappingURL=profile-image.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_user__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UsersListComponent = (function () {
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
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users-list',
        template: __webpack_require__(346),
        styles: [__webpack_require__(329)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__common_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__common_services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__common_services_user__["a" /* User */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__common_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__common_services_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_services_user__["a" /* User */]) === "function" && _d || Object])
], UsersListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=users-list.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_user__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(user) {
        this.user = user;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(347),
        styles: [__webpack_require__(330)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_services_user__["a" /* User */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_services_user__["a" /* User */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_nav_bar_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_smart_input_smart_input_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ProfileComponent = (function () {
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
            var aUser = JSON.parse(data['_body']);
            console.log(aUser);
            aUser.profileImage = _this.checkIFUserHasProfileImage(aUser);
            _this.user = aUser;
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
        if (user.profileImage === '') {
            return './images/ion.utale.profile.jpg';
        }
        return user.profileImage;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(348),
        styles: [__webpack_require__(331)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__common_services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__common_services_user__["a" /* User */], __WEBPACK_IMPORTED_MODULE_6__components_smart_input_smart_input_component__["a" /* SmartInputComponent */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_services_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_services_user__["a" /* User */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common_services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_services_nav_bar_service__["a" /* NavBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__components_smart_input_smart_input_component__["a" /* SmartInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_smart_input_smart_input_component__["a" /* SmartInputComponent */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AuthenticationService = (function () {
    function AuthenticationService(http, user, document) {
        this.http = http;
        this.user = user;
        this.document = document;
        this.subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
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
            _this.saveToken(JSON.parse(data['_body']).token);
            _this.currentUser();
            callback();
        });
    };
    ;
    AuthenticationService.prototype.login = function (user, callback) {
        var _this = this;
        return this.http.post(this.getUrl() + '/api/login', user).subscribe(function (data) {
            console.log("login authentication class");
            console.log(JSON.parse(data['_body']).token);
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
        return ''; // 'http://127.0.0.1:3000'; //this.document.location.origin;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user__["a" /* User */]) === "function" && _b || Object, Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "a.user-profile {\n    color: #5E6974 !important\n}\n\n.user-profile img {\n    width: 29px;\n    height: 29px;\n    border-radius: 50%;\n    margin-right: 10px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".image {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: auto;\n    transition: .5s ease;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n  }\n\n  .middle {\n    transition: .5s ease;\n    opacity: 0;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%)\n  }\n  \n  .container:hover .image {\n    opacity: 0.3;\n  }\n  \n  .container:hover .middle {\n    opacity: 1;\n  }\n  \n  .text {\n    background-color: rgb(150, 158, 173);\n    color: white;\n    font-size: 16px;\n    padding: 16px 32px;\n  }\n\n  #inputPhoto {\n      display: none;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "p {\n    display: inline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<!--<navbar [aUser]=\"aUser\" ></navbar>\n<router-outlet></router-outlet> -->\n\n<div class=\"container body\">\n    <div class=\"main_container\">\n      <app-sidebar></app-sidebar>\n\n      <!-- top navigation -->\n      <navbar class=\"top_nav\" [aUser]=\"aUser\" ></navbar>\n      <!-- /top navigation -->\n      <div class=\"right_col\" role=\"main\">   \n        <router-outlet ></router-outlet> \n      </div>\n      \n    </div>\n  </div>\n\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1 class=\"form-signin-heading\">Sign in</h1>\n      <p class=\"lead\">Not a member? Please <a routerLink=\"../register\">register</a> instead.</p>\n      <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Sign in!</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Register</h1>\n      <p class=\"lead\">Already a member? Please <a routerLink=\"../login\">log in</a> instead.</p>\n      <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\"  name=\"name\" placeholder=\"Enter your name\" required [(ngModel)]=\"credentials.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"surname\">Surname</label>\n          <input type=\"text\" class=\"form-control\" id=\"suename\"  name=\"surname\" placeholder=\"Enter your surname\" required [(ngModel)]=\"credentials.surname\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter email\" required [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\"  name=\"password\" id=\"password\" placeholder=\"Password\" required [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Register!</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <div id=\"navbar-main\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"!isLoggedIn\"><a routerLink=\"login\">Sign in</a></li>\n                <li *ngIf=\"isLoggedIn\">\n                    <a class=\"user-profile\" md-button [mdMenuTriggerFor]=\"menu\" >\n                        <img src=\"./img/user.png\" alt=\"\">{{ aUser.name }}\n                        <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                    </a>\n                    <md-menu class=\"\" #menu=\"mdMenu\" yPosition=\"above\" [overlapTrigger]=\"false\">\n                        <button md-menu-item routerLink=\"profile\">Profile</button>\n                        <button md-menu-item *ngIf=\"isLoggedIn\" (click)=\"logout()\" routerLink=\"logout\">Logout</button>                        \n                    </md-menu>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n-->\n<!-- top navigation -->\n<div class=\"top_nav\">\n    <div class=\"nav_menu\">\n      <nav>\n        <div class=\"nav toggle\">\n          <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\n        </div>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!isLoggedIn\"><a routerLink=\"login\">Sign in</a></li>\n        <li *ngIf=\"isLoggedIn\">\n            <a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n              <img [src]=\"user.profileImage\" alt=\"\">{{ user.name }}\n              <span class=\" fa fa-angle-down\"></span>\n            </a>\n            <ul class=\"dropdown-menu dropdown-usermenu pull-right\">\n              <li>\n                <!--<a  routerLink=\"profile\"> Profile</a>-->\n                <a  (click)=\"seeProfile()\"> Profile</a>\n              </li>\n              <li>\n                <a href=\"javascript:;\">\n                  <span class=\"badge bg-red pull-right\">50%</span>\n                  <span>Settings</span>\n                </a>\n              </li>\n              <li><a href=\"javascript:;\">Help</a></li>\n              <li><a (click)=\"logout()\" routerLink=\"logout\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\n            </ul>\n          </li>\n\n\n        </ul>\n      </nav>\n    </div>\n  </div>\n  <!-- /top navigation -->\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 left_col\">\n  <div class=\"left_col scroll-view\">\n    <div class=\"navbar nav_title\" style=\"border: 0;\">\n      <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-paw\"></i> <span>Personel</span></a>\n    </div>\n\n    <div class=\"clearfix\"></div>\n\n    <!-- menu profile quick info -->\n    <div *ngIf=\"isLoggedIn\" class=\"profile clearfix\">\n      <div class=\"profile_pic\">\n        <img [src]=\"user.profileImage\" alt=\"...\" class=\"img-circle profile_img\">\n      </div>\n      <div class=\"profile_info\">\n        <span>Welcome,</span>\n        <h2>{{ user.name }}</h2>\n      </div>\n    </div>\n    <!-- /menu profile quick info -->\n    <br />\n\n    <!-- sidebar menu -->\n    <div *ngIf=\"isLoggedIn\" id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\n      <div class=\"menu_section\">\n        <h3>General</h3>\n        <ul class=\"nav side-menu\">\n          <li><a><i class=\"fa fa-home\"></i> Home <span class=\"fa fa-chevron-down\"></span></a>\n            <ul class=\"nav child_menu\">\n              <li><a href=\"index.html\">Dashboard</a></li>\n              <li><a href=\"index2.html\">Dashboard2</a></li>\n              <li><a href=\"index3.html\">Dashboard3</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- /sidebar menu -->\n  </div>\n</div>\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img class=\"img-responsive avatar-view image\" (click)=\"editProfilePicture()\" [src]=\"profileImage\" alt=\"Avatar\" title=\"Change the avatar\">\n  <div class=\"middle\">\n    <div class=\"text\">edit</div>\n  </div>\n</div>\n<!-- File input for the file-upload plugin, with special ng2-file-upload directive called ng2FileSelect -->\n<input id=\"inputPhoto\" type=\"file\" name=\"photo\" (change)=\"fileChanged($event)\" placeholder=\"Upload File\" accept=\".png,.jpg\"\n/>\n"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!editMode\">\n  {{valoare}}\n</p>\n<input *ngIf=\"editMode\" type=\"text\" [(value)]=\"valoare\" (keyup)=\"setValoare($event)\">\n"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title\">\n  <div class=\"title_left\">\n    <h3>All Employees </h3>\n  </div>\n\n  <div class=\"title_right\">\n    <div class=\"col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search\">\n      <div class=\"input-group\">\n        <input (keyup)=\"searchBarValueChange($event)\" type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"button\">Go!</button>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n    <ul class=\"pagination pagination-split\" (click)=\"updateUsers()\">\n      <li><a routerLink=\"../A\">A</a></li>\n      <li><a routerLink=\"../B\">B</a></li>\n      <li><a routerLink=\"../C\">C</a></li>\n      <li><a routerLink=\"../D\">D</a></li>\n      <li><a routerLink=\"../E\">E</a></li>\n      <li><a routerLink=\"../F\">F</a></li>\n      <li><a routerLink=\"../G\">G</a></li>\n      <li><a routerLink=\"../H\">H</a></li>\n      <li><a routerLink=\"../I\">I</a></li>\n      <li><a routerLink=\"../J\">J</a></li>\n      <li><a routerLink=\"../K\">K</a></li>\n      <li><a routerLink=\"../L\">L</a></li>\n      <li><a routerLink=\"../M\">M</a></li>\n      <li><a routerLink=\"../N\">N</a></li>\n      <li><a routerLink=\"../O\">O</a></li>\n      <li><a routerLink=\"../P\">P</a></li>\n      <li><a routerLink=\"../Q\">Q</a></li>\n      <li><a routerLink=\"../R\">R</a></li>\n      <li><a routerLink=\"../S\">S</a></li>\n      <li><a routerLink=\"../T\">T</a></li>\n      <li><a routerLink=\"../U\">U</a></li>\n      <li><a routerLink=\"../V\">V</a></li>\n      <li><a routerLink=\"../W\">W</a></li>\n      <li><a routerLink=\"../X\">X</a></li>\n      <li><a routerLink=\"../Y\">Y</a></li>\n      <li><a routerLink=\"../Z\">Z</a></li>\n    </ul>\n  </div>\n\n  <div class=\"clearfix\"></div>\n  <div class=\"x_panel\">\n    <div class=\"col-md-4 col-sm-4 col-xs-12 profile_details\" *ngFor=\"let user of aaUsers\">\n      <div class=\"well profile_view\">\n        <div class=\"col-sm-12\">\n          <h4 class=\"brief\"><i>Digital Strategist</i></h4>\n          <div class=\"left col-xs-7\">\n            <h2>{{user.name}} {{user.surname}}</h2>\n            <p><strong>About: </strong> {{user.qualification}} </p>\n            <ul class=\"list-unstyled\">\n              <li><i class=\"fa fa-envelope\"></i> Address: {{user.email}}</li>\n              <li><i class=\"fa fa-phone\"></i> Phone #: {{user.phone}}</li>\n            </ul>\n          </div>\n          <div class=\"right col-xs-5 text-center\">\n            <img [src]=\"user.profileImage\" alt=\"\" class=\"img-circle img-responsive\">\n          </div>\n        </div>\n        <div class=\"col-xs-12 bottom text-center\">\n          <div class=\"col-xs-12 col-sm-6 emphasis\">\n            <p class=\"ratings\">\n              <a>4.0</a>\n              <a href=\"#\"><span class=\"fa fa-star\"></span></a>\n              <a href=\"#\"><span class=\"fa fa-star\"></span></a>\n              <a href=\"#\"><span class=\"fa fa-star\"></span></a>\n              <a href=\"#\"><span class=\"fa fa-star\"></span></a>\n              <a href=\"#\"><span class=\"fa fa-star-o\"></span></a>\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 emphasis\">\n            <button type=\"button\" class=\"btn btn-success btn-xs\"> <i class=\"fa fa-user\">\n            </i> <i class=\"fa fa-comments-o\"></i> </button>\n            <button type=\"button\"  (click)=\"getButtonInfo(user.email)\"  class=\"btn btn-primary btn-xs\">\n            <i class=\"fa fa-user\"> </i> View Profile\n          </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Hello there</h1>\n  <p>Won't you please <a routerLink=\"../login\">sign in</a> or <a routerLink=\"../register\">register</a>?</p>\n</div>\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<div class=\"\" role=\"main\">\n  <div class=\"\">\n    <div class=\"page-title\">\n      <div class=\"title_left\">\n        <h3 class=\"\"><a routerLink=\"../../users/A\" ><i class=\"fa fa-arrow-left\"></i> All Employees</a></h3>\n      </div>\n      <div class=\"title_right\">\n        <div class=\"col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n            <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"button\">Go!</button>\n      </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /page content -->\n    <div class=\"clearfix\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"x_panel\">\n          <div class=\"x_title\">\n            <h2>Employee Report <small>Activity report</small></h2>\n            \n            <div class=\"clearfix\"></div>\n          </div>\n          <!-- ***************\n            user profile\n            ***************-->\n          <div id=\"ViewUserProfile\" class=\"x_content\">\n            <div class=\"col-md-3 col-sm-3 col-xs-12 profile_left\">\n              <div class=\"profile_img\">\n                <div id=\"crop-avatar\">\n                  <!-- Current avatar -->\n                  <app-profile-image [profileImage]=\"user.profileImage\" [userID]=\"this.user._id\"></app-profile-image>\n                  </div>\n              </div>\n              <h3>\n                <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.name\" (valueChange)=\"user.name=$event\"></app-smart-input>\n                <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.surname\" (valueChange)=\"user.surname=$event\"></app-smart-input>\n              </h3>\n              <ul class=\"list-unstyled user_data\">\n                <li>\n                  <i class=\"fa fa-briefcase user-profile-icon\"></i>\n                  <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.qualification\" (valueChange)=\"user.qualification=$event\"></app-smart-input>\n                </li>\n                <li><i class=\"fa fa-map-marker user-profile-icon\"></i>\n                  <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.address.full\" (valueChange)=\"user.address.full=$event\"></app-smart-input>                                  \n                </li>\n                <li><i class=\"fa fa-envelope user-profile-icon\"></i>\n                  <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.email\" (valueChange)=\"user.email=$event\"></app-smart-input>                  \n                </li>\n                <li><i class=\"fa fa-phone user-profile-icon\"></i>\n                  <app-smart-input [editMode]=\"editMode\" [valoare]=\"user.phone\" (valueChange)=\"user.phone=$event\"></app-smart-input>\n                </li>\n              </ul>\n              <a class=\"btn\" (click)=\"editModeF()\" [className]=\"editModeButtonClass\"><i [class]=\"editButtonIconClass\"></i>{{editButtonTitle}}</a>\n              <br />\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-12\">\n              <!-- user profile tabs -->\n              <div class=\"\" role=\"tabpanel\" data-example-id=\"togglable-tabs\">\n                <ul id=\"myTab\" class=\"nav nav-tabs bar_tabs\" role=\"tablist\">\n                  <li role=\"presentation\" class=\"active\"><a href=\"#tab_content1\" id=\"home-tab\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"true\">Recent Activity</a>\n                  </li>\n                  <li role=\"presentation\" class=\"\"><a href=\"#tab_content2\" role=\"tab\" id=\"profile-tab\" data-toggle=\"tab\" aria-expanded=\"false\">Projects Worked on</a>\n                  </li>\n                  <li role=\"presentation\" class=\"\"><a href=\"#tab_content3\" role=\"tab\" id=\"profile-tab2\" data-toggle=\"tab\" aria-expanded=\"false\">Profile</a>\n                  </li>\n                </ul>\n                <div id=\"myTabContent\" class=\"tab-content\">\n                  <div role=\"tabpanel\" class=\"tab-pane fade active in\" id=\"tab_content1\" aria-labelledby=\"home-tab\">\n                    <!-- start recent activity -->\n                    <!-- end recent activity -->\n                  </div>\n                  <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab_content2\" aria-labelledby=\"profile-tab\">\n                    <!-- start user projects -->\n                    <table class=\"data table table-striped no-margin\">\n                      <thead>\n                        <tr>\n                          <th>#</th>\n                          <th>Project Name</th>\n                          <th>Client Company</th>\n                          <th class=\"hidden-phone\">Hours Spent</th>\n                          <th>Contribution</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>1</td>\n                          <td>New Company Takeover Review</td>\n                          <td>Deveint Inc</td>\n                          <td class=\"hidden-phone\">18</td>\n                          <td class=\"vertical-align-mid\">\n                            <div class=\"progress\">\n                              <div class=\"progress-bar progress-bar-success\" data-transitiongoal=\"35\"></div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>2</td>\n                          <td>New Partner Contracts Consultanci</td>\n                          <td>Deveint Inc</td>\n                          <td class=\"hidden-phone\">13</td>\n                          <td class=\"vertical-align-mid\">\n                            <div class=\"progress\">\n                              <div class=\"progress-bar progress-bar-danger\" data-transitiongoal=\"15\"></div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>3</td>\n                          <td>Partners and Inverstors report</td>\n                          <td>Deveint Inc</td>\n                          <td class=\"hidden-phone\">30</td>\n                          <td class=\"vertical-align-mid\">\n                            <div class=\"progress\">\n                              <div class=\"progress-bar progress-bar-success\" data-transitiongoal=\"45\"></div>\n                            </div>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>4</td>\n                          <td>New Company Takeover Review</td>\n                          <td>Deveint Inc</td>\n                          <td class=\"hidden-phone\">28</td>\n                          <td class=\"vertical-align-mid\">\n                            <div class=\"progress\">\n                              <div class=\"progress-bar progress-bar-success\" data-transitiongoal=\"75\"></div>\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <!-- end user projects -->\n                  </div>\n                  <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab_content3\" aria-labelledby=\"profile-tab\">\n                    <p>xxFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation\n                      +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarService = (function () {
    function NavBarService() {
        this.navStateSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.navState$ = this.navStateSource.asObservable();
    }
    NavBarService.prototype.setNavBarState = function (user) {
        this.navStateSource.next(user);
    };
    return NavBarService;
}());
NavBarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NavBarService);

//# sourceMappingURL=nav-bar.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    DataService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
    };
    DataService.prototype.getProfile = function (username, callBackRes, callBackErr) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
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
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(247);


/***/ })

},[632]);
//# sourceMappingURL=main.bundle.js.map