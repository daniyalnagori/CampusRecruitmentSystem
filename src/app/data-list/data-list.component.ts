import { Component, OnInit } from '@angular/core';
import { AppService } from ".././app.service";
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";
@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  resume: boolean = false;
  studentList: Array<string>;
  companyList: Array<string>;
  typeName: number;
  studentType: number;
  jobPost: boolean = false;
  constructor(private router: Router, private af: AngularFire, private appService: AppService) {
    console.log("dasd", this.studentList)


  }
  logout() {
    this.af.auth.logout();
    this.router.navigate(['/signin']);
  }
  openResume() {
    this.resume = true;
  }
  closeResume() {
    this.resume = false;
  }
  companyJobForm() {
    this.jobPost = true;
  }
  ngOnInit() {
    this.appService.getStudentType().subscribe((x) => {
      this.typeName = x.type;
      console.log(this.typeName);
    });
    console.log(this.typeName);

    this.appService.getStudentData().subscribe((x) => {
      if (this.typeName !== 1) {
        this.studentList = x;
        console.log("sL", this.studentList);
      }
    });
    this.appService.getCompanyData().subscribe((x) => {
      if (this.typeName !== 2) {
        this.companyList = x;
        console.log("cL", this.companyList);
      }
    })

  }

}
