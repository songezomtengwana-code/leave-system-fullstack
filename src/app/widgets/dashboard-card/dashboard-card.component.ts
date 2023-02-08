import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
})
export class DashboardCardComponent {
  @Input() horizontal: string = 'inactive';
  @Input() vertical: string = 'inactive';
  public profile = {
    id: '07c03e7e-2d80-476e-865f-e4c08d3d4a92',
    tag: 'imakenicebeats#2422',
    firstName: 'Enkosi',
    lastName: 'Tsotsa',
    department: 'Sound Engineer',
    takenLeaveCount: 3,
    takenLeaveCountDate: [16, 17, 23],
    remainingLeaveCount: 11,
    photoPath: './assets/profile.jpg',
  };

  handleCardActivity() {
    const part = document.querySelector('.container-part') as HTMLElement;

    if (part.classList.contains('part-active')) {
      part.classList.remove('part-active');
    } else {
      part.classList.add('part-active');
    }
  }
}
