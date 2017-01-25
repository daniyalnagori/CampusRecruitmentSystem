import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  studentForm: FormGroup;
  companyForm: FormGroup;
  getFormValue;
  student = true;
  company = false;
  constructor(fb: FormBuilder, private af: AngularFire, private router: Router) {
    this.studentForm = fb.group({
      "email": ["", Validators.compose([Validators.required])],
      "firstName": ["", Validators.compose([Validators.required])],
      "lastName": ["", Validators.compose([Validators.required])],
      "password": ["", Validators.compose([Validators.required])],
      // "password": ["", Validators.compose([Validators.required, Validators.minLength(5), this.skuValidator])],
    })
    this.companyForm = fb.group({
      "cemail": ["", Validators.compose([Validators.required])],
      "cfirstName": ["", Validators.compose([Validators.required])],
      "clastName": ["", Validators.compose([Validators.required])],
      "cpassword": ["", Validators.compose([Validators.required])],
      // "password": ["", Validators.compose([Validators.required, Validators.minLength(5), this.skuValidator])],
    })
  }
  skuValidator(control: FormControl) {
    if (!control.value.match(/^[A-Za-z]{3}/)) {
      //     console.log("Aaaaaaaaaaaaaa", control);
      return { invalidEmail: true };
    }
  }
  onSubmit(value) {

    this.getFormValue = value.password;
    console.log("aaaaaaaaaaaaa", value, "aaaaaaaaaaaaaaaaaaa", this.studentForm.valid);
    if (this.getFormValue.length > 5 && this.getFormValue.match((/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/))) {
      this.getFormValue = this.getFormValue.slice(0, 4) + "...";
      this.emailAndPass(value.email, value.password);
      console.log("aaaa", this.getFormValue);
    }
    else {
      alert("Password must be at least 15 characters including one uppercase letter, one number and alphanumeric characters");
    }
  }
  emailAndPass(email, password) {
    firebase.database().ref('password').push({ password: password });
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      alert("successfully registered");
    }).catch((err) => {
      alert(err);
    })
  }
  studentFormSubmit(value) {
    event.preventDefault();
    console.log("Dadasd", value);
    this.af.auth.createUser({ email: value.email, password: value.password }).then(function () {
      alert("successfull");
    }).catch((err) => {
      alert(err);
    })

  }
  companyFormSubmit(value) {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(value.cemail, value.cpassword).then(function () {
      alert("successfull");
    }).catch((err) => {
      alert(err);
    })
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