import { Component } from '@angular/core';
import { CounterDisplayComponent } from '../counter-display/counter-display.component';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [CounterDisplayComponent],
  template: `
    <div>
      <counter-display [count]="count" />
      <button (click)="incrementCounter()">increment</button>
      <div>{{ now() }}</div>
      <p>the square of the count is {{ countSquare }}</p>
    </div>
  `,
  styles: ``,
})
export class Counter {
  count = 0;
  countSquare = 0;
  incrementCounter() {
    this.count++;
    this.countSquare = this.count * this.count;
  }

  now() {
    return new Date().toISOString();
  }
}
