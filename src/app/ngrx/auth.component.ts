import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  StoreState,
  isLoggedInSelector,
  loginAction,
  logoutAction,
} from './store';
import { Observable } from 'rxjs';

@Component({
  selector: 'auth-page-using-ngrx',
  template: `
    <div>
      using ngrx @if(isLoggedIn$ | async){
      <button (click)="logOut()">log out</button>
      } @else {
      <button (click)="login()">login</button>
      }
    </div>
  `,
  styles: [``],
})
export class AuthComponent {
  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store<StoreState>) {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
  }
  login() {
    return this.store.dispatch(loginAction());
  }

  logOut() {
    return this.store.dispatch(logoutAction());
  }
}
