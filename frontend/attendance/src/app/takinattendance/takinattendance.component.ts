import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../services/students.service";
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from "@angular/material";
import { details } from "../models/studentdetails";
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Observable} from 'rxjs'
@Component({
  selector: 'app-takinattendance',
  templateUrl: './takinattendance.component.html',
  styleUrls: ['./takinattendance.component.css'],
  providers: [StudentsService]
})
export class TakinattendanceComponent implements OnInit {

  constructor(private studentservice: StudentsService, private http:Http) { 

  }

  det=[];

  submit(){
    console.log('submit');
    //this.http.post('http://192.168.43.55:8081/submit',this.det)

        let bodyString = JSON.stringify(this.det); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        console.log('sddfsd');
        this.http.post('http://192.168.43.55:8081/submit', bodyString, options)
        .toPromise() // ...using post request
    }   

  ngOnInit() {

    this.http.get('http://192.168.43.55:8081/attendancetaken')
      .subscribe(res => {
        this.det = res.json();
        console.log(JSON.stringify(this.det));
  })
//console.log(res.json());
      
  }

}
