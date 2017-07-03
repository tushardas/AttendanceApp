import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Http, RequestOptions, URLSearchParams } from "@angular/http";
import { sub } from "../models/subjecttaken";
import { TeacherserviceService } from "../services/teacherservice/teacherservice.service";
import { API } from "../models/api";
import { md5 } from "md5";
@Component({
  selector: 'app-takinwhichsub',
  templateUrl: './takinwhichsub.component.html',
  styleUrls: ['./takinwhichsub.component.css'],

})
export class TakinwhichsubComponent implements OnInit {

  constructor(private http:Http,  private route:ActivatedRoute, private router:Router) { }
  messages: sub;
  id:any;
  url : string = API.subjecttaken;
  ngOnInit() {
    //this.id = TeacherserviceService.getdetails;
    this.id = 1
    let params: URLSearchParams = new URLSearchParams();
    params.set('teacherid', this.id);
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    this.http.get(this.url,requestOptions)
    .subscribe(res => {
      this.messages = res.json();
      console.log(JSON.stringify(res));
    })
  
  }


  add(){
   this.router.navigate(['addsubject']);
  }
}
