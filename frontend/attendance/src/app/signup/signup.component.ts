import { Component, OnInit } from '@angular/core';
import { md5 } from "md5";
import { RequestOptions, Http, Headers } from "@angular/http";
import { API } from "app/models/api";
import { RES } from "app/models/result";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: Http) { }
  user:any
  ngOnInit() {
  }
  result:number;
  res : any = []
  signup(username: any, password: any,regno:any,name:any,email:any,contact:any,department:number,semester:number) {
    password = md5(password);
    this.user = {
      username: username,
      password: password,
      regno: regno,
      name: name,
      email: email,
      contact: contact,
      department: department,
      semester: semester
    }

    
    let body = JSON.stringify(this.user);
    console.log(this.user);
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    console.log(body);
    this.http.post(API.signup, body, options)
      .subscribe(
        response =>{
          this.res = JSON.parse(response.text())[0];
          console.log(this.res);
            this.result = this.res.code;
        })
     // ...using post request
  }




  teachersignup(username: any, password: any,teacherid:any,name:any,email:any,department:number) {
    password = md5(password);
    this.user = {
      username: username,
      password: password,
      teacherid: teacherid,
      name: name,
      email: email,
      department: department
    }

    
    let body = JSON.stringify(this.user);
    console.log(this.user);
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    console.log(body);
    this.http.post(API.teachersignup, body, options)
      .subscribe(
        response =>{
          this.res = JSON.parse(response.text())[0];
          console.log(this.res);
            this.result = this.res.code;
        })
     // ...using post request
  }
}
