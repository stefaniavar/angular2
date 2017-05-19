import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './home/admin.component';
import { UpdateComponent } from './home/update.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    UpdateComponent,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
         path: 'admin' ,
        component: AdminComponent
      },
      {
        path: 'update' ,
        component: UpdateComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
