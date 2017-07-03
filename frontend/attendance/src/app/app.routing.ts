import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentpercentageComponent } from './studentpercentage/studentpercentage.component'
import { CalendarviewComponent } from "./calendarview/calendarview.component";
import { TakinattendanceComponent } from "./takinattendance/takinattendance.component";
import { TakinwhichsubComponent } from "./takinwhichsub/takinwhichsub.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { TeacherdetailsComponent } from "./teacherdetails/teacherdetails.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { LoginAsComponent } from "./login-as/login-as.component";
import { LogteacherComponent } from "./logteacher/logteacher.component";
import { AddsubjectComponent } from "./addsubject/addsubject.component";
const appRoutes: Routes = [
    {
      path: 'studentpercentage/:regno',
      component: StudentpercentageComponent
      
    },
    // {
    //   path: 'calendarview',
    //   component: CalendarviewComponent
    // },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'attendancetaken',
      component: TakinattendanceComponent 
    },
    {
      path: 'subjecttaken/:teacherid',
      component: TakinwhichsubComponent
    },
    {
      path: 'studentdetails',
      component: StudentdetailsComponent
    },
    {
      path: 'logteacher',
      component: LogteacherComponent
    },
    {
      path: 'teacherdetails/:teachername',
      component: TeacherdetailsComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'loginas',
      component: LoginAsComponent
    },
    {
      path: 'addsubject',
      component: AddsubjectComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);