import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter();

  public onClickPlus() {
    this.count ++;
    this.countChange.emit(this.count);
  }

  public onClickMinus() {
    this.count --;
    this.countChange.emit(this.count);
  }

  public onClickReset(){
    this.count = 0;
    this.countChange.emit(this.count);
  }
}
