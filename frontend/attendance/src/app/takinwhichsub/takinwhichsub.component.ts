import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { sub } from "../models/subjecttaken";
import { API } from "../models/api";
import { SubbyTeacherService } from "../services/subby-teacher.service";
import { md5 } from "md5";
@Component({
  selector: 'app-takinwhichsub',
  templateUrl: './takinwhichsub.component.html',
  styleUrls: ['./takinwhichsub.component.css'],
  providers: [SubbyTeacherService]
})
export class TakinwhichsubComponent implements OnInit {

  constructor(private http:Http, private subjectService: SubbyTeacherService) { }
  messages: sub;
  url : string = API.subjecttaken;
  ngOnInit() {
    let e = md5('abcd');
    console.log(e);
    this.http.get(this.url)
    .subscribe(res => {
      this.messages = res.json();
      console.log(JSON.stringify(res));
    })
  
  }


}
