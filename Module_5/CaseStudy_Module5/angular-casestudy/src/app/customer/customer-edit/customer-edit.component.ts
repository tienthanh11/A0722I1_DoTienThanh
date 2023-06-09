import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customer-type";
import {CustomerService} from "../service/customer.service";
import {CustomerTypeService} from "../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerFormEdit: FormGroup;
  id: string;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe((data) => {
      this.customerTypes = data;
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.customerService.findByIdCustomer(this.id).subscribe((customerEdit) => {
        debugger
        this.customerFormEdit = new FormGroup({
          customerId: new FormControl(customerEdit.customerId, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
          customerTypeId: new FormControl(customerEdit.customerTypeId.customerTypeId, [Validators.required]),
          customerName: new FormControl(customerEdit.customerName, [Validators.required, Validators.pattern('^\\D*$')]),
          customerBirthday: new FormControl(customerEdit.customerBirthday?.substr(0, 10), [Validators.required]),
          customerGender: new FormControl(customerEdit.customerGender, [Validators.required]),
          customerIdCard: new FormControl(customerEdit.customerIdCard, [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
          customerPhone: new FormControl(customerEdit.customerPhone, [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
          customerEmail: new FormControl(customerEdit.customerEmail, [Validators.required, Validators.email]),
          customerAddress: new FormControl(customerEdit.customerAddress, [Validators.required]),
        });
      });
    });
  }

  editCustomer(id: string) {
/*    const customer = this.customerFormEdit.value;
    customer.type = this.customerTypeService.findByIdCustomer(customer.type);
    this.customerService.updateCustomer(id, customer);*/
    this.customerTypeService.findByIdCustomer(this.customerFormEdit.get('customerTypeId').value).subscribe(
      (data) => {
        this.customerFormEdit.patchValue({
          customerTypeId: data
        })
      },
      () => {
      },
      () => {
        this.customerService.updateCustomer(id, this.customerFormEdit.value).subscribe(
          () => {
          },
          () => {
          },
          () => {
            this.toast.success("Sửa khách hàng thành công");
            this.router.navigateByUrl('customer/list');
          }
        );
      }
    );
  }
}
