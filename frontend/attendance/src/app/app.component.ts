import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdMenuModule } from '@angular/material';
import { StudentsService } from "./services/studentservice/students.service";
import { details } from "./models/studentdetails";
import { TeacherserviceService } from "./services/teacherservice/teacherservice.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  test;teachertest;
  constructor(private router: Router ) { }
ngOnInit(): void {
  // this.teachertest = TeacherserviceService.getdetails
  //   this.test = StudentsService.getdetails
  //   if(this.test == false){
  //     if(this.teachertest == false)
  //       this.router.navigate(['loginas']);
  //     else
  //       this.router.navigate(['subjecttaken',this.teachertest]);
  //   }
  //   else{
  //     this.router.navigate(['studentpercentage',this.test]);
  //   }
}

logout(){
  if(this.teachertest > 0 ){
    TeacherserviceService.putdetails()
    this.router.navigate(['loginas'])
  }

  else if(this.test != null){
    StudentsService.putdetails()
    this.router.navigate(['loginas'])
  }
}
}
