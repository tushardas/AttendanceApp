import { Component, OnInit } from '@angular/core';
import { MdCard, MdList } from '@angular/material';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Http, RequestOptions, URLSearchParams } from "@angular/http";
import { studper } from "../models/studper";
import { MdCardModule } from "@angular/material";
import { API } from "app/models/api";
@Component({
  selector: 'app-studentpercentage',
  templateUrl: './studentpercentage.component.html',
  styleUrls: ['./studentpercentage.component.css']

})

export class StudentpercentageComponent implements OnInit {
  constructor(private http: Http, private route:ActivatedRoute, private router:Router) {

  }

  title:any
  color(res: any) {
    if (res.perc < 75)
      return "warn"
    else if (res.perc < 80 && res.perc >= 75)
      return "accent"
    else
      return "primary"
  }
  ngOnInit() {
    let id: string = this.route.snapshot.params['regno'];
    let params: URLSearchParams = new URLSearchParams();
    params.set('regno', id);
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    this.http.get(API.studentperc, requestOptions)
      .subscribe(res =>
        this.title = res.json())
  }
}
