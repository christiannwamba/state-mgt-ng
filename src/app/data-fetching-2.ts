import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  from,
  map,
  startWith,
  tap,
  throwError,
} from 'rxjs';
import { CommonModule } from '@angular/common';

type user = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

@Component({
  selector: 'data-fetching-2',
  template: `
    <div>
      @if(loading | async){
      <h1>loading</h1>
      } @for( user of users | async; track user.id){
      <p>{{ user.name }}</p>
      }
    </div>
  `,
  styles: [``],
  standalone: true,
  imports: [CommonModule],
})
export class DataFetchingComponent2 implements OnInit {
  loading = new BehaviorSubject<boolean>(true);
  users = new BehaviorSubject<user[]>([]);

  constructor(public httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.httpClient
      .get<user[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (value) => {
          this.users.next(value);
        },
        complete: () => {
          this.loading.next(false);
        },
      });
  }
}
