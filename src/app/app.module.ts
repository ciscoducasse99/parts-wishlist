import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterListingComponent } from './components/filter-listing/filter-listing.component';
import { PartsComponent } from './components/parts/parts.component';
import { PartListingComponent } from './components/part-listing/part-listing.component';
import { AddPartBtnComponent } from './components/add-part-btn/add-part-btn.component';

import {ModalModule} from './modules/modal.module';
import { PartFormComponentModule } from './components/part-form/part-form.component';
import { PartListingModalContentComponent } from './components/part-listing-modal-content/part-listing-modal-content.component';
import { DynamicChildLoaderDirective } from './directives/load-child.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterListingComponent,
    PartsComponent,
    PartListingComponent,
    AddPartBtnComponent,
    PartListingModalContentComponent,
    DynamicChildLoaderDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PartFormComponentModule, // Feature Module
    ModalModule, // Feature Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
