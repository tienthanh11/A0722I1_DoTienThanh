import {Injectable} from '@angular/core';
import {ContractDAO} from "../../data/ContractDAO";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  readonly URI: string = 'http://localhost:3000/contracts'

  constructor(private httpClient: HttpClient) {
  }

  getAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.URI);
  }

  createContract(contract: Contract): Observable<void> {
    return this.httpClient.post<void>(this.URI, contract);
  }
}
