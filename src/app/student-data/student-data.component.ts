import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { Router } from "@angular/router";
import { AppService } from "../app.service";
@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  isShown: boolean = false; // To Enable the dafault image in the img cropper every time
  modalShow: string;
  modalHide: string;
  classList = [];
  isCollapsed = false;
  present: boolean = true;
  studentDataList: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire, private router: Router, private appSerive: AppService) {
    this.receiveStudentData();
  }
  receiveStudentData() {
    this.studentDataList = this.appSerive.receiveStudentData();
  }

  modalOpen(i) {
    console.log(i);
    this.classList = ["modalShow"]
    this.isShown[i] = true;
  }
  modalClosed(i) {
    this.classList = ["modalHide"];
  }
  modalChanged(ev) {
    if (ev) {
      this.isShown = false;
      this.classList = ["modalHide"];
    }
  }
  isCollapsedd(index) {
    console.log(index);
    this.isCollapsed = index;
  }
  // keys(object) {
  //   return object ? Object.keys(object) : [];
  // }


  ngOnInit() {
  }

}
