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
}
