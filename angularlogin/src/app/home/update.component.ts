import {Component} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {User} from '../authentication/user';


@Component({
    providers: [AuthenticationService],
    templateUrl: '../home/update.component.html'
    })

export class UpdateComponent {
    user: AuthenticationService;

    constructor(private _service: AuthenticationService) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
}
