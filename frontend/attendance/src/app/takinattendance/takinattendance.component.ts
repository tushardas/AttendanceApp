import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from "@angular/material";
import { details } from "../models/studentdetails";
import { Http, RequestOptions, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Observable} from 'rxjs';
import { API } from "../models/api";
import { attendancetaking } from "../models/submitattendance";
import { Router, Params, ActivatedRoute } from "@angular/router";
import { TeacherserviceService } from "../services/teacherservice/teacherservice.service";

@Component({
  selector: 'app-takinattendance',
  templateUrl: './takinattendance.component.html',
  styleUrls: ['./takinattendance.component.css'],
})
export class TakinattendanceComponent implements OnInit {

  constructor(private http:Http , private router:Router, private route:ActivatedRoute) { 

  }
  det : any;
  id : any;
  courseid : any;
  submit(){

        let params: URLSearchParams = new URLSearchParams();
        params.set('courseid',this.courseid);
        let requestOptions = new RequestOptions();
        requestOptions.search = params;
        this.http.get(API.set,requestOptions).subscribe()
        
        let bodyString = JSON.stringify(this.det); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        this.http.post(API.submit, bodyString, options)
        .toPromise() // ...using post request

        this.cancel();
    }   

  ngOnInit() {
    
    this.id = this.route.snapshot.params['cid'];
    this.http.get(API.attendancetaken)
      .subscribe(res => {
        this.det = res.json();      
    })
    this.courseid = this.id
  }
  cancel(){
    this.router.navigate(['subjecttaken',TeacherserviceService.getdetails]);
  }

}
