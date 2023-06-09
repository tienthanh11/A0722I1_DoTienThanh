import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {Position} from "../model/position";
import {EducationDegree} from "../model/education-degree";
import {Division} from "../model/division";
import {EmployeeService} from "../service/employee.service";
import {PositionService} from "../service/position.service";
import {EducationDegreeService} from "../service/education-degree.service";
import {DivisionService} from "../service/division.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

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
  page: number = 1;
  totalLength: number;
  employeeSearch: FormGroup;

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.employeeSearch = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      divisionId: new FormControl('')
    })
    this.getAll();
  }

  getAll() {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.employees = data;
      this.totalLength = data.length;
    });

    this.positionService.getAllPosition().subscribe((data) => {
      this.positions = data;
    });

    this.educationDegreeService.getAllEducationDegree().subscribe((data) => {
      this.educationDegrees = data;
    });

    this.divisionService.getAllDivision().subscribe((data) => {
      this.divisions = data;
    });
  }

  showInfo(employee: Employee) {
    this.employeeDelete = employee;
  }

  delete(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Xóa nhân viên thành công");
        this.getAll();
      }
    );
  }


  searchEmployee() {
    this.employeeService.searchEmployee(
      this.employeeSearch.get('name').value.trim(),
      this.employeeSearch.get('email').value.trim(),
      this.employeeSearch.get('divisionId').value.trim()
    ).subscribe(
      (data) => {
        this.employees = data;
        this.totalLength = data.length;
        this.page = 1;
      }
    );
  }
}
