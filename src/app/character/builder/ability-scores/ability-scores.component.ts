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

  constructor(private characterService: CharacterService) {}

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
    }
  }

  updateASI(): void {
    this.character = this.characterService.updateAbilityScores(
      this.character.abilityScores
    );
  }

  updateRacialASI(e: any) {
    let i: number = e.name;
    this.character.racialAbilityChoices[i] = parseInt(e.value);
    this.updateASI();
  }
}
