import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  readonly URI: string = 'http://localhost:3000/customer-types'

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.URI);
  }

  findByIdCustomer(id: string): Observable<CustomerType>{
    return this.httpClient.get<CustomerType>(this.URI + '/' + id);
  }
}
