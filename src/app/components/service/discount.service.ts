import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

    private apiUrl = 'http://localhost:8080/popust';
  
    constructor(private http: HttpClient) { }
  
    getAllDiscounts() {
      return this.http.get<any[]>(`${this.apiUrl}`);
    }
  }
