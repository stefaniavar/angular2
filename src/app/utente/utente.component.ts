import { UtilsComponent } from '../utils/utils.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent {

  userid: string;
  password: string

  constructor() {
    this.password = "";
    this.userid = ""
  }

  public checkPassword(x: number, y: number): boolean {
    return (UtilsComponent.EMPTY_STRING != this.password && this.password.length >= UtilsComponent.PASSWORD_LENGTH);
  }

}
