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
      (this.character.abilityMods[2] || 0) +
      (this.diceService.averageRoll(this.character.class.hitDice) +
        (this.character.abilityMods[2] || 0)) *
        (this.character.level - 1);
  }

  changeLevelBuilder(level: number) {
    if (this.character.hpOveride > 0) {
      return;
    }

    this.character.level = level;
    this.character.maxHP =
      this.character.class.hitDice +
      (this.character.abilityMods[2] || 0) +
      (this.diceService.averageRoll(this.character.class.hitDice) +
        (this.character.abilityMods[2] || 0)) *
        (this.character.level - 1);
  }

  updateAbilityScores(stats: number[]): Character {
    this.character.abilityScores = stats;

    // setting asi modifiers
    this.character.abilityMods.forEach((mod, i) => {
      if (this.character.abilityScoreOverride[i] > 0) {
        this.character.abilityMods[i] = Math.floor(
          (this.character.abilityScoreOverride[i] - 10) / 2
        );
      } else {
        this.character.abilityMods[i] = Math.floor(
          (this.character.abilityScores[i] - 10) / 2
        );
      }
    });

    // setting total asi
    this.character.abilityScores.forEach((asi, i) => {
      if (this.character.abilityScoreOverride[i] > 0) {
        this.character.abilityScoresTotal[i] =
          this.character.abilityScoreOverride[i];
      } else {
        this.character.abilityScoresTotal[i] =
          asi +
          (this.character.race.abilityScores
            ? this.character.race.abilityScores[i]
            : 0) +
          (this.character.racialAbilityChoices.includes(i) ? 1 : 0);
      }
    });

    return this.character;
  }
}
