import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from "@angular/material";
import { details } from "../models/studentdetails";
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Observable} from 'rxjs';
import { API } from "../models/api";
import { Router } from "@angular/router";
import { TeacherserviceService } from "../services/teacherservice/teacherservice.service";

@Component({
  selector: 'app-takinattendance',
  templateUrl: './takinattendance.component.html',
  styleUrls: ['./takinattendance.component.css'],
})
export class TakinattendanceComponent implements OnInit {

  constructor(private http:Http , private router:Router) { 

  }

  det=[];

  submit(){
    console.log('submit');
    //this.http.post('http://192.168.43.55:8081/submit',this.det)

        let bodyString = JSON.stringify(this.det); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        this.http.post(API.submit, bodyString, options)
        .toPromise() // ...using post request
    }   

  ngOnInit() {

    this.http.get(API.attendancetaken)
      .subscribe(res => {
        this.det = res.json();
        console.log(JSON.stringify(this.det));
  })
  }
      
  cancel(){
    this.router.navigate(['subjecttaken',TeacherserviceService.getdetails]);
  }

}
