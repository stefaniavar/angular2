import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../authentication/user';
import { Route} from '@angular/router';
import { LoginComponent} from '../login/login.component';

@Component({
  providers: [AuthenticationService, User],
  templateUrl: '../home/admin.component.html'
})

export class AdminComponent {
  user: AuthenticationService;
  userList: Object[] = [
 { email: 'roby@gmail.com', password: 'roby', nome:'roberto',cognome: 'rossi', dateofBirth:'13/03/1986',country: 'Milano', role: 'user' },
 { email: 'user@gmail.com', password: 'user', nome: 'alberto', cognome: 'ditta', dateofBirth: '13/03/1980', country: 'Varese', role: 'user'},
  { email: 'ale@gmail.com', password: 'ale', nome: 'alessandro', cognome: 'ditta', dateofBirth: '13/03/1970', country: 'Milano', role: 'user'}
];

  constructor(private _service: AuthenticationService) {
   this.user = JSON.parse(localStorage.getItem('user'));
  }

}
