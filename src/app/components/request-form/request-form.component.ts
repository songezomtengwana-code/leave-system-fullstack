import { Component, OnInit } from '@angular/core';
import { REQUEST } from '../../models/request.model';
import { HttpClient } from '@angular/common/http';
import { CalenderService } from '../../services/calender.service';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent implements OnInit {
  request = new REQUEST();
  constructor(
    private http: HttpClient,
    protected calenderService: CalenderService,
    protected requestsService: RequestsService
  ) {}

  durationOptions = [1, 2, 3, 4, 5, 6, 7];

  ngOnInit() {}

  async post(payload: REQUEST) {
    return this.http
      .post('http://localhost:2323/requests', payload)
      .subscribe((response) => {
        console.log({ log: response });
      });
  }

  /**
   * @desc get request for all dates in a calender
   * @memberof CalenderService
   */
  get calender() {
    return this.calenderService.calender;
  }

  postRequest() {
    const requestBody: REQUEST = {
      id: this.requestsService.requestServer.length + 1,
      from: 'Enkosi Tsotsa',
      month: 'February',
      date: this.request.date,
      reason: this.request.reason,
      length: 2,
      isApproved: false,
      isPending: true,
    };

    if (this.request.date === undefined) {
      console.error(`date is ${this.request.date}`);
    } else if (this.request.reason === undefined) {
      console.error(`reason ain't been selected ${this.request.reason}`);
    } else {
      this.requestsService.post(requestBody);
      console.log({ newRequest: requestBody });
    }
  }
}
