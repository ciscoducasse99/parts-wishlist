import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CarsapiService {

  private apiURL = 'api/products/vehicle/models?modelYear=2008&make=saab'
  

  constructor(private http: HttpClient) { }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(operation, error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  // Returns 
  getCardata(): Observable<any>{
    return this.http.get(this.apiURL, httpOptions).pipe(
      catchError(this.handleError('getCarData | CarsApiService', [])))
  }
}

// Be able to store cars in JSON file instead of database