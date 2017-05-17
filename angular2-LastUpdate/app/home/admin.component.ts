import {Component} from 'angular2/core';
import {User} from "../authentication/user";

@Component({
    templateUrl:'admin.component.html'
})


export class AdminComponent {
private listaUsers:Array<User>

contructor(){
    this.listaUsers=new Array<User>();
    this.listaUsers.push(JSON.parse('{}'))
}
}