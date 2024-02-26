import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'clich',
  standalone: true,
  imports: [],
  template: `
    <p>{{ authS.isLoggedIn ? 'is Logged in' : 'is logged out' }}</p>
    <button (click)="authS.login()">press to logim</button>
  `,
  styles: ``,
})
export class ClichComponent {
  constructor(public authS: AuthService) {}
}
