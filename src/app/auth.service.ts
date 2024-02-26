import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }
  logOut() {
    this.isLoggedIn = false;
  }
}
