import {Injectable} from '@angular/core';
import {EmployeeDAO} from "../../data/EmployeeDAO";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
  }

  getAllEmployee() {
    return EmployeeDAO.employees;
  }

  createEmployee(employee) {
    EmployeeDAO.employees.push(employee);
  }

  findByIdEmployee(id: string) {
    return EmployeeDAO.employees.find(employee => employee.id === id);
  }

  updateEmployee(id: string, employee: Employee) {
    for (let i = 0; i < EmployeeDAO.employees.length; i++) {
      if (EmployeeDAO.employees[i].id === id) {
        EmployeeDAO.employees[i] = employee;
      }
    }
  }

  deleteEmployee(id: string) {
    EmployeeDAO.employees = EmployeeDAO.employees.filter(employee => {
      return employee.id !== id;
    })
  }
}
