import { Injectable } from '@angular/core';
import { Html } from './html';
import { HTMLS } from './cours-html';
import { Observable, of } from 'rxjs';
import { TextService } from './text.service';



@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor(private textService: TextService) { }


  getCours(): Observable<Html[]> {
    // TODO: send the message _after_ fetching the heroes
    this.textService.add('HeroService: fetched heroes');
    return of(HTMLS);
  }


  getHtml(id: number): Observable<Html> {
    // TODO: send the message _after_ fetching the cours
    this.textService.add('HtmlService: fetched cours id=${id}');
    return of(HTMLS.find(html => html.id === id));

  }

}
