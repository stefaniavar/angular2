import { Injectable } from 'angular2/core';
import { Router } from 'angular2/router';
import { User } from './user';

var users =
  [
    {email: 'admin@gmail.com', password: 'admin', nome: 'stefania', cognome: 'ditta', dateofBirth: '13/03/1984', country: 'Varese', role: 'admin' },
    {email: 'user@gmail.com', password: 'user', nome: 'alberto', cognome: 'ditta', dateofBirth: '13/03/1980', country: 'Varese', role: 'user' },
    {email: 'roby@gmail.com', password: 'roby', nome: 'roberto', cognome: 'rossi', dateofBirth: '13/03/1986', country: 'Milano', role: 'user'}
  ];

@Injectable()
export class AuthenticationService {
  constructor(private _router: Router) {

  }

  getUsers() {
    return users;
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  /*login(user) {
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser) {
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['Home']);
     
      return true;
    }
    return false;

  }*/

  login(user){
    var authenticatedUser=users.find(u => u.email === user.email);
    if(user.email=="admin"){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['Home2'])
    }
    else{
       this._router.navigate(['Home'])
    }
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['Login']);
    }
  }
}
