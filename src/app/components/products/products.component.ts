import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // Ovdje ćete pohraniti podatke o proizvodima
  products: any =[
    {
      name: 'Dell XPS 13',
      price: 1.199,
      description: 'Dell XPS 13 je ultra-tanki laptop sa ekranom od 13.3 inča. Pokreće ga moćan Intel Core i7 procesor, dolazi sa 16GB RAM-a i brzim SSD diskom kapaciteta od 512GB, što ga čini savršenim za multitasking i brz rad. S tankim dizajnom i impresivnom trajanjem baterije, ovaj laptop je idealan za putovanja i rad van kancelarije.',
      imagePath: 'assets/dellxps13.jpg',
    },
    {
      name: 'MacBook Pro 16-inch',
      description: 'MacBook Pro 16-inch je vrhunski laptop koji nudi izvanrednu performansu zahvaljujući Intel Core i9 procesoru. Poseduje impresivan Retina ekran i dolazi sa 32GB RAM-a i velikim SSD diskom kapaciteta od 1TB za brz rad. Sa bogatim zvučnicima i velikim ekranom, ovaj laptop je idealan za profesionalce koji zahtevaju vrhunski doživljaj za kreativne projekte i multimediju.',
      price: 2.399,
      discountedPrice: 1.559,
      discountPercent: 35,
      imagePath: 'assets/macbookpro16.jpg',
    },
    {
      name: 'HP Spectre x360',
      price: 1.099,
      description: 'HP Spectre x360 je konvertibilni laptop sa prelepim 4K ekranom. Ima snažne performanse zahvaljujući Intel Core i7 procesoru, 16GB RAM-a i brzom SSD disku kapaciteta od 512GB. Njegova tanka i lagana konstrukcija čini ga idealnim za putovanja i fleksibilnu upotrebu.',
      imagePath: 'assets/hpspectrex360.jpg',
    },
    {
      name: 'Lenovo ThinkPad X1 Carbon',
      price: 1.349,
      description: 'Lenovo ThinkPad X1 Carbon je izuzetno izdržljiv laptop sa odličnom tastaturom. Pokreće ga Intel Core i5 procesor, 16GB RAM-a i brz SSD disk kapaciteta od 256GB za produktivan rad. Osim toga, njegova sigurnosna opcija sa otiskom prsta i infracrvenom kamerom čini ga idealnim za poslovne korisnike.',
      imagePath: 'assets/lenovothinkpadx1carbon.jpg',
    },
    {
      name: 'Apple iPad Pro 12.9-inch',
      description: 'Apple iPad Pro 12.9-inch je vrhunski tablet koji se može pohvaliti najsnažnijim M1 čipom iz Apple-a. Njegova Retina XDR ekran teško da ima konkurenciju, pružajući izvanredno bogate boje i oštru rezoluciju. Ovaj tablet takođe podržava Apple Pencil, što ga čini savršenim alatom za kreativce. Sa opcijama za kapacitet SSD diska od 128GB, 256GB, 512GB, 1TB i impresivnih 2TB, iPad Pro 12.9-inch nudi dovoljno prostora za vaše aplikacije, projekte i medije, što ga čini idealnim za produktivne zadatke i zabavu.',
      price: 999,
      discountedPrice: 799,
      discountPercent: 20,
      imagePath: 'assets/appleipadpro.jpg',
    },
    {
      name: 'Samsung Galaxy Tab S7+',
      price: 849,
      description: 'Samsung Galaxy Tab S7+ je Android tablet koji se može pohvaliti izvanrednim Super AMOLED ekranom, pružajući žive boje i duboku crnu. Uz S Pen olovku, možete lako crtati, pisati i kreirati. Sa snažnim procesorom, 8GB RAM-a i brzim SSD diskom kapaciteta od 128GB, 256GB i 512GB, ovaj tablet pruža besprekornu brzinu i performanse za multitasking i produktivnost.',
      imagePath: 'assets/samsunggalaxytab.jpg',
    },
    {
      name: 'iPhone 13 Pro',
      price: 999,
      description: 'iPhone 13 Pro je najnoviji premium model iz Apple-a, koji se ističe izvanrednim kamerama, brzim A15 Bionic čipom i ProMotion ekranom. S opcijama za kapacitet SSD diska od 128GB i 256GB, ovaj telefon nudi dovoljno prostora za vaše fotografije, video zapise i aplikacije. Sa visokom brzinom i visokokvalitetnim ekranom, iPhone 13 Pro je savršen za korisnike koji traže vrhunske performanse i fotografije.',
      imagePath: 'assets/iphone13pro.jpg',
    },
    {
      name: 'iPhone SE (2020)',
      price: 399,
      description: 'Microsoft Surface Pro 7 je 2-u-1 Windows tablet koji se ističe izvanrednom performansom. Pokreće ga Intel Core i5 procesor sa 8GB RAM-a, pružajući brzinu i snagu potrebnu za radne zadatke. Brzi SSD disk sa kapacitetom od 128GB, 256GB, 512GB i čak 1TB omogućava vam da sačuvate sve svoje fajlove i aplikacije. Ovaj tablet takođe možete koristiti kao laptop uz dodatak Type Cover tastature, što ga čini veoma fleksibilnim uređajem.',
      imagePath: 'assets/iphonesee.jpg',
    },
    {
      name: 'iPhone 12 Mini',
      price: 699,
      description: 'Microsoft Surface Pro 7 je 2-u-1 Windows tablet koji se ističe izvanrednom performansom. Pokreće ga Intel Core i5 procesor sa 8GB RAM-a, pružajući brzinu i snagu potrebnu za radne zadatke. Brzi SSD disk sa kapacitetom od 128GB, 256GB, 512GB i čak 1TB omogućava vam da sačuvate sve svoje fajlove i aplikacije. Ovaj tablet takođe možete koristiti kao laptop uz dodatak Type Cover tastature, što ga čini veoma fleksibilnim uređajem.',
      imagePath: 'assets/iphone12mini.jpg',
    },
    {
      name: 'Microsoft Surface Pro 7',
      price: 799,
      description: 'Microsoft Surface Pro 7 je 2-u-1 Windows tablet koji se ističe izvanrednom performansom. Pokreće ga Intel Core i5 procesor sa 8GB RAM-a, pružajući brzinu i snagu potrebnu za radne zadatke. Brzi SSD disk sa kapacitetom od 128GB, 256GB, 512GB i čak 1TB omogućava vam da sačuvate sve svoje fajlove i aplikacije. Ovaj tablet takođe možete koristiti kao laptop uz dodatak Type Cover tastature, što ga čini veoma fleksibilnim uređajem.',
      imagePath: 'assets/mics.jpg',
    }
  ];

  constructor(private http: HttpClient, private productService: ProductService) { }

  
    ngOnInit(): void {
      this.http.get<any>('http://localhost:8080/products/{id}').subscribe(
        (data) => {
          // Ovde ćete obraditi podatke koji su stigli sa servera
          console.log(data);
        },
        (error) => {
          // Ovde ćete obraditi grešku ako se desi
          console.error('Došlo je do greške:', error);
        }
      );
    }
  }
  
