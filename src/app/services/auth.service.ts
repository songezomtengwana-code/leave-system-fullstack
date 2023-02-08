import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN } from '../models/admin.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  admin?: ADMIN;
  _admin = new ADMIN();

  constructor(private router: Router) {
    this.admin = {
      // name: 'Songezo Mtengwana',
      email: 'contact.songezo@outlook.com',
      password: 'S34NDONLIFE',
    };
  }

  async handleAuth(admin = this._admin) {
    const button = document.querySelector('.button') as HTMLElement;
    const errtext = document.querySelector('.errbox-text') as HTMLElement;
    const errbox = document.querySelector('.errbox') as HTMLElement;
    const buttonText = document.querySelector('.button-text') as HTMLElement;
    const buttonSpinner = document.querySelector(
      '.button-spinner'
    ) as HTMLElement;

    switch (admin.email) {
      case 'donlife@outlook.com':
        if (admin.password === '1606') {
          buttonText.style.display = 'none';
          buttonSpinner.style.display = 'block';
          setTimeout(() => {
            buttonText.style.display = 'block';
            buttonSpinner.style.display = 'none';
            this.router.navigateByUrl('dashboard');
          }, 2000);
        } else {
          buttonText.style.display = 'none';
          buttonSpinner.style.display = 'block';

          setTimeout(() => {
            buttonSpinner.style.display = 'none';
            buttonText.style.display = 'block';
            errtext.innerHTML = 'Wrong Password';
            errbox.classList.add('errbox-active');
          }, 1000);
        }
        break;
      default:
        errtext.innerHTML = 'Please Check Your Email And Password';
        break;
    }
    return;
  }

  handleClearError() {
    const errbox = document.querySelector('.errbox') as HTMLElement;
    errbox.classList.remove('errbox-active');
  }
}
