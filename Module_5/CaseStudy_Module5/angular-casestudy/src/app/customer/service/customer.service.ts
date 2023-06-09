import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly URI: string = 'http://localhost:3000/customers'

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URI);
  }

  createCustomer(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(this.URI, customer);
  }

  findByIdCustomer(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URI + '/' + id);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.URI}/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  searchCustomer(name: string, email: string, typeId: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URI + '?name_like=' + name + '&email_like=' + email + '&type.id_like=' + typeId);
  }
}
