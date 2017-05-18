import { Component, OnInit } from '@angular/core';
import { MdCard, MdList } from '@angular/material';
import { Params, ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";
//import { StudperService } from "../services/studper.service";
import { studper } from "../models/studper";
@Component({
  selector: 'app-studentpercentage',
  templateUrl: './studentpercentage.component.html',
  styleUrls: ['./studentpercentage.component.css'],
  //providers: [studper]

})

export class StudentpercentageComponent implements OnInit {
  constructor(private http: Http) {

  }

  title = []
  // title = [{
  //   subject: "CN-II",
  //   name: "Tanuja Ma'am",
  //   perc: 70
  // },
  // {
  //   subject: "USP",
  //   name: "Dharmendar Sir",
  //   perc: 79
  // },
  // {
  //   subject: "SS",
  //   name: "Kiran Sir",
  //   perc: 90,
  //   value: 90
  // },
  // {
  //   subject: "DM",
  //   name: "Champa Ma'am",
  //   perc: 10
  // }];

  color(res: any) {
    if (res.perc < 75)
      return "warn"
    else if (res.perc < 80 && res.perc >= 75)
      return "accent"
    else
      return "primary"
  }
  ngOnInit() {
    this.http.get('http://192.168.43.55:8081/studentperc')
      .subscribe(res =>
        this.title = res.json())
  }

}
