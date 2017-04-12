import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent  {


  nome: string;
  cognome: string;
  mail: string;
  dataNascita: Date;
  citta: string;

  constructor() {
    //super();
    this.nome = '';
    this.cognome = '';
    this.mail = '';
    this.citta = '';
    this.dataNascita = null;
    this.citta = '';
  }


}
