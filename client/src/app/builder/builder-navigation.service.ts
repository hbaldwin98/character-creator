import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuilderNavigationService {
  current: number = 0;

  constructor() {}
}
