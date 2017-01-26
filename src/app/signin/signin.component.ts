import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import {AngularFire,AuthMethods,AuthProviders} from "angularfire2";
import {AppService} from ".././app.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
myForms : FormGroup;
a;
  constructor(private router:Router, fb : FormBuilder,private af: AngularFire, private appService: AppService) { 
    this.myForms = fb.group({
      "email" : ["", Validators.compose([Validators.required])],
      "password" : ["", Validators.compose([Validators.required])],
    })
  }
onSubmit(value){
  // this.emailAndPass(value.email,value.password);
  this.appService.emailAndPass(value.email,value.password);
}
 
  ngOnInit() {
  }

}
