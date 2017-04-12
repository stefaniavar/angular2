import { UtenteComponent } from '../utente/utente.component';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent {

  private listaUtenti: Array<UtenteComponent>;



  constructor() {
    this.listaUtenti = new Array<UtenteComponent>();
    this.listaUtenti.push(JSON.parse('{"nome": "Roberto","cognome": "rossi","mail": "a@trin.it","citta": "milano"}'));
    this.listaUtenti.push(JSON.parse('{"nome": "Mario","cognome": "Bianchi","mail": "tttt@trin.it","citta": "milano"}'));
    this.listaUtenti.push(JSON.parse('{"nome": "Luca","cognome": "verdi","mail": "tttt@trin.it","citta": "genova"}'));
    this.listaUtenti.push(JSON.parse('{"nome": "Matteo","cognome": "Piazza","mail": "piazza@trin.it","citta": "Milano"}'));

  }

  public getListaUtenti() {
    return this.listaUtenti;
  }

  public openDialog(email: string) {
    this.listaUtenti = this.listaUtenti.filter(user => user.mail.toUpperCase !== email.toUpperCase);
    console.log("lista utenti  contiene  elementi  " + this.listaUtenti.length);
  }


  //    forEach(user => {
  //      if (user.mail.toUpperCase() === email.toUpperCase()) {
  //          this.listaUtenti.
  //      }
  //    });
  //  }
}

