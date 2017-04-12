import { UtenteComponent } from '../utente/utente.component';
import { Component, ElementRef, AfterViewInit } from '@angular/core';
declare const gapi: any;



@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.css']
})

export class LoginGoogleComponent implements AfterViewInit {

  private clientId: string = '364379765281-1j627t0rga6glpoksnv3gpa2gqubde5u.apps.googleusercontent.com';

  private scope = [
    'profile'//,
    //'email'//,
    //    'https://www.googleapis.com/auth/plus.me',
    //    'https://www.googleapis.com/auth/contacts.readonly',
    //    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  public auth2: any;
  public googleInit() {
    const that = this;
    gapi.load('auth2', function() {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: that.scope,
        uxmode: 'popup'
      });
      
      that.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public logout() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
      document.getElementById('mexLogout').textContent = 'Logout effettuato con successo';
    });
    document.getElementById('txtBenvenuto').textContent = '';
    document.getElementById('txtBenvenuto').hidden = true;
    document.getElementById('divLog').hidden = true;
    document.getElementById('googleBtn').hidden = false;
    this.attachSignin(document.getElementById('googleBtn'));

  }

  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function(googleUser) {

        let profile = googleUser.getBasicProfile();
        //console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        document.getElementById('txtBenvenuto').textContent = 'Benvenuto ' + profile.getName();
        document.getElementById('divLog').hidden = false;
        document.getElementById('googleBtn').hidden = true;

      }, function(error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  constructor(private element: ElementRef) {

    console.log('ElementRef: ', this.element);
  }

  ngAfterViewInit() {
    this.googleInit();
  }

}


//@Component({
//  selector: 'my-app',
//  template: `{{title}}
//    <google-signin></google-signin>
//    <footer>Angular version: {{angularVersion}}</footer>`
//})
//export class AppComponent {
//  title     = "Ajinkya's Google SignIn button";
//  angularVersion = 'latest stable';
//  constructor() { console.clear(); }
//}