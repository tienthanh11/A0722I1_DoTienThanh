import {Injectable} from '@angular/core';
import {CustomerDAO} from "../../data/CustomerDAO";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  getAllCustomer() {
    return CustomerDAO.customers;
  }

  createCustomer(customer) {
    CustomerDAO.customers.push(customer);
  }
}
