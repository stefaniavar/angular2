import { Component } from 'angular2/core';
import { AuthenticationService, User } from '../authentication/authentication.service';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: "app/home/home.component.html"
})


export class HomeComponent {
  /*  user={nome:'Stefania', cognome:'Ditta', email:'admin@gmail.com', dateofBirth:'13/03/1984', country:'Varese', role:'front-end developer'}*/
    p_users = [
            { email: 'admin@gmail.com', password: 'admin', nome: 'stefania', cognome: 'ditta', dateofBirth: '13/03/1984', country: 'Varese', role: 'admin' },
            { email: 'user@gmail.com', password: 'user', nome: 'alberto', cognome: 'ditta', dateofBirth: '13/03/1980', country: 'Varese', role: 'user' }
        ];
    constructor(private _service: AuthenticationService) {
        this.p_users = [
            { email: 'admin@gmail.com', password: 'admin', nome: 'stefania', cognome: 'ditta', dateofBirth: '13/03/1984', country: 'Varese', role: 'admin' },
            { email: 'user@gmail.com', password: 'user', nome: 'alberto', cognome: 'ditta', dateofBirth: '13/03/1980', country: 'Varese', role: 'user' }
        ];
    }

    ngOnInit() {
        this._service.checkCredentials();
    }

    users() {
        return this.p_users;
        /*
        alert('sdfdsf');
         return [{},{}];
       return [
            { email: 'admin@gmail.com', password: 'admin', nome: 'stefania', cognome: 'ditta', dateofBirth: '13/03/1984', country: 'Varese', role: 'admin' },
            { email: 'user@gmail.com', password: 'user', nome: 'alberto', cognome: 'ditta', dateofBirth: '13/03/1980', country: 'Varese', role: 'user' }
        ];
        return this._service.getUsers();
        */
    }

    logout() {
        this._service.logout();
    }
}