import { NgModule} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../authentication/user';
import { Route} from '@angular/router';
import { LoginComponent} from '../login/login.component';
import { UpdateComponent} from './update.component';

@Component({
    selector: 'app-home',
    providers: [AuthenticationService],
    templateUrl: '../home/home.component.html'
})



export class HomeComponent {
user: AuthenticationService;

    constructor(private _service: AuthenticationService) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ngOnInit() {
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}
