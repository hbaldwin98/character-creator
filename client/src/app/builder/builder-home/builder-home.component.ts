import { BuilderNavigationService } from './../builder-navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder-home',
  templateUrl: './builder-home.component.html',
  styleUrls: ['./builder-home.component.sass'],
})
export class BuilderHomeComponent implements OnInit {
  constructor(private nav: BuilderNavigationService) {}

  ngOnInit(): void {
    this.nav.current = 0;
  }
}
