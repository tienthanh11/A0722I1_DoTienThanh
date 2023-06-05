import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {Position} from "../model/position";
import {EducationDegree} from "../model/education-degree";
import {Division} from "../model/division";
import {EmployeeService} from "../service/employee.service";
import {PositionService} from "../service/position.service";
import {EducationDegreeService} from "../service/education-degree.service";
import {DivisionService} from "../service/division.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  positions: Position[] = [];
  educationDegrees: EducationDegree[] = [];
  divisions: Division[] = [];
  employeeDelete: Employee = {
    position: {},
    educationDegree: {},
    division: {}
  };


  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.employees = this.employeeService.getAllEmployee();

    this.positions = this.positionService.getAllPosition();

    this.educationDegrees = this.educationDegreeService.getAllEducationDegree();

    this.divisions = this.divisionService.getAllDivision();
  }

  showInfo(employee: Employee) {
    this.employeeDelete = employee;
  }

  delete(id: string) {
    this.employeeService.deleteEmployee(id);
    this.getAll();
  }
}
