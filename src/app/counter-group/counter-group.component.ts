import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrl: './counter-group.component.css'
})
export class CounterGroupComponent {
  displayCounters: string[] = ['Counter'];
  counters = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 }
  ];

  public OnClickCreate(){
    this.displayCounters.push('Counter')
  }
}
