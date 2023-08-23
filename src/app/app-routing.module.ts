import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { 
    path: '', 
    component: StartComponent,
    pathMatch: 'full',
  },
  { 
    path: 'products', 
    component: ProductsComponent,
    },
  { 
    path: 'contact', 
    component: ContactComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent, ContactComponent]