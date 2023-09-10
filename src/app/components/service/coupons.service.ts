import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  private apiUrl = 'http://localhost:8080/kuponi';
  
  constructor(private http: HttpClient) { }

  getAllCoupons() {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
