import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';  

// Components
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';


@NgModule({
    imports: [
        CommonModule,
        OwlModule,
        AppRoutingModule
    ],
    exports: [
        SliderComponent,
        NavbarComponent,
        FooterComponent,
        HelpfulLinksComponent
    ],
    declarations: [
        SliderComponent,
        NavbarComponent,
        FooterComponent,
        HelpfulLinksComponent,
        CheckoutPageComponent,
      
    ],
    providers: [],
 })
 
 export class ComponentsModule {
 }