import { Injectable } from "@angular/core";
import { AngularFire, AuthMethods, AuthProviders, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2";
import { Router } from "@angular/router";
import { Observable } from "rxjs"
@Injectable()
export class AppService {
    studentDataList: FirebaseListObservable<any[]>;
    uid;
    check;
    check1;
    data = [];
    constructor(private af: AngularFire, private router: Router) {
    }
    studentCreateUser(value) {
        return this.af.auth.createUser({ email: value.email, password: value.password }).then((successfull) => {
            this.uid = successfull.uid;
            this.af.database.object('Users/Student/' + this.uid + '/value/').set({
                type: 'Student',
            })
            this.af.database.list('Users/Student/' + this.uid + '/value/').subscribe((x) => { this.check = x })
            this.router.navigate(['/dashboard']);
        })
            .catch((err) => {
                console.log("Error", err);
                alert("Error " + err);
            })
    }
    companyCreatUser(value) {
        return this.af.auth.createUser({ email: value.email, password: value.password }).then((successfull) => {
            this.uid = successfull.uid;
            this.af.database.object('Users/Company/' + this.uid + '/value/').set({
                type: 'Company'
            })
            this.af.database.list('Users/Company/' + this.uid + '/value/').subscribe((x) => { this.check1 = x })

            console.log("sssssssssss", this.uid)
            this.router.navigate(['/dashboard']);
        })
            .catch((err) => {
                console.log("Error", err);
                alert("Error " + err);
            })
    }
    hideData() {
        console.log(this.check)
        return this.check;
    }
    login(email, password) {
        this.hideData();
        this.af.auth.login({ email: email, password: password },
            { provider: AuthProviders.Password, method: AuthMethods.Password })
            .then(successfull => {
                this.uid = successfull.uid;
                console.log("login : ", successfull);
            })
            .then(() => this.router.navigate(['/dashboard']))
    }

    getAuthState() {
        return this.af.auth
    }

    studentResumeData(value) {
        this.af.database.object('Users/Student/' + this.uid).set({
            value: value,

        })
    }
    postAjobForm(value) {
        this.af.database.object('Users/Company/' + this.uid).set({
            value: value
        })
    }
    receiveStudentData() {
        return this.af.database.list('Users/Student/');
    }
    studentAndCompanyUid() {
        return this.uid;
    }
}