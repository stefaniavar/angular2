import { Component } from 'angular2/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../authentication/user';
import { ROUTER_DIRECTIVES} from 'angular2/router';
import { LoginComponent} from '../login/login.component';
import { UpdateComponent} from './update.component';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    directives: [LoginComponent, ROUTER_DIRECTIVES],
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
