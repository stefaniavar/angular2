import {Component} from 'angular2/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {User} from '../authentication/user';


@Component({
    providers: [AuthenticationService],
    templateUrl:'app/home/update.component.html'
    
})

export class UpdateComponent {
    user:AuthenticationService;

    constructor(private _service: AuthenticationService) {
        this.user=JSON.parse(localStorage.getItem('user'));
    }
}