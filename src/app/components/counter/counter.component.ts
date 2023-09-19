import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter = 0;

  changeCount(type: boolean) {
    type ? this.counter++ : this.counter--;
  }
}
