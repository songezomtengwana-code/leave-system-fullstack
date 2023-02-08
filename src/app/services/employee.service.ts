import { Injectable } from '@angular/core';
import { EMPLOYEE } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public _employee: any;

  constructor() {}

  async setEmployeeInfo(employee: EMPLOYEE) {
    this._employee = employee;
  }

  get employee() {
    return this._employee;
  }
}
