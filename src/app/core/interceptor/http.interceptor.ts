import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/session/services/session.service';

@Injectable()
export class HttpBasicInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const clonedRequest = request.clone({ headers: request.headers.append('Authorization', `Basic ${SessionService.getToken()}`) });
    return next.handle(clonedRequest);
  }
}
