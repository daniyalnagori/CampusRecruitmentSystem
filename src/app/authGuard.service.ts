import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import "rxjs/add/operator/take";
@Injectable()

export class AuthGuardService implements CanActivate {
    login: boolean = true;
    constructor(private af: AngularFire, private route: Router) { }
    canActivate() {
        return this.af.auth.map(user => {
            if (user != null) {
                this.login = true;
                return true;
            }
            else {
                this.login = false;
                this.route.navigate(['/signin']);
                return false;
            }
        }).take(1)

    }

}