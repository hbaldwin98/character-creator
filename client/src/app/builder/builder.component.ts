import { BuilderNavigationService } from './builder-navigation.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.sass'],
})
export class BuilderComponent implements OnInit {
  routes: string[] = [
    '/builder/home',
    '/builder/race',
    '/builder/class',
    '/builder/abilities',
    '/builder/class',
    '/builder/class',
  ];

  constructor(private route: Router, public nav: BuilderNavigationService) {}

  ngOnInit(): void {}

  setCurrent(num: number): void {
    this.nav.current = num;
  }

  goBack(): void {
    if (this.nav.current === 0) {
      return;
    }
    this.nav.current--;
    this.route.navigateByUrl(this.routes[this.nav.current]);
  }

  goForward(): void {
    if (this.nav.current === 6) {
      return;
    }

    this.nav.current++;
    this.route.navigateByUrl(this.routes[this.nav.current]);
  }
}
