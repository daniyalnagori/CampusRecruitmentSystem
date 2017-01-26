import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

resume : boolean = false;
studentList :Array<string>;

jobPost : boolean = false;
  constructor(private router: Router, private af : AngularFire) { 
  }
logout(){
this.af.auth.logout();
 this.router.navigate(['/signin']);
}
  ngOnInit() {
  }

}
