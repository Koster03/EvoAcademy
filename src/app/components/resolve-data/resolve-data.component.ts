import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-resolve-data',
  templateUrl: './resolve-data.component.html',
})
export class ResolveDataComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  public data: any;

  ngOnInit(): void {
    this.data = this.route.data.pipe(map(({ data }) => data));
  }
}
