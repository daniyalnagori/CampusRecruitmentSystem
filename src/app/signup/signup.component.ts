import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";
import { AppService } from "../app.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  student = true;
  company = false;
  uid;
  studentSignUp: FormGroup;
  companySignup: FormGroup;
  formType: any;
  constructor(fb: FormBuilder, private appService: AppService, private router: Router, private af: AngularFire) {
    this.studentSignUp = fb.group({
      'email': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', Validators.required],
      'student': ['Student', Validators.required],
    })
    this.companySignup = fb.group({
      'email': ['', Validators.required],
      'companyName': ['', Validators.required],
      'contactNumber': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }
  studentSignUpSubmit(value) {
    this.appService.studentCreateUser(value);
  }
  companySignupFormSubmit(value) {
    this.appService.companyCreatUser(value);
  }
  onChange(value) {
    // this.company = true;
    console.log("dasdasdas", value);
    if (value === 'student') {
      this.student = true;
      this.company = false;
    }
    else if (value === "company") {
      this.company = true;
      this.student = false;
    }
  }
  ngOnInit() {
  }


}