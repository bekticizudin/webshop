import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StartService {
  private apiUrl = 'http://localhost:8080/start';

  constructor(private http: HttpClient) { }

  getTeamMembers() {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
