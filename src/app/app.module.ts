import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFire, AngularFireModule } from "angularfire2";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppService } from "./app.service";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from "@angular/material";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Router, Routes } from "@angular/router";
import { UserResumeFormComponent } from './user-resume-form/user-resume-form.component';
import { AuthGuardService } from "./authGuard.service";
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'resumeForm', component: UserResumeFormComponent, canActivate: [AuthGuardService] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'studentdata', component: StudentDataComponent, canActivate: [AuthGuardService] },
  { path: 'postJob', component: CompanyFormComponent, canActivate: [AuthGuardService] },
  { path: 'companyjobs', component: VacanciesComponent, canActivate: [AuthGuardService] },

]

const config = {
  apiKey: "AIzaSyAknEwZiXuTgpr504SHveTgh_Jp3xmuN5s",
  authDomain: "todoapp-5ff11.firebaseapp.com",
  databaseURL: "https://todoapp-5ff11.firebaseio.com",
  storageBucket: "todoapp-5ff11.appspot.com",
  messagingSenderId: "171601152601"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NavComponent,
    DashboardComponent,
    UserResumeFormComponent,
    DashboardNavComponent,
    StudentDataComponent,
    CompanyFormComponent,
    VacanciesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AppService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
