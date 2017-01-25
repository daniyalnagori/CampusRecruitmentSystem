import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { AppService } from '.././app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MdDialog } from "@angular/material"
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  names = [];
  a = false;
  items: FirebaseListObservable<{}>;
  myForms: FormGroup;
  constructor(public mD: MdDialog, private af: AngularFire, private appService: AppService, private fb: FormBuilder) {

    this.items = this.af.database.list('/Job');
    this.af.database.list('/Names').subscribe(x => {
      this.names = x;
    });
    this.myForms = this.fb.group({
      'firstName': [null, Validators.compose([])],
      'lastName': ['', Validators.compose([Validators.required])],
      'type': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])],
      'location': ['', Validators.compose([Validators.required])]
    })
  }
  onSubmit(value) {
    let a = this.af.database.list('Job');
    a.push({ firstName: value.firstName, lastName: value.lastName,type : value.type, email: value.email, password: value.password, location: value.location });
    console.log("aaaaaaaaaaaaaaaa", value);
    firebase.auth().createUserWithEmailAndPassword(value.email,value.password).then((x) => {
      alert("successful");
    }).catch((err) => {
      alert(err);
    })
  }
  getData() {
    this.a = true;
  }
  openDialog() {
    this.mD.open(JobComponent);
  }
  onDelete(key) {
    // console.log("iiiiiii",i);
    this.items.remove(key);
  }
  ngOnInit() {
  }

}
