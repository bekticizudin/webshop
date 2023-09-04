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

  createContact(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateContact(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getContactList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
