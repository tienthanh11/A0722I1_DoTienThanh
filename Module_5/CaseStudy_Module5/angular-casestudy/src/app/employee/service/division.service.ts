import {Injectable} from '@angular/core';
import {DivisionDAO} from "../../data/DivisionDAO";
import {EmployeeDAO} from "../../data/EmployeeDAO";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() {
  }

  getAllDivision() {
    return DivisionDAO.divisions;
  }

  findByIdDivision(id: string) {
    return DivisionDAO.divisions.find(division => division.id === +id);
  }
}
