import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name: 'Proizvod 1',
      price: '100 KM',
      description: 'Ovo je opis proizvoda 1.',
      imageUrl: 'assets/product1.jpg'
    },
    {
      name: 'Proizvod 2',
      price: '100 KM',
      description: 'Ovo je opis proizvoda 1.',
      imageUrl: 'assets/product1.jpg'
    },
    {
      name: 'Proizvod 3',
      price: '100 KM',
      description: 'Ovo je opis proizvoda 1.',
      imageUrl: 'assets/product1.jpg'
    },
    {
      name: 'Proizvod 4',
      price: '100 KM',
      description: 'Ovo je opis proizvoda 1.',
      imageUrl: 'assets/product1.jpg'
    },
    {
      name: 'Proizvod 5',
      price: '100 KM',
      description: 'Ovo je opis proizvoda 1.',
      imageUrl: 'assets/product1.jpg'
    },
    {
      name: 'Proizvod 6',
      price: '100 KM',
      description: 'Ovo je opis proizvoda 1.',
      imageUrl: 'assets/product1.jpg'
    },
    {
      name: 'Proizvod 7',
      price: '100 KM',
      description: 'Ovo je opis proizvoda 1.',
      imageUrl: 'assets/product1.jpg'
    },
    {
      name: 'Proizvod 8',
      price: '100 KM',
      description: 'Ovo je opis proizvoda 1.',
      imageUrl: 'assets/product1.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}