import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdCardModule, MdSlideToggleModule, MdToolbarModule,MdButtonModule, MdListModule,MdProgressBarModule} from '@angular/material';
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
@NgModule({
  declarations: [
    AppComponent,
    StudentpercentageComponent,
    CalendarviewComponent,
    TakinattendanceComponent,
    TakinwhichsubComponent,
    StudentdetailsComponent,
    TeacherdetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdProgressBarModule,
    routing
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
