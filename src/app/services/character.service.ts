import { DiceService } from './dice.service';
import { Class } from 'src/app/_models/character/class';
import { Race } from './../_models/character/race';
import { Character } from './../_models/character/character';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  character = new Character();
  races!: Race[];
  classes!: Class[];

  constructor(private diceService: DiceService) {}

  async getRaces(): Promise<Race[]> {
    let json = await fetch('assets/races.json')
      .then((response) => response.json())
      .then((json) => json);

    return json;
  }
  async getClasses(): Promise<Class[]> {
    let json = await fetch('assets/classes.json')
      .then((response) => response.json())
      .then((json) => json);

    return json;
  }

  setRace(race: Race): void {
    this.character.race = race;
  }

  setClass(charClass: Class): void {
    this.character.class = charClass;
    this.character.maxHP =
      this.character.class.hitDice +
      this.character.asi.con.mod +
      ((this.diceService.averageRoll(this.character.class.hitDice) +
        this.character.asi.con.mod) *
        (this.character.level -
        1));
  }

  changeLevelBuilder(level: number) {
    if (this.character.hpOveride > 0) {
      return ;
    }

    this.character.level = level;
    this.character.maxHP =
    this.character.class.hitDice +
    this.character.asi.con.mod +
    ((this.diceService.averageRoll(this.character.class.hitDice) +
      this.character.asi.con.mod) *
      (this.character.level -
      1));
  }
}
