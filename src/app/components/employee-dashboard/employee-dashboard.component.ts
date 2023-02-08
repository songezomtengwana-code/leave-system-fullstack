import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EMPLOYEE } from '../../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  constructor(
    protected employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.handleThrowBack();
  }

  async handleThrowBack() {
    // if (this.employee === undefined) {
    //   this.router.navigateByUrl('dashboard');
    //   alert('redirecting to dashboard');
    // }
  }

  get employee(): EMPLOYEE {
    return this.employeeService.employee;
  }
}
