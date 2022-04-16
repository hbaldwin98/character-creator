import { Race } from './../_models/character/race';
import { Character } from './../_models/character/character';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  character = new Character();
  races!: Race[];

  constructor() {}

  async getRaces(): Promise<Race[]> {
    let json = await fetch("assets/races.json")
        .then(response => response.json())
        .then(json => json);

    return json;
  }

  setRace(race: Race): void {
    this.character.race = race;
  }
}
