import { Injectable } from '@angular/core';
import { sub } from "../../models/subjecttaken";
@Injectable()
export class SubjecttakenService {

  constructor() { }

public static takingsubject:sub = {
   subject: null,
    sem : -1,
    teacherid: -1,
    courseid: -1,
    department: -1,
    total: -1
}

public static get getdetails(){
  return this.takingsubject;
}

public static putdetails(subject:string,sem:number,teacherid:number,courseid:number,department:number,total:number){
    this.takingsubject.subject = subject,
    this.takingsubject.sem = sem,
    this.takingsubject.teacherid = teacherid,
    this.takingsubject.courseid = courseid,
    this.takingsubject.department = department,
    this.takingsubject.total = total;
  }
}
