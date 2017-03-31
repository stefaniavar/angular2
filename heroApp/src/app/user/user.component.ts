import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent /*implements OnInit*/ {

  nome: string;
  cognome: string;
  mail: string;
  dataNascita: Date;
  citta: string;
  userid: string;
  password: string;

  constructor() {
    this.nome = '';
    this.cognome = '';
    this.mail = '';
    this.citta = '';
    this.dataNascita = null;
    this.citta = '';
    this.userid = '';
    this.password = ''

  }

//  ngOnInit() {
//  }
  
   submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }

}
