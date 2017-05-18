import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { sub } from "../models/subjecttaken";
import { SubbyTeacherService } from "../services/subby-teacher.service";
@Component({
  selector: 'app-takinwhichsub',
  templateUrl: './takinwhichsub.component.html',
  styleUrls: ['./takinwhichsub.component.css'],
  providers: [SubbyTeacherService]
})
export class TakinwhichsubComponent implements OnInit {

  constructor(private http:Http, private subjectService: SubbyTeacherService) { }
  messages: sub;
  ngOnInit() {
    
    this.http.get('http://127.0.0.1:8081/subjecttaken')
    .subscribe(res => {
      this.messages = res.json();
      console.log(JSON.stringify(res));
    })
  
  }


}
