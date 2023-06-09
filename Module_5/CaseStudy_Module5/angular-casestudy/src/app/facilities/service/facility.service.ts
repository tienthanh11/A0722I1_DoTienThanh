import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  readonly URI: string = 'http://localhost:3000/facilities'

  constructor(private httpClient: HttpClient) {
  }

  getAllFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.URI);
  }

  createFacility(facility: Facility): Observable<void> {
    return this.httpClient.post<void>(this.URI, facility);
  }

  findByIdFacility(id: string): Observable<Facility> {
    return this.httpClient.get(this.URI + '/' + id);
  }

  updateFacility(id: string, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(`${this.URI}/${id}`, facility);
  }

  deleteFacility(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }
}
