import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // readonly URI: string = 'http://localhost:3000/customers'
  readonly URI: string = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URI + '/api/customers/list');
  }

  createCustomer(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(this.URI + '/api/customers/create', customer);
  }

  findByIdCustomer(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URI + '/api/customers/list/' + id);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.URI}/api/customers/edit/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/api/customers/delete/' + id);
  }

  searchCustomer(name: string, email: string, typeId: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URI + '/api/customers?nameSearch=' + name + '&emailSearch=' + email + '&typeSearch=' + typeId);
  }
}
