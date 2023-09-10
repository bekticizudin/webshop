import { Info } from '../../info.model';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactPageService } from '../service/contact-page.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  infos: Info[] = [];

  constructor(private contactPageService: ContactPageService, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactPageService.getContactPage().subscribe(
      (data: any) => {
        this.infos = data;
      },
      (error: any) => {
        console.error('Došlo je do greške:', error);
      }
    );
  }
}
