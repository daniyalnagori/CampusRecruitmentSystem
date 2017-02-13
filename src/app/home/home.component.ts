import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForms: FormGroup;
  constructor(private router: Router, fb: FormBuilder, private af: AngularFire, private appService: AppService) {
    this.myForms = fb.group({
      "email": ["", Validators.compose([Validators.required])],
      "password": ["", Validators.compose([Validators.required])],
    })
  }
  onSubmit(value) {
    this.appService.login(value.email, value.password);
  }
  ngOnInit() {
  }

}
