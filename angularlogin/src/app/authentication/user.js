System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                    this.email = '';
                    this.password = '';
                    this.nome = '';
                    this.cognome = '';
                    this.country = '';
                    this.dateofBirth = '';
                    this.role = '';
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map