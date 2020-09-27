import { Component, OnInit } from '@angular/core';
import { TextService } from '../text.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  constructor(public textService: TextService) {}


  ngOnInit(): void {
  }

}
