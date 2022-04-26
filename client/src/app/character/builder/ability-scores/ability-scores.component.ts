import { DiceService } from './../../../services/dice.service';
import { CharacterService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/_models/character/character';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.sass'],
})
export class AbilityScoresComponent implements OnInit {
  character!: Character;
  standardArray: number[] = [15, 14, 13, 12, 10, 8];
  abilityScoreSelection: number = -1;
  diceRolls: any = [];
  diceMinRoll: any = [];

  constructor(
    private characterService: CharacterService,
    private diceService: DiceService
  ) {}

  ngOnInit(): void {
    this.loadCharacter();
    this.updateASI();
  }

  loadCharacter(): void {
    this.character = this.characterService.character;
  }

  select(val: any): void {
    if (val.value == 0) {
      this.character.abilityScores = [-1, -1, -1, -1, -1, -1];
      this.updateASI();
    }
  }

  updateASI(): void {
    this.character = this.characterService.updateAbilityScores(
      this.character.abilityScores
    );
  }

  updateRacialASI(e: any): void {
    let i: number = e.name;
    this.character.racialAbilityChoices[i] = parseInt(e.value);
    this.updateASI();
  }

  rollDice(i: number): void {
    let rolls = this.diceService.rollDice(6, 4) as number[];
    let min = Math.min(...rolls);

    this.diceMinRoll.push(Math.min(...rolls));

    rolls.splice(rolls.indexOf(min), 1);

    this.diceRolls[i] = rolls;

    this.character.abilityScores[i] = rolls.reduce((a, b) => a + b);

    this.updateASI();
  }
}
