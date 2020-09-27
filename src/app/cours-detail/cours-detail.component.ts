import { Component, OnInit, Input } from '@angular/core';
import { Html } from '../html';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HtmlService } from '../html.service';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.scss']
})
export class CoursDetailComponent implements OnInit {
  html: Html;

  constructor(
      private route: ActivatedRoute,
      private htmlService: HtmlService,
      private location: Location
  ) { }

  ngOnInit(): void {
    this.getHtml();
  }

  getHtml(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.htmlService.getHtml(id)
        .subscribe(html => this.html = html);
  }

  goBack(): void {
    this.location.back();
  }

}


