import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AngularFire } from "angularfire2";
@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  companyForm: FormGroup;
  company: boolean = false;
  uid: string;
  constructor(private fb: FormBuilder, private af: AngularFire) {
    this.af.auth.take(1).subscribe((auth) => {
      if (auth !== null) {
        this.uid = auth.uid;
      }
    })
    this.companyForm = fb.group({
      "jobTitle": ["", Validators.compose([Validators.required])],
      "jobDescription": ["", Validators.compose([Validators.required])],
      "skills": ["", Validators.compose([Validators.required])],
      "location": ["", Validators.compose([Validators.required])],
      "address": ["", Validators.compose([Validators.required])],
      "type": 2,
    })
  }
  companyFormSubmit(value) {
    this.af.database.object('company/' + this.uid).set({
      jobTitle: value.jobTitle,
      jobDescription: value.jobDescription,
      skills: value.skills,
      location: value.location,
      address: value.address,
      type: value.type
    })
    console.log("object : ", value);
  }

  ngOnInit() {
  }
}


