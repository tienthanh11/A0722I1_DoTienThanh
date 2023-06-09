import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Division} from "../model/division";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  readonly URI: string = 'http://localhost:3000/divisions'

  constructor(private httpClient: HttpClient) {
  }

  getAllDivision(): Observable<Division[]> {
    return this.httpClient.get<Division[]>(this.URI);
  }

  findByIdDivision(id: string): Observable<Division> {
    return this.httpClient.get<Division>(this.URI + '/' + id);
  }
}
