import {Customer} from "../../customer/model/customer";
import {Employee} from "../../employee/model/employee";
import {Facility} from "../../facilities/model/facility";

export interface Contract {
  id?: string;
  startDate?: string;
  endDate?: string;
  deposit?: number;
  totalMoney?: number;
  customer?: Customer;
  employee?: Employee;
  facility?: Facility;
}
