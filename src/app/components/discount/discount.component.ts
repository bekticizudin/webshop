import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../service/discount.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit{

  discounts: any[] = [];
  
  constructor(private discountService: DiscountService, private http: HttpClient) {}

  ngOnInit(): void {
    this.discountService.getAllDiscounts().subscribe(
      (data: any) => {
        this.discounts = data;
      },
      (error: any) => {
        console.error('Došlo je do greške:', error);
      }
    );
  }
}
