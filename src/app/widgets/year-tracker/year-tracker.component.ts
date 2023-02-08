import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-year-tracker',
  templateUrl: './year-tracker.component.html',
  styleUrls: ['./year-tracker.component.css'],
})
export class YearTrackerComponent implements OnInit {
  public newTrend: any = undefined;
  ngOnInit(): void {}

  constructor(protected userService: UserService) {}

  get user() {
    return this.userService.profile;
  }

  handlePopTrend(trend: any) {
    this.newTrend = trend;
    const pop = document.querySelector('.tool') as HTMLElement;

    if (pop.classList.contains('pop-active')) {
      pop.classList.remove('pop-active');
    } else {
      pop.classList.add('pop-active');
    }

    console.log(this.newTrend);
  }
}
