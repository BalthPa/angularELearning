import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  contents: string[] = [];

  add(content: string) {
    this.contents.push(content);
  }

  clear() {
    this.contents = [];
  }
}
