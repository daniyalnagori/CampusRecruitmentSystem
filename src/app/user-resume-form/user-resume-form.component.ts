import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormControlName } from "@angular/forms";
import { AppService } from "../app.service";
import { AngularFire } from "angularfire2";
@Component({
  selector: 'app-user-resume-form',
  templateUrl: './user-resume-form.component.html',
  styleUrls: ['./user-resume-form.component.css']
})
export class UserResumeFormComponent implements OnInit {
  studentResume: FormGroup;
  constructor(private fb: FormBuilder, private appService: AppService, private af: AngularFire) {
    this.studentResume = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'fatherName': ['', Validators.required],
      'cnic': ['', Validators.required],
      'qualification': ['', Validators.required],
      'cgpa': ['', Validators.required],
      'gender': ['male', Validators.required],
      'status': ['single', Validators.required],
      'type': ['Student', Validators.required],
    })
  }
  studentFormSubmit(value) {
    this.appService.studentResumeData(value);
  }
  ngOnInit() {

  }
}
