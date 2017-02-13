import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service"
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  jobForm: FormGroup;
  constructor(private fb: FormBuilder, private appService: AppService) {
    this.jobForm = fb.group({
      'companyName': ['', Validators.required],
      'website': ['', Validators.required],
      'jobtitle': ['', Validators.required],
      'description': ['', Validators.required],
      'type': ['Company', Validators.required]
    })
  }
  companyJobForm(value) {
    this.appService.postAjobForm(value);
  }
  ngOnInit() {
  }

}
