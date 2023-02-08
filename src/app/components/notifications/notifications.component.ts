import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  noti: any;
  notificationpile: any;
  constructor(
    protected requestService: RequestsService,
    protected userServices: UserService
  ) {}

  ngOnInit() {
    this.handleNotificationPile();
  }

  get requests() {
    return this.requestService.requests;
  }

  /**
   * @desc sorts tha request document to find approed request and display as notfications on the application
   */
  handleNotificationPile() {
    const notificationPile: any = this.requests.find((response) => {
      response.isApproved = true;
    });

    this.noti = notificationPile;
    console.log(this.noti);
  }
}
