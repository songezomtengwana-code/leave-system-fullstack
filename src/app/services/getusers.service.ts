import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetusersService {
  constructor(protected http: HttpClient) {}
  public Employees: any;
  private baseUrl: string = 'http://localhost:2323/';

  getEmployees() {
    this.http.get(`${this.baseUrl}employees`).subscribe((response) => {
      this.Employees = response;
    });
  }

  get employees() {
    return this.Employees;
  }
}
