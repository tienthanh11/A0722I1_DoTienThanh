import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EducationDegree} from "../model/education-degree";

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  readonly URI: string = 'http://localhost:3000/educationDegrees'

  constructor(private httpClient: HttpClient) {
  }

  getAllEducationDegree(): Observable<EducationDegree[]> {
    return this.httpClient.get<EducationDegree[]>(this.URI);
  }

  findByIdEducationDegree(id: string): Observable<EducationDegree> {
    return this.httpClient.get<EducationDegree>(this.URI + '/' + id);
  }
}
