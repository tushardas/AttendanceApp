import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdCardModule,MdTabsModule,MdSidenavModule,MdSlideToggleModule, MdIconModule,MdToolbarModule,MdButtonModule, MdMenuModule, MdListModule,MdProgressBarModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { StudentpercentageComponent } from './studentpercentage/studentpercentage.component';
import { CalendarviewComponent } from './calendarview/calendarview.component';
import { TakinattendanceComponent } from './takinattendance/takinattendance.component';
import { TakinwhichsubComponent } from './takinwhichsub/takinwhichsub.component';
import { routing } from "./app.routing";
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { StudentsService } from "./services/students.service";
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoginAsComponent } from './login-as/login-as.component';
import { LogteacherComponent } from './logteacher/logteacher.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentpercentageComponent,
    CalendarviewComponent,
    TakinattendanceComponent,
    TakinwhichsubComponent,
    StudentdetailsComponent,
    TeacherdetailsComponent,
    CalendarComponent,
    SignupComponent,
    LoginComponent,
    LoginAsComponent,
    LogteacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdTabsModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdSidenavModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdProgressBarModule,
    routing
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
