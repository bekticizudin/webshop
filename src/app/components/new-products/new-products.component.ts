import { Component, OnInit } from '@angular/core';
import { NewProductService } from '../service/new-product.service';
import { HttpClient } from '@angular/common/http';
import { NewProduct } from 'src/app/newProduct.model';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit{

  newProducts: NewProduct[] = [];
  
  constructor(private newProductService: NewProductService, private http: HttpClient) {}

  ngOnInit(): void {
    this.newProductService.getAllNewProducts().subscribe(
      (data: any) => {
        this.newProducts = data;
      },
      (error: any) => {
        console.error('Došlo je do greške:', error);
      }
    );
  }
}
