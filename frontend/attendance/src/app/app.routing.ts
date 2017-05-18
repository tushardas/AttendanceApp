import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentpercentageComponent } from './studentpercentage/studentpercentage.component'
import { CalendarviewComponent } from "./calendarview/calendarview.component";
import { TakinattendanceComponent } from "./takinattendance/takinattendance.component";
import { TakinwhichsubComponent } from "./takinwhichsub/takinwhichsub.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { TeacherdetailsComponent } from "./teacherdetails/teacherdetails.component";

const appRoutes: Routes = [
    {
      path: 'studentpercentage',
      component: StudentpercentageComponent
      
    },
    {
      path: 'calendarview',
      component: CalendarviewComponent
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
      path: 'teacherdetails',
      component: TeacherdetailsComponent
    },
    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);