import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StartService } from '../service/start.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  
  startData: any;

  constructor(private startService: StartService) { }

  ngOnInit(): void {
    this.startService.getStartData().subscribe(
      (data) => {
        this.startData = data;
      },
      (error) => {
        console.error('Greška prilikom dohvata podataka za start stranicu:', error);
      }
    );
  }
  }

  // Dodajte dodatne metode i logiku prema potrebi




