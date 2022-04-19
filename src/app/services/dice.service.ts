import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiceService {
  constructor() {}

  rollDice(sides: number, total?: number): number | number[] {
    if (total) {
      let rolls = [];

      for (let i = 0; i < total; i++) {
        rolls.push(Math.floor(Math.random() * sides));
      }

      return rolls;
    }

    let diceRoll = Math.floor(Math.random() * sides);

    return diceRoll;
  }

  averageRoll(sides: number): number {
    return Math.ceil((sides + 1) / 2);
  }
}
