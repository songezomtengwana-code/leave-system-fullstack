import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalenderService {
  /**
   * @desc long ass list hard coded - could not think of a method to generate a specific array
   * @more tried for loopa, wh
   */

  year: any[] = [
    // january
    {
      month: 'january',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: [
            {
              title: 'Holiday',
              type: 'holiday',
              icon: './assets/holiday.png',
              isApproved: true,
              info: "New Year's day",
            },
          ],
        },
        {
          id: 2,
          date: 2,
          agenda: [
            {
              title: 'sick',
              type: 'sick',
              icon: './assets/off.png',
              isApproved: true,
              info: 'hospital checkup',
            },
          ],
        },
        {
          id: 3,
          date: 3,
          agenda: [
            {
              title: 'sick',
              type: 'sick',
              icon: './assets/off.png',
              isApproved: true,
              info: 'hospital checkup',
            },
          ],
        },
        {
          id: 4,
          date: 4,
          agenda: [
            {
              title: 'sick',
              type: 'sick',
              icon: './assets/off.png',
              isApproved: true,
              info: 'hospital checkup',
            },
          ],
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
        {
          id: 31,
          date: 31,
          agenda: undefined,
        },
      ],
    },
    // february
    {
      month: 'February',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: [
            {
              title: 'sick',
              type: 'sick',
              icon: './assets/off.png',
              isApproved: true,
              info: 'hospital checkup',
            },
          ],
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: [],
        },
        {
          id: 6,
          date: 6,
          agenda: [
            {
              title: 'sick',
              type: 'sick',
              icon: './assets/off.png',
              isApproved: true,
              info: 'hospital checkup',
            },
          ],
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
      ],
    },
    // march
    {
      month: 'March',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
        {
          id: 31,
          date: 31,
          agenda: undefined,
        },
      ],
    },
    // april
    {
      month: 'april',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
      ],
    },
    //may
    {
      month: 'may',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: [
            {
              title: 'Birthay',
              type: 'cake',
              icon: './assets/holiday.png',
              isApproved: true,
              info: '20th Birthday',
            },
          ],
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
        {
          id: 31,
          date: 31,
          agenda: undefined,
        },
      ],
    },
    {
      month: 'june',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
      ],
    },
    {
      month: 'july',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
        {
          id: 31,
          date: 31,
          agenda: undefined,
        },
      ],
    },
    {
      month: 'august',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
      ],
    },
    {
      month: 'september',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
      ],
    },
    {
      month: 'october',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
        {
          id: 31,
          date: 31,
          agenda: undefined,
        },
      ],
    },
    {
      month: 'november',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
      ],
    },
    {
      month: 'december',
      year: 2023,
      days: [
        {
          id: undefined,
          date: undefined,
          agenda: undefined,
        },
        {
          id: 1,
          date: 1,
          agenda: undefined,
        },
        {
          id: 2,
          date: 2,
          agenda: undefined,
        },
        {
          id: 3,
          date: 3,
          agenda: undefined,
        },
        {
          id: 4,
          date: 4,
          agenda: undefined,
        },
        {
          id: 5,
          date: 5,
          agenda: undefined,
        },
        {
          id: 6,
          date: 6,
          agenda: undefined,
        },
        {
          id: 7,
          date: 7,
          agenda: undefined,
        },
        {
          id: 8,
          date: 8,
          agenda: undefined,
        },
        {
          id: 9,
          date: 9,
          agenda: undefined,
        },
        {
          id: 10,
          date: 10,
          agenda: undefined,
        },
        {
          id: 11,
          date: 11,
          agenda: undefined,
        },
        {
          id: 12,
          date: 12,
          agenda: undefined,
        },
        {
          id: 13,
          date: 13,
          agenda: undefined,
        },
        {
          id: 14,
          date: 14,
          agenda: undefined,
        },
        {
          id: 15,
          date: 15,
          agenda: undefined,
        },
        {
          id: 16,
          date: 16,
          agenda: undefined,
        },
        {
          id: 17,
          date: 17,
          agenda: undefined,
        },
        {
          id: 18,
          date: 18,
          agenda: undefined,
        },
        {
          id: 19,
          date: 19,
          agenda: undefined,
        },
        {
          id: 20,
          date: 20,
          agenda: undefined,
        },
        {
          id: 21,
          date: 21,
          agenda: undefined,
        },
        {
          id: 22,
          date: 22,
          agenda: undefined,
        },
        {
          id: 23,
          date: 23,
          agenda: undefined,
        },
        {
          id: 24,
          date: 24,
          agenda: undefined,
        },
        {
          id: 25,
          date: 25,
          agenda: undefined,
        },
        {
          id: 26,
          date: 26,
          agenda: undefined,
        },
        {
          id: 27,
          date: 27,
          agenda: undefined,
        },
        {
          id: 28,
          date: 28,
          agenda: undefined,
        },
        {
          id: 29,
          date: 29,
          agenda: undefined,
        },
        {
          id: 30,
          date: 30,
          agenda: undefined,
        },
        {
          id: 31,
          date: 31,
          agenda: undefined,
        },
      ],
    },
  ];
  constructor() {}

  get calender() {
    return this.year;
  }
}
