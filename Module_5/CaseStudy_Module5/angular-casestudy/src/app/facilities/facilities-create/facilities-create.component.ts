import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {

  facilityFormCreate: FormGroup;

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
      name: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required, Validators.min(0)]),
      cost: new FormControl('', [Validators.required, Validators.min(0)]),
      maxPeople: new FormControl('', [Validators.required, Validators.min(0)]),
      rentType: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.min(0)]),
      numberOfFloor: new FormControl('', [Validators.required, Validators.min(0)]),
      image: new FormControl('', [Validators.required]),
    });
  }

  createFacility() {
    this.facilityService.createFacility(this.facilityFormCreate.value);
    this.router.navigateByUrl('facility/list');
  }
}
