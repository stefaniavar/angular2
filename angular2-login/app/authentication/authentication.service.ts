import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

export class User {
  constructor(
    public email: string,
    public password: string,
    public nome:string,
    public cognome:string,
    public dateofBirth:string,
    public country:string,
    public role:string
    ) { }
}

var users = 
 [
  {email:'admin@gmail.com',password:'admin',nome:'stefania',cognome:'ditta',dateofBirth:'13/03/1984',country:'Varese',role:'admin'},
  {email:'user@gmail.com',password:'user',nome:'alberto',cognome:'ditta',dateofBirth:'13/03/1980',country:'Varese',role:'user'}
];

@Injectable()
export class AuthenticationService {
  constructor(private _router: Router){

  }

  getUsers() {
var users =
 [
  {email:'admin@gmail.com',password:'admin',nome:'stefania',cognome:'ditta',dateofBirth:'13/03/1984',country:'Varese',role:'admin'},
  {email:'user@gmail.com',password:'user',nome:'alberto',cognome:'ditta',dateofBirth:'13/03/1980',country:'Varese',role:'user'}
];
return users;
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['Home']);      
      return true;
    }
    return false;

  }

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  } 
}
