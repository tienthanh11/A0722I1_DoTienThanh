import {Injectable} from '@angular/core';
import {Employee} from "../model/employee";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly URI: string = 'http://localhost:3000/employees'

  constructor(private httpClient: HttpClient) {
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.URI);
  }

  createEmployee(employee: Employee): Observable<void> {
    return this.httpClient.post<void>(this.URI, employee);
  }

  findByIdEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(this.URI + '/' + id);
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.URI}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  searchEmployee(name: string, email: string, divisionId: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.URI + '?name_like=' + name + '&email_like=' + email + '&division.id_like=' + divisionId);
  }
}
