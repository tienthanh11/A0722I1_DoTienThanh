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

  findByIdCustomer(id: string) {
    return CustomerDAO.customers.find(customer => customer.id === id);
  }

  updateCustomer(id: string, customer: Customer) {
    for (let i = 0; i < CustomerDAO.customers.length; i++) {
      if (CustomerDAO.customers[i].id === id) {
        CustomerDAO.customers[i] = customer;
      }
    }
  }

  deleteCustomer(id: string) {
    CustomerDAO.customers = CustomerDAO.customers.filter(customer => {
      return customer.id !== id;
    })
  }
}
