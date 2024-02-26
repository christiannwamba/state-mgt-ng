import { Component } from '@angular/core';
import { Counter } from './counter/counter.component';
import { SignalCounter } from './counter/signal-counter.component';
import { AuthService } from './auth.service';

import { NgrxStoreModule } from './ngrx/store.module';
import { AuthPageUsingService } from './auth-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DataFetchingComponent } from './data-fetching';
import { CommonModule } from '@angular/common';
import { ClichComponent } from './clich/clich.component';
import { DataFetchingComponent2 } from './data-fetching-2';
import { ObservableCounter } from './observable.counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Counter,
    SignalCounter,
    AuthPageUsingService,
    NgrxStoreModule,
    HttpClientModule,
    DataFetchingComponent,
    DataFetchingComponent2,
    ClichComponent,
    ObservableCounter,
  ],
  providers: [],
  template: `
    <counter />
    <signal-counter />
    <auth-page-using-service />
    <!-- <auth-page-using-ngrx /> -->
    <data-fetching />
    <!-- <data-fetching-2 /> -->
    <clich />
    <observable-counter />
  `,
})
export class AppComponent {}
