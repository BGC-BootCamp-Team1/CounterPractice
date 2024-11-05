import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0

  public onClickPlus() {
    this.count +=1;
  }

  public onClickMinus() {
    this.count -=1;
  }
}
