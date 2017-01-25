import {Injectable} from "@angular/core";
import {AngularFire}from "angularfire2"
@Injectable()

export class AppService{
    names: Array<any>;
 constructor(private af : AngularFire) {
    // firebase.database().ref('/Names').on("child_added", snap => {
    //   console.log("aaa",snap.val());
    // })
    // setTimeout(() => {
    //   this.names;
    // })
  }   
  getData(){
  return  this.af.database.list('/Names');
    //  .subscribe(x => {
    //   this.names= x;
    //   console.log(this.names);
      // return x;
    // });
    // console.log(this.names)
    // return this.names;
   
  }
}