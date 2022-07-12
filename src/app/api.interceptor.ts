import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://scores.chrum.it/';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      url: `${baseUrl}/${req.url}`,
      headers: req.headers.set('Accept', 'application/json'),
    });
    return next.handle(apiReq);
  }
}
