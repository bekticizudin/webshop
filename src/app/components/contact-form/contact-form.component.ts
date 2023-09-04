import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact: any = {};
  contactForm: FormGroup;
  isFormSubmitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  async submitForm() {
    this.isFormSubmitted = true;
    if (this.contactForm.valid) {
      try {
        const response = await this.http.post('http://localhost:8080/save', this.contactForm.value).toPromise();
        console.log('Uspješno poslana poruka.', response);
      } catch (error) {
        console.error('Greška u slanju poruke.', error);
      }
    } else {
      console.error('Niste ispravno popunili sva polja.');
    }
  }
}