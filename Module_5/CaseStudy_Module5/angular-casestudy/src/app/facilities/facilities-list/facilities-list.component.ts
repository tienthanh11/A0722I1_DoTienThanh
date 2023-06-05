import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityService} from "../service/facility.service";

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {

  facilities: Facility[] = [];
  facilityDelete: Facility = {};

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityService.getAllFacility();
  }

  showInfo(facility: Facility) {
    this.facilityDelete = facility;
  }

  delete(id: string) {
    this.facilityService.deleteFacility(id);
    this.getAll();
  }
}
