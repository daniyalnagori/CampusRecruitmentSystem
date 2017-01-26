import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from ".././app.service";
import { AngularFire } from "angularfire2";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  resume: boolean = false;
  owner;
  studentData = [];
  studentList: Array<string>;
  companyList: Array<string>;
  typeName: number;
  studentType: number;
  jobPost: boolean = false;
  constructor(private router: Router, private af: AngularFire, private appService: AppService) {
    console.log("dasd", this.studentList);
  }
  logout() {
    this.af.auth.logout();
    this.router.navigate(['/signin']);
  }
  interview(){
    alert("Selected for the interview");
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
      this.owner = x;
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
   appliedForJob(i) {
     alert("You will receive an email")
    this.appService.getStudentDataa().subscribe(x => {
      console.log(x);
      for(var i=0; i < x.length; i++){
  this.studentData.push(x[i].firstName,x[i].lastName,x[i].qualification,x[i].cgppa);
      }
      console.log(this.studentData);
    })
    console.log("abcddddddd", i);
    console.log("", this.owner);
    let name = i;
    firebase.database().ref('/company').child(i).push({"key" : this.studentData});
  }
}

