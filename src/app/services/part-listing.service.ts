import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { PartListing } from '../interfaces/part-listing';

@Injectable({
  providedIn: 'root'
})
export class PartListingService {

  private _jsonURL = '../../assets/parts.json';

  constructor(private http: HttpClient) {  }

  // CRUD operations

  createListing = (listing:object) =>{

  }

  getListings(): Observable<PartListing[]> {
    return this.http.get<PartListing[]>(this._jsonURL)
  }

  updateListing = (listing:object) =>{

  }

  deleteListings = (listing:object) =>{
    
  }
}
