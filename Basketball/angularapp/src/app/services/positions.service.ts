import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Position } from "../models/position";

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  public apiURL = "https://localhost:7028/api";

  constructor(private httpClient: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.apiURL + '/positions')
      .pipe(
        catchError(this.errorHandler.bind(this)) // Use .bind(this) to preserve the class context
      );
  }

  errorHandler(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
