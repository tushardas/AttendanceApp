import { Component, OnInit } from '@angular/core';
import { RequestOptions, Headers, Http } from "@angular/http/";
import { API } from "../models/api";
import { Router } from "@angular/router";
import { md5 } from "md5";
import { TeacherserviceService } from "../services/teacherservice/teacherservice.service";

@Component({
  selector: 'app-logteacher',
  templateUrl: './logteacher.component.html',
  styleUrls: ['./logteacher.component.css']
})
export class LogteacherComponent implements OnInit {

  constructor(private http:Http, private router:Router
  ) { }

  ngOnInit() {
    console.log(md5("5a1d589b6e125ecdc8cc469d704d7f10"));
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
        this.http.post(API.logteacher, bodyString, options)
        .subscribe(res => {
          this.result = JSON.parse(res.text())[0];
          console.log(this.result);
          if(this.result.user === this.title.user){
            TeacherserviceService.putdetails(this.result.teacherid);
            this.router.navigate(['subjecttaken' , this.result.teacherid]);
          }
          else{
            console.log('error');
          }
        })
  
  }
}
