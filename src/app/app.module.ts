import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckoutComponent } from './checkout/checkout.component';
import { DoneComponent } from './checkout/done/done.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    EventComponent,
    FooterComponent,
    ShowProductComponent,
    ShowEventComponent,
    ShowCartComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatTabsModule,
    MatBadgeModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxSliderModule,
    MatCheckboxModule,
    MatStepperModule,
    MatSelectCountryModule.forRoot('pt'),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
