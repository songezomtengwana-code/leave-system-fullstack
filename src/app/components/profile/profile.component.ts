import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

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
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {}
  safetyCheck: boolean = false;
  user = new PROFILE();
  public profile: PROFILE = {
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

  constructor(protected requestService: RequestsService) {}

  handleModal() {
    const modal = document.querySelector('.p-modal') as HTMLElement;
    const errbox = document.querySelector('.errbox') as HTMLElement;
    const errtext = document.querySelector('.errbox-text') as HTMLElement;

    if (modal.classList.contains('p-modal-active')) {
      modal.classList.remove('p-modal-active');
    } else {
      modal.classList.add('p-modal-active');
    }

    if (this.safetyCheck === true) {
      errbox.classList.add('errbox-active');
      errtext.innerText = 'Discard Changes ?';
    }
  }

  handleSaveEdits() {
    if (this.safetyCheck === false) {
      this.safetyCheck = true;
    } else {
      this.safetyCheck = false;
    }
  }

  get requests() {
    return this.requestService.requests;
  }
}
