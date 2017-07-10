import { Component, OnInit } from '@angular/core';
import { RequestOptions, Http, Headers } from "@angular/http";
import { API } from "app/models/api";
import { TeacherserviceService } from "../services/teacherservice/teacherservice.service";
import { Router } from "@angular/router";
import { MdInputContainer } from "@angular/material"


@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  constructor(private http:Http, private router:Router) { }

  ngOnInit() {
  }

  add(name :string, department: number, semester: number){
    let subject:any = {
      name: name,
      department: department,
      semester: semester,
      id: 1
    }
    let bodyString = JSON.stringify(subject); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    this.http.post(API.addsub,bodyString,options)
    .subscribe(res => {
        let result:any = res.json();
       
       if(result.message == "Successful"){
          this.router.navigate(['subjecttaken',TeacherserviceService.getdetails])
       }
       else{
         console.log("Not successful");
       }
  })
}

cancel(){
  this.router.navigate(['subjecttaken',TeacherserviceService.getdetails])
}
}
