import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestsService } from '../../services/requests.service';
import { REQUEST } from '../../models/request.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export default class RequestsComponent implements OnInit {
  public data: any;

  ngOnInit(): void {
    this.get();
  }

  constructor(
    protected http: HttpClient,
    protected requestService: RequestsService
  ) {}
  public baseUrl: string = 'http://localhost:2323/';

  /**
   * @desc get method for accessing the api and subscribing to it
   */
  get() {
    this.http.get(`${this.baseUrl}requests`).subscribe((response) => {
      if (response === undefined) {
        console.error({ error: response });
      } else {
        this.data = response;
      }
    });
  }

  /**
   * @get collects all requests from api
   */
  get requests(): REQUEST[] {
    return this.requestService.requests;
  }

  handleDeleteRequest(id: number) {
    this.requestService.delete(id);
  }
}
