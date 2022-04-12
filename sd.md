  verifySubscription(){
    this.subscriptionChecker.check(
      {
        "email" : localStorage.getItem('username')
      }
    ).subscribe({
      next: response => {
        this.suscription = response.subscriptionType;
        console.log(this.suscription);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  
  
  
  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {

  APIstripe = environment.stripeserver;

  constructor(
    private http: HttpClient) { }

  check(payload: any): Observable<any> {
    return this.http.post<any>(`${this.APIstripe}/subscription-checker`, payload);
  }
}
