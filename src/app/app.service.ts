import { Injectable } from "@angular/core";
import { AngularFire, AuthMethods, AuthProviders } from "angularfire2"
import { Router } from "@angular/router";
@Injectable()

export class AppService {
    names: Array<any>;
    a= [];
    b;
    c;
    constructor(private af: AngularFire, private router: Router) {
    
    }
    getStudentData() {
  return this.af.database.list('student');
    }
    getStudentDataa() {
  this.c = this.af.database.list('student');
  return this.c;
    }
    getStudentType() {
        return this.b;
    }
    getCompanyData() {
        return this.af.database.list('company');
    }
    emailAndPass(email, password) {
        return this.af.auth.login(
            { email: email, password: password },
            { provider: AuthProviders.Password, method: AuthMethods.Password }
        ).then((res) => {
            this.b  = this.af.database.object('/User/' + res.uid);
            this.af.database.object('/User/' + res.uid).subscribe(x => {
                this.a.push(x)
            });
            alert("Sign in successful");
            this.router.navigate(['/dashboard']);
        }, (err) => {
            alert(err);
        })
    }
}