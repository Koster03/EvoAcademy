import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';

export const MyResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  api: ApiService = inject(ApiService)
): Observable<any> => api.getResolve();
