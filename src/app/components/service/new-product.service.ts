import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  private apiUrl = 'http://localhost:8080/noviProizvodi';
  
    constructor(private http: HttpClient) { }
  
    getAllNewProducts() {
      return this.http.get<any[]>(`${this.apiUrl}`);
    }
  }
