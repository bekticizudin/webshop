import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  
  private baseUrl = 'http://localhost:8080/save';

  constructor(private http: HttpClient) { }

  getContact(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
