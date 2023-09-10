import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DiscountComponent } from './components/discount/discount.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { NewProductsComponent } from './components/new-products/new-products.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    routingComponents,
    ContactFormComponent,
    DiscountComponent,
    CouponsComponent,
    NewProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
