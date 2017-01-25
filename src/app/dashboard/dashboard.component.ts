import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private af : AngularFire) { }
logout(){
// this.af.auth.logout();
console.log("aaaaaaaa");
 this.router.navigate(['/signin']);
}
  ngOnInit() {
  }

}
