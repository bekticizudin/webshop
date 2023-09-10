import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { StartComponent } from './components/start/start.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  { 
    path: '', 
    component: StartComponent,
    pathMatch: 'full',
  },
  { 
    path: 'proizvodi', 
    component: ProductsComponent,
    },
  { 
    path: 'kontakt', 
    component: ContactComponent,
    },
    { 
      path: 'contact-form', 
      component: ContactFormComponent,
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent, ContactComponent]