import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
})
export class InlineComponent {
  constructor(private meta: Meta) {
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'The Rock',
      },
      {
        property: 'og:type',
        content: 'video.movie',
      },
      {
        property: 'og:url',
        content: '//www.imdb.com/title/tt0117500/',
      },
    ]);

    console.log(this.meta.getTag('property="og:title"'));
    console.log(this.meta.getTag('property="og:type"'));
    console.log(this.meta.getTag('property="og:url"'));
    
  }
}
