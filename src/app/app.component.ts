import { Component } from '@angular/core';
import * as dayjs from 'dayjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public date = dayjs('2018-08-08');
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.info('Hello world!', 'Toastr fun!');
  }
}
