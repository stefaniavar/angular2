import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdMenu, MdMenuItem, MdGridListModule } from '@angular/material';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { UtenteComponent } from './utente/utente.component';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginGoogleComponent,
    UtenteComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    RouterModule.forRoot([
      {
        path: 'admin',
        component: AdministrationComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AdministrationComponent]
})
export class AppModule { }




