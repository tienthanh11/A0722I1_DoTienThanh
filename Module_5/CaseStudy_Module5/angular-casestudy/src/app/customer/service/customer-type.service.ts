import {Injectable} from '@angular/core';
import {CustomerTypeDAO} from "../../data/CustomerTypeDAO";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor() {
  }

  getAllCustomerType() {
    return CustomerTypeDAO.customerTypes;
  }

  findByIdCustomer(id: string) {
    return CustomerTypeDAO.customerTypes.find(customerType => customerType.id === +id);
  }
}
