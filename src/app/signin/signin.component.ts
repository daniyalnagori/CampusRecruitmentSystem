import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import {AngularFire,AuthMethods,AuthProviders} from "angularfire2";
import {Router} from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
myForms : FormGroup;
  constructor(private router:Router, fb : FormBuilder,private af: AngularFire) { 
    this.myForms = fb.group({
      "email" : ["", Validators.compose([Validators.required])],
      "password" : ["", Validators.compose([Validators.required])],
    })
  }
onSubmit(value){
  // firebase.auth().signInWithEmailAndPassword(value.email,value.password).then((c) =>{
  //   console.log("successfully registered");
  // }).catch(err => {
  //   console.log(err);
  // })
  this.emailAndPass(value.email,value.password);
}
// emailAndPass(email,password){
//   this.af.auth.login({email:email,password:password}).then((c) => {
//         // console.log("successfully registered");
//         this.router.navigate(['/dashboard']);
//   }).catch((err) => {
//     console.log(err);
//   })
// }
  emailAndPass(email, password) {
    this.af.auth.login(
      { email: email, password: password },
      { provider: AuthProviders.Password, method: AuthMethods.Password }
    ).then((res) => {
      // alert("Sign in successful");
      this.router.navigate(['/dashboard']);
    }, (err) => {
      alert(err);
    })
  }
  ngOnInit() {
  }

}
