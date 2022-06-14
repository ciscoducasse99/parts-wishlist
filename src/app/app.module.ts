import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterListingComponent } from './components/filter-listing/filter-listing.component';
import { PartsComponent } from './components/parts/parts.component';
import { PartListingComponent } from './components/part-listing/part-listing.component';
import { AddPartBtnComponent } from './components/add-part-btn/add-part-btn.component';

import {ModalModule} from './modules/modal.module';
import { PartFormComponentModule } from './components/part-form/part-form.component';
import { PartModalContentComponent } from './components/part-modal-content/part-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterListingComponent,
    PartsComponent,
    PartListingComponent,
    AddPartBtnComponent,
    PartModalContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PartFormComponentModule,

    /*
      Since 'ModalComponent' would be used multiple times, we must create it's own Module so we can declare it
      in multiple places
    */
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
