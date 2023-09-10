import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactPageService {

  private apiUrl = 'http://localhost:8080/kontakt';
  
  constructor(private http: HttpClient) { }

  getContactPage() {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}

