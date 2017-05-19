
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { User} from '../authentication/user';


@Component({
    selector: 'app-login-cmp',
    providers: [AuthenticationService],
    templateUrl: '../login/login.component.html'
})

export class LoginComponent {
    public user = new User();
    public errorMsg = '';

    constructor(private _service: AuthenticationService) {}

    login() {
        if(!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    }
}

