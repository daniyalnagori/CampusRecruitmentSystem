import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";
import { AppService } from "../app.service";
import { Observable } from "rxjs";
@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {
  uid: any;
  check;
  check1;
  checking;
  userUid;
  constructor(private router: Router, private af: AngularFire, private appService: AppService) {
    this.CompanyOrStudentUid();
  }
  logout() {
    this.af.auth.logout().then(logout => {
      console.log('logout : ', logout);
      this.router.navigate(['/signin']);
    })
  }
  CompanyOrStudentUid() {
    this.uid = this.appService.studentAndCompanyUid();
  }

  ngOnInit() {
    // this.appService.getAuthState().subscribe((x) => { console.log(this.userUid = x.uid) });
    this.appService.getAuthState()
      // if (this.af.database.list('Users/')
      //   .map((x) => { x.map((x) => { console.log(this.check1 = x[this.userUid].value.type) }) })
      //   // .map((y) => { console.log(y[this.userUid]) }))
      //   .subscribe((x) => {

      //   })) {
      // }
      // else {
      //   // this.check1 = 'Company';
      // }

      .subscribe(auth => auth != null ? this.userUid = auth.uid : console.info("user is Logged Out"));
    // if (this.af.database.list('Users')) {
    this.af.database.list('Users/Company/' + this.userUid).subscribe((x) => {
      console.log(x)
      if (x.length) {
        this.check1 = x[0].type;
      } else {
        this.af.database.list('Users/Student/' + this.userUid).subscribe((x) => { this.check = x[0].type });
      }
    });
    // }
  }
}
