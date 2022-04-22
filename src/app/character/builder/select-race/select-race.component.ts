import { RaceSelectModalComponent } from '../race-select-modal/race-select-modal.component';
import { Race } from '../../../_models/character/race';
import { CharacterService } from '../../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-select-race',
  templateUrl: './select-race.component.html',
  styleUrls: ['./select-race.component.sass'],
})
export class SelectRaceComponent implements OnInit {
  races!: Race[];
  hasSelected: boolean = false;
  selectedRace?: Race;
  raceModal!: BsModalRef;
  show: boolean = false;

  constructor(
    private characterService: CharacterService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getRaces();
    if (this.characterService.character.race.name) {
      this.hasSelected = true;
      this.selectedRace = this.characterService.character.race;
    }
  }

  getRaces(): void {
    this.characterService.getRaces().then((race) => (this.races = race));
  }

  raceSelectModal(race: Race): void {
    const initialState: ModalOptions = {
      initialState: {
        race,
      },
      class:
        'modal-dialog-centered modal-fullscreen-md-down',
    };
    this.raceModal = this.modalService.show(
      RaceSelectModalComponent,
      initialState
    );

    this.raceModal.content.event.subscribe((data: boolean) => {
      this.hasSelected = data;
      if (data === true) {
        this.characterService.setRace(race);
        this.selectedRace = race;
        this.characterService.character.racialAbilityChoices = [];
      }
    });
  }

  changeRace(): void {
    this.hasSelected = false;
  }

  keepRace(): void {
    this.hasSelected = true;
  }
}
