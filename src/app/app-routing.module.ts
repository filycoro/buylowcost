import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from 'src/Pages/home-component/home-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarriersComponent } from 'src/Pages/home-component/carriers/carriers.component';
import { AppliesComponent } from 'src/Pages/home-component/applies/applies.component';
import { TrukingPageComponent } from 'src/Pages/home-component/truking-page/truking-page.component';
import { QuotesTruckigComponent } from 'src/Pages/home-component/quotes-truckig/quotes-truckig.component';
import { PartnershipsComponent } from 'src/Pages/Partnerships/Partnerships.component';
import { LocationsComponent } from 'src/Pages/locations/locations.component';
import { CheckoutPageComponent } from 'src/components/checkout-page/checkout-page.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponentComponent },
  { path: '', component: HomeComponentComponent },
  { path: 'careers', component: CarriersComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'applications', component: AppliesComponent },
  { path: 'truking', component: TrukingPageComponent },
  { path: 'truking/applications', component: QuotesTruckigComponent },
  { path: 'Partnerships', component: PartnershipsComponent },
  { path: 'checkout', component: CheckoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule, TranslateModule]
})
export class AppRoutingModule {

}
