import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'observable-counter',
  template: ` <div>
    <h1>observable counter</h1>
    <p>{{ count | async }}</p>
    <button (click)="incrementCounter()">increment</button>

    <p>the square of the count is {{ countSquare | async }}</p>
  </div>`,
  standalone: true,
  imports: [CommonModule],
})
export class ObservableCounter implements OnInit {
  count = new BehaviorSubject<number>(0);
  countSquare = this.count.pipe(map((count) => count * count));

  incrementCounter() {
    this.count.next(this.count.value + 1);
  }
  ngOnInit(): void {}
}
