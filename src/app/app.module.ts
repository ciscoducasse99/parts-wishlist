import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarInfoComponent } from './components/car-info/car-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsComponent,
    CarInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
