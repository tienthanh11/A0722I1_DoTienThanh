import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Facility} from "../../facilities/model/facility";
import {Employee} from "../../employee/model/employee";
import {Customer} from "../../customer/model/customer";
import {formatDate} from "@angular/common";
import {ContractService} from "../service/contract.service";
import {CustomerService} from "../../customer/service/customer.service";
import {EmployeeService} from "../../employee/service/employee.service";
import {FacilityService} from "../../facilities/service/facility.service";
import {Router} from "@angular/router";
import {identityRevealedValidator} from "./custom-validate.validator";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractFormCreate: FormGroup;
  customers: Customer[] = [];
  employees: Employee[] = [];
  facilities: Facility[] = [];
  date1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private employeeService: EmployeeService,
              private facilityService: FacilityService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
    });

    this.employeeService.getAllEmployee().subscribe((data) => {
      this.employees = data;
    });

    this.facilityService.getAllFacility().subscribe((data) => {
      this.facilities = data;
    });

    this.contractFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^HD-\\d{4}$')]),
      startDate: new FormControl(this.date1, [Validators.required]),
      endDate: new FormControl(this.date1, [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.min(0)]),
      totalMoney: new FormControl('', [Validators.required, Validators.min(0)]),
      customer: new FormControl('', [Validators.required]),
      employee: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
    }, identityRevealedValidator);
  }

  createContract() {
    this.contractService.createContract(this.contractFormCreate.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Thêm mới hợp đồng thành công");
        this.router.navigateByUrl('contract/list');
      }
    );
  }
}
