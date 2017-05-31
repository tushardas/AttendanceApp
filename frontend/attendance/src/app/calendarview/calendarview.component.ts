import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
// import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
@Component({
  selector: 'app-calendarview',
  templateUrl: './calendarview.component.html',
  styleUrls: ['./calendarview.component.css']
})
export class CalendarviewComponent{

  constructor(private route: ActivatedRoute) {

    }

  calendarOptions:Object = {
       // height: 'parent',
        fixedWeekCount : false,
        defaultDate: new Date(),
        editable: false,
        eventLimit: false, // allow "more" link when too many events
        events: [
          {
            title: 'Absent',
            start: '2016-09-01',
            //eventBackgroundColor: 'red'
          },
          {
            title: 'Present',
            start: '2016-09-02',
          },
          {
            title: 'Present',
            start: '2016-09-03T00:00:00',
            end: '2016-09-03T23:59:59'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-09-16'
          },
          {
            title: 'Conference',
            start: '2016-09-11',
            end: '2016-09-13'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T10:30:00',
            end: '2016-09-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2016-09-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2016-09-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2016-09-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2016-09-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2016-09-28'
          }
        ]}

}
