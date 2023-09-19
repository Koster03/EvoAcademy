import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EvoAcademy';

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'desc', content: 'root_desc' }, true);
    console.log(this.meta.getTag('name=desc'));
    
  }
}
