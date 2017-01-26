import {Injectable} from "@angular/core";
import {AngularFire}from "angularfire2"
@Injectable()

export class AppService{
    names: Array<any>;
 constructor(private af : AngularFire) {
 }
}