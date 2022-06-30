// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"
import {ModalModule} from './modules/modal.module';
import { PartFormComponentModule } from './components/part-form/part-form.component';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { FilterListingComponent } from './components/filter-listing/filter-listing.component';
import { PartsComponent } from './components/parts/parts.component';
import { PartListingComponent } from './components/part-listing/part-listing.component';
import { AddPartBtnComponent } from './components/add-part-btn/add-part-btn.component';
import { PartListingModalContentModule } from './components/part-listing-modal-content/part-listing-modal-content.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterListingComponent,
    PartsComponent,
    PartListingComponent,
    AddPartBtnComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    PartFormComponentModule, // Feature Module
    ModalModule, // Feature Module
    PartFormComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
