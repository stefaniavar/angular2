import {Component} from 'angular2/core';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    directives: [LoginComponent, ROUTER_DIRECTIVES],
    template: `
            <router-outlet></router-outlet>
        `
})
@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent, useAsDefault:true  },
    { path: '/home', name: 'Home', component: HomeComponent}
 
])
export class AppComponent {}

