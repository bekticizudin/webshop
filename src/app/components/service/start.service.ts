import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StartService {
  private baseUrl = 'localhost:8080/'; // Postavite putanju prema vašem Spring Boot backendu

  constructor(private http: HttpClient) { }

  getStartData(): Observable<any> {
      return this.http.get(`${this.baseUrl}/start`);
    }
}
