import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { PartListing } from '../interfaces/part-listing';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PartListingService {

  private partsURL = 'http://localhost:5000/parts'

  constructor(private http: HttpClient) { 
   }

  // CRUD operations

  createListing(listing:PartListing): Observable<PartListing> {
    return this.http.post<PartListing>(this.partsURL, listing, httpOptions);
  }

  getListings(): Observable<PartListing[]> {
    return this.http.get<PartListing[]>(this.partsURL)
  }

  updateListing = (listing:object) =>{

  }

  deleteListings = (listing:object) =>{
    
  }
}
