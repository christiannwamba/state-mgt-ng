import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-display',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{ count }}
    </p>
  `,
  styles: ``,
})
export class CounterDisplayComponent {
  @Input('count') count!: number;
}
