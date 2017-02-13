import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { Router } from "@angular/router";
import { AppService } from "../app.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  studentDataList: FirebaseListObservable<any[]>;
  check = [];
  constructor(private af: AngularFire, private router: Router, private appSerive: AppService) {
  }


  ngOnInit() {
  }

}
