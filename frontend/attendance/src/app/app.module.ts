import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdInputContainer,MdSnackBarModule,MdChipsModule,MdCardModule,MdInputModule,MdTabsModule,MdSidenavModule,MdSlideToggleModule, MdIconModule,MdToolbarModule,MdButtonModule, MdMenuModule, MdListModule,MdProgressBarModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { StudentpercentageComponent } from './studentpercentage/studentpercentage.component';
import { TakinattendanceComponent } from './takinattendance/takinattendance.component';
import { TakinwhichsubComponent } from './takinwhichsub/takinwhichsub.component';
import { routing } from "./app.routing";
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { StudentsService } from "./services/studentservice/students.service";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoginAsComponent } from './login-as/login-as.component';
import { LogteacherComponent } from './logteacher/logteacher.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentpercentageComponent,
    TakinattendanceComponent,
    TakinwhichsubComponent,
    StudentdetailsComponent,
    TeacherdetailsComponent,
    SignupComponent,
    LoginComponent,
    LoginAsComponent,
    LogteacherComponent,
    AddsubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdTabsModule,
    MdChipsModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdSidenavModule,
    MdToolbarModule,
    MdSnackBarModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdProgressBarModule,
    MdListModule,
    MdInputModule,
    FormsModule,
    routing
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
