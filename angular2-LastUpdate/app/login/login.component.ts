import {Component} from 'angular2/core';
import {AuthenticationService} from '../authentication/authentication.service'
import {User} from '../authentication/user';
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: "app/login/login.component.html"
})

export class LoginComponent {

    public user = new User();
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

