import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {CustomerService} from "../service/customer.service";
import {CustomerTypeService} from "../service/customer-type.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  customerDelete: Customer = {
    type: {}
  };
  page: number = 1;
  totalLength: number;
  customerSearch: FormGroup;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.customerSearch = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      typeId: new FormControl('')
    });
    this.getAll();
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
      this.totalLength = data.length;
    })

    this.customerTypeService.getAllCustomerType().subscribe((data) => {
      this.customerTypes = data;
    });
  }

  showInfo(customer: Customer) {
    this.customerDelete = customer;
  }

  delete(id: string) {
    this.customerService.deleteCustomer(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Xóa khách hàng thành công");
        this.getAll();
      }
    );
  }

  searchCustomer() {
    this.customerService.searchCustomer(
      this.customerSearch.get('name').value.trim(),
      this.customerSearch.get('email').value.trim(),
      this.customerSearch.get('typeId').value.trim()
    ).subscribe(
      (data) => {
        this.customers = data;
        this.totalLength = data.length;
        this.page = 1;
      }
    );
  }
}
