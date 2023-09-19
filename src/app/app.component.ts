import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello = 'Hello';

  public cars = [
    {
      Name: 'Audi',
      Price: 100,
      Release: new Date(),
    },
    {
      Name: 'BMW',
      Price: 200,
      Release: new Date(),
    },
    {
      Name: 'HAVAL',
      Price: 300,
      Release: new Date(),
    },
    {
      Name: 'LADA',
      Price: 400,
      Release: new Date(),
    },
  ];
}
