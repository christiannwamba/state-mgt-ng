import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'signal-counter',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>signal counter</h1>
      <p>{{ count() }}</p>
      <button (click)="incrementCounter()">increment signal counter</button>
      <!-- <div>{{ now() }}</div> -->

      <p>the square of the count iss {{ countSquare() }}</p>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalCounter {
  count = signal(0);
  countSquare = computed(() => this.count() * this.count());
  incrementCounter() {
    this.count.update((c) => c + 1);
  }
  now() {
    return new Date().toISOString();
  }
}
