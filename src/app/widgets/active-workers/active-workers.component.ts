import { Component, OnInit } from '@angular/core';
import { GetusersService } from '../../services/getusers.service';

@Component({
  selector: 'app-active-workers',
  templateUrl: './active-workers.component.html',
  styleUrls: ['./active-workers.component.css'],
})
export class ActiveWorkersComponent implements OnInit {
  constructor(private getusersService: GetusersService) {}

  ngOnInit(): void {
    this.getusersService.getEmployees();
  }

  get employees() {
    return this.getusersService.employees;
  }
}
