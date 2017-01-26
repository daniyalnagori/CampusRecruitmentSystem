import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";
@Component({
  selector: 'app-student-resume',
  templateUrl: './student-resume.component.html',
  styleUrls: ['./student-resume.component.css']
})
export class StudentResumeComponent implements OnInit {

  studentResume: FormGroup;
resume: boolean ;
  student = true;
  uid: string;
  company = false;
  constructor(fb: FormBuilder, private af: AngularFire, private router: Router) {
    this.af.auth.take(1).subscribe((auth) => {
      if (auth !== null) {
        this.uid = auth.uid;
      }
    })

    this.studentResume = fb.group({
      "firstName": ["", Validators.compose([Validators.required])],
      "lastName": ["", Validators.compose([Validators.required])],
      "fatherName": ["", Validators.compose([Validators.required])],
      "cnic": ["", Validators.compose([Validators.required])],
      "qualification": ["", Validators.compose([Validators.required])],
      "cgpa": ["", Validators.compose([Validators.required])],
      "gender": [""],
      "status": [""],
      "type": 1,
    })
  }

  studentResumeSubmit(value) {
    this.af.database.object('student/' + this.uid).set({
      firstName: value.firstName,
      lastName: value.lastName,
      fatherName: value.fatherName,
      cnic: value.cnic,
      qualification: value.qualification,
      cgppa : value.cgpa,
      gender: value.gender,
      status: value.status,
      type: value.type
    })

  }
  ngOnInit() {
  }
closeResume(){
  this.resume = false;
}

}