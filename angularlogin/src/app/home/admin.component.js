System.register(['angular2/core', '../authentication/authentication.service', '../authentication/user', 'angular2/router', '../login/login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authentication_service_1, user_1, router_1, login_component_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(_service) {
                    this._service = _service;
                    this.userList = [
                        { email: 'roby@gmail.com', password: 'roby', nome: 'roberto', cognome: 'rossi', dateofBirth: '13/03/1986', country: 'Milano', role: 'user' },
                        { email: 'user@gmail.com', password: 'user', nome: 'alberto', cognome: 'ditta', dateofBirth: '13/03/1980', country: 'Varese', role: 'user' },
                        { email: 'ale@gmail.com', password: 'ale', nome: 'alessandro', cognome: 'ditta', dateofBirth: '13/03/1970', country: 'Milano', role: 'user' }
                    ];
                    this.user = JSON.parse(localStorage.getItem('user'));
                }
                AdminComponent = __decorate([
                    core_1.Component({
                        providers: [authentication_service_1.AuthenticationService, user_1.User],
                        directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/home/admin.component.html'
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin.component.js.map