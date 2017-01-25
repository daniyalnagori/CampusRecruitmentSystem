import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFire, AngularFireModule,AuthProviders,AuthMethods } from "angularfire2";
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { AppService } from "./app.service";
import { MaterialModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {Router,Routes,RouterModule} from "@angular/router";
import {AuthGuardService} from "./authGuard.service";
import { HomeComponent } from './home/home.component';
const myFirebaseAuthConfig ={
    provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}
const routes = [ 
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuardService]},
  {path: 'nav', component: NavComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
]
const firebaseConfig = {
  apiKey: "AIzaSyA1XYdpjxAHVuPoHdt7diqYmWgZMLDup2g",
  authDomain: "databaseandauth.firebaseapp.com",
  databaseURL: "https://databaseandauth.firebaseio.com",
  storageBucket: "databaseandauth.appspot.com",
  messagingSenderId: "561289082141"
};
@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    NavComponent,
    DashboardComponent ,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    MaterialModule.forRoot(),
  RouterModule.forRoot(routes),
  ],
  providers: [AppService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
