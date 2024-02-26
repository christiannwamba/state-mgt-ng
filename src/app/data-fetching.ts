import { Component, OnInit } from '@angular/core';
import axios from 'axios';

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
  selector: 'data-fetching',
  template: `
    <div>
      @if(loading){
      <h1>loading_</h1>
      } @for( user of users; track user.id){
      <p>{{ user.name }}</p>
      }
    </div>
  `,
  styles: [``],
  standalone: true,
})
export class DataFetchingComponent implements OnInit {
  loading = false;
  users: user[] = [];

  async ngOnInit() {
    this.loading = true;
    this.users = await this.getUsers();
    this.loading = false;
  }

  async getUsers() {
    const users = await axios.get<user[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    return users.data;
  }
}

// using angulars http client

// import { Component, OnInit } from '@angular/core';
// import { AuthService } from './auth.service';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, catchError, from, map, tap, throwError } from 'rxjs';
// import { CommonModule } from '@angular/common';

// type user = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// };

// @Component({
//   selector: 'data-fetching',
//   template: `
//     <div>
//       @if(loading){
//       <h1>loading</h1>
//       } @for( user of users; track user.id){
//       <p>{{ user.name }}</p>
//       }
//     </div>
//   `,
//   styles: [``],
//   standalone: true,
//   imports: [CommonModule],
// })
// export class DataFetchingComponent implements OnInit {
//   loading = false;
//   users: user[] = [];

//   constructor(public httpClient: HttpClient) {}

//   ngOnInit(): void {
//     this.getUsers();
//   }

//   getUsers() {
//     this.loading = true;
//     this.httpClient
//       .get<user[]>('https://jsonplaceholder.typicode.com/users')
//       .subscribe({
//         next: (value) => {
//           this.users = value;
//           this.loading = false;
//         },
//       });
//   }
// }
