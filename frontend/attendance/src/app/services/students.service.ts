import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { TakinattendanceComponent } from "../takinattendance/takinattendance.component";
import { details } from "../models/studentdetails";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class StudentsService {
  sem: number;
  private url = 'http://192.168.43.55:8081/studentdetails';
  constructor(private http: Http) {
  }
 

}
