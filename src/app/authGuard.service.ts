import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import "rxjs/add/operator/take";    
@Injectable()

export class AuthGuardService implements CanActivate{
// login : boolean =true;
login_flag : boolean = true;
constructor(private af : AngularFire, private route: Router){}
 canActivate() {
        return this.af.auth.map(user => {
            if (user != null) {
                this.login_flag=true;
            // console.log("aaaaaaaaaaaaaaaaaaaa",user)    
                return true;
            }
            else {
                this.login_flag = false;
                // alert("Access Denied! Please login");
                this.route.navigate(['/signin']);
                //  console.log("bbbbbbbbbbbbbbbbbbb",user); 
                return false;
            }
        }) .take(1) 

    }

}