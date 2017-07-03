import { Injectable } from '@angular/core';
import { details } from "../../models/studentdetails";
@Injectable()
export class StudentsService {
  public static student: details = {
     regno:null,
    name:null,
    sem:-1,
    phone:null,
    email:null,
    dept:-1,
    dummy: false
  }
  constructor() { 
  }

  public static get getdetails(){
    if(this.student.regno == null){
      return false;
    }
    else
      return this.student.regno;
  }

  public static putdetails(regno:string = null,name:string = null,sem:number = -1,phone:string = null,email:string = null,dept:number = -1){
    this.student.regno = regno,
    this.student.name = name,
    this.student.sem = sem,
    this.student.phone = phone,
    this.student.email = email,
    this.student.dept = dept
  }
}
