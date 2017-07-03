import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Http, RequestOptions, URLSearchParams } from "@angular/http";
import { API } from "app/models/api";
@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrls: ['./teacherdetails.component.css']
})
export class TeacherdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:Http) { }
  title:any
  ngOnInit() {

    let teachername: string = this.route.snapshot.params['name'];
    console.log(teachername);
    let params: URLSearchParams = new URLSearchParams();
    params.set('name', teachername);
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    this.http.get(API.teacherdetails, requestOptions)
      .subscribe(res =>
        this.title = res.json())
  }
}
