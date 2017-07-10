import { Component, OnInit } from '@angular/core';
import { md5 } from "md5";
import { RequestOptions, Http, Headers } from "@angular/http";
import { API } from "app/models/api";
import {MdSnackBar} from '@angular/material';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  constructor(private http: Http , private router:Router, public snackBar: MdSnackBar) { }
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
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    this.http.post(API.signup, body, options)
      .subscribe(
        response =>{
          this.res = JSON.parse(response.text())[0];
            if(this.res.code === 1){
              this.snackBar.open("Signup Successfull..","" ,{
                duration: 2000,
              });
              this.router.navigate(['loginas']);
            }
            else{
              console.log("Snackbar shud open")
              this.snackBar.open("Signup Unsuccessfull.. Try Another username","" ,{
                duration: 2000,
              });
            }
        })
     // ...using post request
  }


  decider :boolean = true;
  chip : string = 'primary';
  tsignup(username: any, password: any,teacherid:any,name:any,email:any,department:number) {
    //password = md5(password);
    this.user = {
      username: username,
      password: password,
      teacherid: teacherid,
      name: name,
      email: email,
      department: department
    }

    
    let body = JSON.stringify(this.user);
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    this.http.post(API.teachersignup, body, options)
      .subscribe(
        response =>{
          this.res = JSON.parse(response.text())[0];
            this.result = this.res.code;
            if(this.result === 1){
              this.snackBar.open("Signup Successfull..","" ,{
                duration: 2000,
              });
              this.router.navigate(['loginas'])
            }
            else{
              this.snackBar.open("Signup Unsuccessfull.. Try Another username","" ,{
                duration: 2000,
              });
            }   
        })
     // ...using post request
  }

  chipselect(num: number){
    if(num == 1){
      this.chip = 'accent'
      this.decider = true;
    }

    if(num == 2){
      this.chip = 'primary'
      this.decider = false;
    }
  }
}
