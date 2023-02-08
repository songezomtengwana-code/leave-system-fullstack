import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-off-tracker',
  templateUrl: './off-tracker.component.html',
  styleUrls: ['./off-tracker.component.css'],
})
export class OffTrackerComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.profile;
  }

  handleToggleTracker() {
    const tracker = document.querySelector('.remainder') as HTMLElement;

    if (tracker.classList.contains('fade-in')) {
      tracker.classList.remove('fade-in');
    } else {
      tracker.classList.add('fade-in');
    }
  }
}
