import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ADMIN } from 'src/app/models/admin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public _admin = new ADMIN();
  constructor(protected authService: AuthService) {}
  async handleAuth() {
    const email = this._admin.email;
    const password = this._admin.password;
    const admin = { email, password };
    this.authService.handleAuth(admin);
    console.log(admin);
  }

  async handleClearErr() {
    this.authService.handleClearError();
  }
}
