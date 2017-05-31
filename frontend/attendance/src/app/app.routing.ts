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
      path: 'subjecttaken',
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
      path: 'teacherdetails',
      component: TeacherdetailsComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'loginas',
      component: LoginAsComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);