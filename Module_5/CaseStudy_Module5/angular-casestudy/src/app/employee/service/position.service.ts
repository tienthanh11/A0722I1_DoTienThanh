import {Injectable} from '@angular/core';
import {PositionDAO} from "../../data/PositionDAO";
import {EmployeeDAO} from "../../data/EmployeeDAO";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor() {
  }

  getAllPosition() {
    return PositionDAO.positions;
  }

  findByIdPosition(id: string) {
    return PositionDAO.positions.find(position => position.id === +id);
  }
}
