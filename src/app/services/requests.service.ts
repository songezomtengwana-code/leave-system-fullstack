import { Injectable } from '@angular/core';
import { REQUEST } from '../models/request.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  requestServer: REQUEST[] = [
    // {
    //   id: 1,
    //   from: 'Enkosi Tsotsa',
    //   month: 'February', //when
    //   date: 7, // when
    //   reason: 'Personal family issue',
    //   length: 3, // in days
    //   isApproved: true,
    // },
    // {
    //   id: 2,
    //   from: 'Enkosi Tsotsa',
    //   month: 'March', //when
    //   date: 1, // when
    //   reason: 'Personal family issue',
    //   length: 5, // in days
    //   isApproved: false,
    // },
  ];

  constructor(private http: HttpClient) {}

  get requests(): REQUEST[] {
    return this.requestServer;
  }

  post(payload: REQUEST) {
    try {
      this.requestServer.push(payload);
      console.log(this.requestServer);
    } catch (err) {
      console.log({ error: err });
    }
  }

  delete(id: number) {
    const request = this.requestServer.find((req) => {
      req.id === id;
    });

    console.log(id);
  }
}
