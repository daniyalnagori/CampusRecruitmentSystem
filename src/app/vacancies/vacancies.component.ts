import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { AppService } from "../app.service";
@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  uid;
  public isCollapsed = false;
  jobs: FirebaseListObservable<[any]>
  constructor(private af: AngularFire, private appService: AppService) {
    this.uid = this.appService.studentAndCompanyUid();
    this.jobs = this.af.database.list('Users/Company/');
  }

  ngOnInit() {
  }

}
