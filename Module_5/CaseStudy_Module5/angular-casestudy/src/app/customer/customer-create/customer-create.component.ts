import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {CustomerTypeService} from "../service/customer-type.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customer-type";

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
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getAllCustomerType();

    this.customerFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('^\\D*$')]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
    });
  }

  createCustomer() {
    const customer = this.customerFormCreate.value;
    this.customerService.createCustomer(customer);
    this.router.navigateByUrl('customer/list');
  }
}
