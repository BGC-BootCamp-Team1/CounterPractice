import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrl: './counter-group.component.css'
})
export class CounterGroupComponent {
  counters = [
    { id: 1, count: 0 }
  ];
  get total(): number {
    return this.counters.reduce((sum, counter) => sum + counter.count, 0);
  }

  public OnClickCreate(){
    this.counters.push({ id: this.counters.length+1, count: 0 })
  }

  updateCount(id: number, newCount: number) {
    const counter = this.counters.find(counter => counter.id === id);
    if (counter) {
      counter.count = newCount;
    }
  }
  onClickReset(){
    this.counters.forEach(counter => {
      counter.count = 0
    });
  }
}
