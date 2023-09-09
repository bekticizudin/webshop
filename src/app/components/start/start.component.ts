import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  discounts: any =[
    {
      name: 'Apple iPad Pro 12.9-inch',
      description: 'Apple iPad Pro 12.9-inch je vrhunski tablet koji se može pohvaliti najsnažnijim M1 čipom iz Apple-a. Njegova Retina XDR ekran teško da ima konkurenciju, pružajući izvanredno bogate boje i oštru rezoluciju. Ovaj tablet takođe podržava Apple Pencil, što ga čini savršenim alatom za kreativce. Sa opcijama za kapacitet SSD diska od 128GB, 256GB, 512GB, 1TB i impresivnih 2TB, iPad Pro 12.9-inch nudi dovoljno prostora za vaše aplikacije, projekte i medije, što ga čini idealnim za produktivne zadatke i zabavu.',
      price: 999,
      discountedPrice: 799,
      discountPercent: 20,
      imagePath: 'assets/appleipadpro.jpg',
    },
    {
      name: 'MacBook Pro 16-inch',
      description: 'MacBook Pro 16-inch je vrhunski laptop koji nudi izvanrednu performansu zahvaljujući Intel Core i9 procesoru. Poseduje impresivan Retina ekran i dolazi sa 32GB RAM-a i velikim SSD diskom kapaciteta od 1TB za brz rad. Sa bogatim zvučnicima i velikim ekranom, ovaj laptop je idealan za profesionalce koji zahtevaju vrhunski doživljaj za kreativne projekte i multimediju.',
      price: 2.399,
      discountedPrice: 1.559,
      discountPercent: 35,
      imagePath: 'assets/macbookpro16.jpg',
    },
    
  ];
  
  ngOnInit(): void {
    
  }

}

