import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    protected userServices: UserService,
    private requestsService: RequestsService
  ) {}
  ngOnInit(): void {
    this.userServices.setLeavesPending();
  }

  get profile() {
    return this.userServices.profile;
  }

  get requests() {
    return this.requestsService.requests;
  }
}
