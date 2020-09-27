import { Component, OnInit } from '@angular/core';
import { Html } from '../html';
import { HtmlService } from '../html.service';


@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})


export class HtmlComponent implements OnInit {

  htmls: Html[];



  constructor(private htmlService: HtmlService,) {}

  ngOnInit() {
    this.getCours();
  }

  getCours(): void {
    this.htmlService.getCours()
        .subscribe(htmls => this.htmls = htmls);
  }
}

