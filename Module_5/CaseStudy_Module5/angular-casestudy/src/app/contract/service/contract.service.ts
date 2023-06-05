import {Injectable} from '@angular/core';
import {ContractDAO} from "../../data/ContractDAO";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() {
  }

  getAllContract() {
    return ContractDAO.contacts;
  }

  createContract(contract) {
    ContractDAO.contacts.push(contract);
  }
}
