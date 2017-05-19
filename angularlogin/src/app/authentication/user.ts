import { Component } from '@angular/core';

export class User {
   public email: string;
    public password: string;
    public nome: string;
    public cognome: string;
    public dateofBirth: string;
    public country: string;
    public role: string;

constructor() {
        this.email = '';
        this.password = '';
        this.nome = '';
        this.cognome = '';
        this.country = '';
        this.dateofBirth = '';
        this.role = '';
    }
}