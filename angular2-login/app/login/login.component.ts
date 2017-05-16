import {Component} from 'angular2/core';
import {AuthenticationService, User} from '../authentication/authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: "app/login/login.component.html"
})

export class LoginComponent {

    public user = new User('','','','','','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService) {
        }

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}

