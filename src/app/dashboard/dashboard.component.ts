import { Component, OnInit } from '@angular/core';
import { Html } from '../html';
import { HtmlService } from '../html.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  htmls: Html[] = [];

  constructor(private htmlService: HtmlService) { }

  ngOnInit() {
    this.getCours();
  }

  getCours(): void {
    this.htmlService.getCours()
        .subscribe(cours => this.htmls = cours.slice(1, 5));
  }
}
