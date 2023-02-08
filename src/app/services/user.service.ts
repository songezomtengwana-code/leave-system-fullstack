import { Injectable, OnInit } from '@angular/core';
import { RequestsService } from './requests.service';

class PROFILE {
  id!: string;
  tag!: string;
  firstName!: string;
  lastName!: string;
  department!: string;
  takenLeaveCount!: number;
  takenLeaveCountDate!: number[];
  remainingLeaveCount!: number;
  photoPath!: string;
  leavesPending!: any[];
  offTracking!: any[];
  annualTrend!: any;
}

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  public user: PROFILE = {
    id: '0703e7-2d80-47e-865f-e4c08d3d4a92',
    tag: 'imakenicebeats#2422',
    firstName: 'Enkosi',
    lastName: 'Tsotsa',
    department: 'Sound Engineer',
    takenLeaveCount: 3,
    takenLeaveCountDate: [16, 17, 23],
    remainingLeaveCount: 11,
    photoPath: './assets/profile.jpg',
    leavesPending: [],
    offTracking: [
      {
        trackId: 1,
        trackName: 'Public Holidays',
        trackRemainingCount: 11,
        trackUsedCount: 1,
        icon: '🇿🇦',
      },
      {
        trackId: 2,
        trackName: 'Sickeness',
        trackRemainingCount: 7,
        trackUsedCount: 1,
        icon: '🤒',
      },
      {
        trackId: 3,
        trackName: 'Vacation',
        trackRemainingCount: 2,
        trackUsedCount: 1,
        icon: '🌴',
      },
    ],
    annualTrend: [
      // start is 2021
      {
        year: 2021,
        monthlyTrend: [
          {
            month: 'J',
            rate: '15%',
          },
          {
            month: 'F',
            rate: '10%',
          },
          {
            month: 'M',
            rate: '12%',
          },
          {
            month: 'A',
            rate: '3%',
          },
          {
            month: 'M',
            rate: '40%',
          },
          {
            month: 'J',
            rate: '12%',
          },
          {
            month: 'J',
            rate: '10%',
          },
          {
            month: 'A',
            rate: '10%',
          },
          {
            month: 'S',
            rate: '10%',
          },
          {
            month: 'O',
            rate: '13%',
          },
          {
            month: 'N',
            rate: '10%',
          },
          {
            month: 'D',
            rate: '60%',
          },
        ],
      },
      {
        year: 2022,
        monthlyTrend: [
          {
            month: 'J',
            rate: '10%',
          },
          {
            month: 'F',
            rate: '10%',
          },
          {
            month: 'M',
            rate: '19%',
          },
          {
            month: 'A',
            rate: '10%',
          },
          {
            month: 'M',
            rate: '10%',
          },
          {
            month: 'J',
            rate: '2%',
          },
          {
            month: 'J',
            rate: '10%',
          },
          {
            month: 'A',
            rate: '10%',
          },
          {
            month: 'S',
            rate: '10%',
          },
          {
            month: 'O',
            rate: '31%',
          },
          {
            month: 'N',
            rate: '10%',
          },
          {
            month: 'D',
            rate: '30%',
          },
        ],
      },
      {
        year: 2023,
        monthlyTrend: [
          {
            month: 'J',
            rate: '15%',
          },
          {
            month: 'F',
            rate: '12%',
          },
          {
            month: 'M',
            rate: '2%',
          },
          {
            month: 'A',
            rate: '2%',
          },
          {
            month: 'M',
            rate: '2%',
          },
          {
            month: 'J',
            rate: '2%',
          },
          {
            month: 'J',
            rate: '2%',
          },
          {
            month: 'A',
            rate: '2%',
          },
          {
            month: 'S',
            rate: '2%',
          },
          {
            month: 'O',
            rate: '2%',
          },
          {
            month: 'N',
            rate: '2%',
          },
          {
            month: 'D',
            rate: '2%',
          },
        ],
      },
    ],
  };

  constructor(public requestService: RequestsService) {}

  ngOnInit(): void {
    this.setLeavesPending();
  }

  get profile(): PROFILE {
    return this.user;
  }

  setLeavesPending() {
    this.profile.leavesPending = this.requestService.requests;
    console.log({ leavesPendingUpdate: this.profile.leavesPending });
  }
}
