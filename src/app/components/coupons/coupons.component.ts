import { Component, OnInit } from '@angular/core';
import { CouponsService } from '../service/coupons.service';
import { HttpClient } from '@angular/common/http';
import { Coupon } from 'src/app/coupon.model';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit{
  coupons: Coupon[] = [];

  constructor(private couponsService: CouponsService, private http: HttpClient) {}

  ngOnInit(): void {
    this.couponsService.getAllCoupons().subscribe(
      (data: any) => {
        this.coupons = data;
      },
      (error: any) => {
        console.error('Došlo je do greške:', error);
      }
    );
  }
}
