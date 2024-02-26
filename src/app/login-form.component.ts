import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [],
  template: `
    <div>
      @if(authService.isLoggedIn){
      <button (click)="authService.logOut()">log out</button>
      } @else {
      <button (click)="authService.login()">login</button>
      }
    </div>
  `,
  styles: ``,
})
export class LoginFormComponent {
  authService: AuthService = inject(AuthService);
}
