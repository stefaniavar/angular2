import { Component } from 'angular2/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../authentication/user';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: "app/home/home.component.html"
})


export class HomeComponent {
user:AuthenticationService;

    constructor(private _service: AuthenticationService) {
        this.user=JSON.parse(localStorage.getItem('user'));
    }
    ngOnInit() {
        this._service.checkCredentials();
    }

   

    logout() {
        this._service.logout();
    }
}