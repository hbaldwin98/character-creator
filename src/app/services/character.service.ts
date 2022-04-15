import { Race } from './../_models/character/race';
import { Character } from './../_models/character/character';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  character!: Character[];
  races!: Race[];

  constructor() {}

  async getRaces() {
    let json = await fetch("assets/races.json")
        .then(response => response.json())
        .then(json => json);
    console.log(json);
    return json;
  }
}
