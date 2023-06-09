import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Position} from "../model/position";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  readonly URI: string = 'http://localhost:3000/positions'

  constructor(private httpClient: HttpClient) {
  }

  getAllPosition(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.URI);
  }

  findByIdPosition(id: string): Observable<Position> {
    return this.httpClient.get<Position>(this.URI + '/' + id);
  }
}
