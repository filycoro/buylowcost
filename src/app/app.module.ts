import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponentComponent } from 'src/Pages/home-component/home-component.component';
import { NgxSpinnerModule } from "ngx-spinner";

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarriersComponent } from 'src/Pages/home-component/carriers/carriers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppliesComponent } from 'src/Pages/home-component/applies/applies.component';
import { TrukingPageComponent } from 'src/Pages/home-component/truking-page/truking-page.component';
import { QuotesTruckigComponent } from 'src/Pages/home-component/quotes-truckig/quotes-truckig.component';
import { PartnershipsComponent } from 'src/Pages/Partnerships/Partnerships.component';
import { LocationsComponent } from 'src/Pages/locations/locations.component';
import { CheckoutPageComponent } from 'src/components/checkout-page/checkout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CarriersComponent,
    AppliesComponent,
    TrukingPageComponent,
    QuotesTruckigComponent,
    PartnershipsComponent,
    LocationsComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
