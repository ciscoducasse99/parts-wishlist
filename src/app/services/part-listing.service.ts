import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { PartListing } from '../interfaces/part-listing';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PartListingService {

  private partsURL = '/api/parts'

  constructor(private http: HttpClient) { 
   }

  // CRUD operations

  createListing(listing:PartListing): Observable<PartListing> {
    return this.http.post<PartListing>(this.partsURL, listing, httpOptions);
  }

  getListings(): Observable<PartListing[]> {
    console.log(environment)
    return this.http.get<PartListing[]>(this.partsURL)
  }

  updateListing(listing: PartListing): Observable<PartListing> {
    const url = `${this.partsURL}/${listing.id}`;
    return this.http.put<PartListing>(url, listing);
  }

  deleteListing(listing: PartListing): Observable<PartListing> {
    const url = `${this.partsURL}/${listing.id}`;
    return this.http.delete<PartListing>(url);
  }
}
