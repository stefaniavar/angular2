//import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  //  constructor(
  //    private _service: LoginService) { }


  //  login() {
  //    if (!this._service.login(this.username)) {
  //      console.log('Failed to login');
  //    }
  //  }

  //  constructor() {
  //    this.username = '';
  //    this.password = '';
  //    
  //  }

  //  CERCO DI MANTENERE ENTRAMBI I COSTRUTTORI
  //  constructor(username: string, password: string) {
  //    this.username = username;
  //    this.password = password;
  //  }



}