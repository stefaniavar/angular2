System.register(['angular2/core', '../authentication/authentication.service'], function(exports_1, context_1) {
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
    var core_1, authentication_service_1;
    var UpdateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            UpdateComponent = (function () {
                function UpdateComponent(_service) {
                    this._service = _service;
                    this.user = JSON.parse(localStorage.getItem('user'));
                }
                UpdateComponent = __decorate([
                    core_1.Component({
                        providers: [authentication_service_1.AuthenticationService],
                        templateUrl: 'app/home/update.component.html'
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], UpdateComponent);
                return UpdateComponent;
            }());
            exports_1("UpdateComponent", UpdateComponent);
        }
    }
});
//# sourceMappingURL=update.component.js.map