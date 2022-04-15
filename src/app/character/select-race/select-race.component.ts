import { Race } from './../../_models/character/race';
import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-race',
  templateUrl: './select-race.component.html',
  styleUrls: ['./select-race.component.sass'],
})
export class SelectRaceComponent implements OnInit {
  races!: Race[];
  selectedRace!: Race;
  hasSelected: boolean = false;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getRaces();
  }

  getRaces() {
    this.characterService.getRaces().then((race) => (this.races = race));
  }
}
