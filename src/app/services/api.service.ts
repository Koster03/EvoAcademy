import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  public get() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => console.log(data));
  }

  public getWithParams() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/comments', {
        params: { postId: 1 },
      })
      .subscribe((data) => console.log(data));
  }

  public post() {
    return this.http
      .post(' https://jsonplaceholder.typicode.com/posts', {})
      .subscribe((data) => console.log(data));
  }

  public getError() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/post', {
        params: { postId: 1 },
      })
      .subscribe({
        next: (data) => console.log(data),
        error: (err: HttpErrorResponse) => {
          console.log(err.message);
        },
      });
  }

  public getWithHeader() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts', {
        headers: { 'X-Test': '1' },
      })
      .pipe(map((data) => JSON.stringify(data)))
      .subscribe((data) => console.log(data));
  }

  public delete() {
    return this.http
      .delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => console.log(data));
  }

  public getResolve() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
