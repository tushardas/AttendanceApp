import { Injectable } from '@angular/core';
import { teacherdetails } from "../../models/teacherdetails";
@Injectable()
export class TeacherserviceService {
  public static details : teacherdetails = {
    teacherid : -1,
    name : null,
    email : null,
    department : -1
  }
  constructor() { }

  public static get getdetails(){
    if(this.details.teacherid < 0 )
      return false;
    else
      return this.details.teacherid;
  }

  public static putdetails(teacherid:number = -1, name:string = null, email:string = null, department:number = -1){
    this.details.teacherid = teacherid,
    this.details.name = name,
    this.details.email = email,
    this.details.department = department
  }
}
