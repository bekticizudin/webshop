import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StartService {
  constructor(private http: HttpClient) {}

  getCoupons() {
    return this.http.get('/start');
  }
}
