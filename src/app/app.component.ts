import { Component, inject } from '@angular/core';
import { ResponseService } from './services/response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EvoAcademy';
  public responseService = inject(ResponseService);

}
