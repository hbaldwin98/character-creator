import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.sass'],
})
export class BuilderComponent implements OnInit {
  current: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setCurrent(num: number): void {
    this.current = num;
  }

  goBack(): void {
    if (this.current === 0) {
      return ;
    }

    this.current--;
  }

  goForward(): void {
    if (this.current === 6) {
      return ;
    }

    this.current++;
  }
}
