import { Component, OnInit } from '@angular/core';
import { RequestOptions, Headers, Http } from "@angular/http/";
import { API } from "../models/api";
import { Router } from "@angular/router";
@Component({
  selector: 'app-logteacher',
  templateUrl: './logteacher.component.html',
  styleUrls: ['./logteacher.component.css']
})
export class LogteacherComponent implements OnInit {

  constructor(private http:Http, private router:Router
  ) { }

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
          this.result = res.text();
          console.log(this.result);
          if(this.result.user == this.title.user){
            this.router.navigate(['studentpercentage' , this.result.regno]);
          }
          else{
            console.log('error');
          }
        })
  
  }
}
