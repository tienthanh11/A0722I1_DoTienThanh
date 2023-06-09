import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {CustomerTypeService} from "../service/customer-type.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customer-type";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerFormCreate: FormGroup;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe((data) => {
      this.customerTypes = data;
    });

    this.customerFormCreate = new FormGroup({
      customerId: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      customerTypeId: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required, Validators.pattern('^\\D*$')]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerGender: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerAddress: new FormControl('', [Validators.required]),
    });
  }

  createCustomer() {
    this.customerService.createCustomer(this.customerFormCreate.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Thêm mới khách hàng thành công");
        this.router.navigateByUrl('customer/list');
      }
    );
  }
}
