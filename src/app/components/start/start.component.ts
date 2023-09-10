import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StartService } from '../service/start.service';
import { HttpClient } from '@angular/common/http';
import { Start } from 'src/app/start.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  
  teamMembers: Start[] = [];

  constructor(private http: HttpClient, private startService: StartService) { }


  ngOnInit(): void {
    this.startService.getTeamMembers().subscribe(
      (data: any) => {
        this.teamMembers = data;
      },
      (error: any) => {
        console.error('Došlo je do greške:', error);
      }
    );
  }

  }




