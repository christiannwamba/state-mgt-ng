import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from './login-form.component';

@Component({
  selector: 'auth-page-using-service',
  template: ` <login-form /> `,
  styles: [``],
  standalone: true,
  imports: [LoginFormComponent],
})
export class AuthPageUsingService {}
