import {
	HttpInterceptor,
	HttpEvent,
	HttpHandler,
	HttpRequest,
	HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from './error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private dialog: MatDialog) {}
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((error: HttpErrorResponse) => {
				let errorMessage = 'Un unknonw error occurred';
				console.log(error);
				error.error.message && (errorMessage = error.error.message);
				this.dialog.open(ErrorComponent, { data: { message: errorMessage } });
				return throwError(error);
			})
		);
	}
}
