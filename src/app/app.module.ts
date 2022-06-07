import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterListingComponent } from './components/filter-listing/filter-listing.component';
import { PartsComponent } from './components/parts/parts.component';
import { PartListingComponent } from './components/part-listing/part-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterListingComponent,
    PartsComponent,
    PartListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
