import { Component, OnInit } from '@angular/core';
import { md5 } from "md5";
import { RequestOptions, Http, Headers } from "@angular/http";
import { API } from "app/models/api";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms"; 
import { StudentsService } from "../services/studentservice/students.service";
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http, public router: Router, public snackBar:MdSnackBar) { }

  ngOnInit() {  
  }

  title: any;
  result: any;
  login(username: any, password: any) {
    this.title = {
      user: username,
      password: password
    }
        let bodyString = JSON.stringify(this.title); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        this.http.post(API.login, bodyString, options)
        .subscribe(res => {
          this.result = JSON.parse(res.text())[0];
          console.log(this.result);
          if(this.result.user === this.title.user){
            StudentsService.putdetails(this.result.regno);
            this.snackBar.open("Login Successfull..","" ,{
                duration: 2000,
              });
            this.router.navigate(['studentpercentage' , this.result.regno]);
          }
          else{
            this.snackBar.open("Username and Password doesn't match!!","" ,{
                duration: 2000,
              });
          }
        })
  
  }
}
