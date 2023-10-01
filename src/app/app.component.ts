import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'EvoAcademy';

  public nums: Array<number> = [];
  public items2: Array<string> = [];
  public isNumsPaused = false;
  public isRndPaused = false;

  private intervalSubNum$!: Subscription;
  private intervalSubRnd$!: Subscription;
  private intervalStream = interval(2000);

  ngOnInit(): void {
    // const intervalStream = interval(2000);
    this.resume('nums', this.intervalStream);
    this.resume('rnd', this.intervalStream);
  }

  public onClick(type: 'nums' | 'rnd') {
    let isPaused: boolean;

    if (type === 'nums') {
      isPaused = this.isNumsPaused;
    } else {
      isPaused = this.isRndPaused;
    }

    if (isPaused) {
      this.resume(type, this.intervalStream);
    } else {
      this.pause2(type);
    }

    this.togglePause(type);
  }

  private pause2(type: 'nums' | 'rnd') {
    if (type === 'nums') {
      this.pause(this.intervalSubNum$);
    } else {
      this.pause(this.intervalSubRnd$);
    }
  }

  private resume(type: 'nums' | 'rnd', intervalObservable: Observable<number>) {
    if (type === 'nums') {
      this.intervalSubNum$ = intervalObservable.subscribe((v) => {
        this.nums.push(this.nums.length);
      });
    } else {
      this.intervalSubRnd$ = intervalObservable
        .pipe(map((x) => `Random Value: ${Math.floor(Math.random() * 20)}`))
        .subscribe((v) => {
          this.items2.push(v);
        });
    }
  }

  private togglePause(type: 'nums' | 'rnd') {
    if (type === 'nums') {
      this.isNumsPaused = !this.isNumsPaused;
    } else {
      this.isRndPaused = !this.isRndPaused;
    }
  }

  private pause(sub: Subscription) {
    sub.unsubscribe();
  }
}
