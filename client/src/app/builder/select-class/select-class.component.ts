import { ClassSelectModalComponent } from '../class-select-modal/class-select-modal.component';
import { Class } from '../../_models/character/class';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/_models/character/character';
import { BuilderNavigationService } from '../builder-navigation.service';

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.sass'],
})
export class SelectClassComponent implements OnInit {
  classes!: Class[];
  hasSelected: boolean = false;
  selectedClass!: Class;
  classModal!: BsModalRef;
  character!: Character;
  show: boolean = false;

  constructor(
    private characterService: CharacterService,
    private modalService: BsModalService,
    private nav: BuilderNavigationService
  ) {}

  ngOnInit(): void {
    this.getClasses();
    if (this.characterService.character.class.name) {
      this.hasSelected = true;
      this.selectedClass = this.characterService.character.class;
      this.character = this.characterService.character;
    }
    this.nav.current = 2;
  }

  getClasses(): void {
    this.characterService
      .getClasses()
      .then((classes) => (this.classes = classes));
  }

  classSelectModal(charClass: Class): void {
    const initialState: ModalOptions = {
      initialState: {
        charClass,
      },
      class: 'modal-dialog-centered modal-fullscreen-md-down',
    };
    this.classModal = this.modalService.show(
      ClassSelectModalComponent,
      initialState
    );

    this.classModal.content.event.subscribe((data: boolean) => {
      this.hasSelected = data;
      if (data === true) {
        this.characterService.setClass(charClass);
        this.selectedClass = charClass;
        this.getCharacter();
        console.log(charClass);
      }
    });
  }

  changeClass(): void {
    this.hasSelected = false;
  }

  keepClass(): void {
    this.hasSelected = true;
  }

  getCharacter(): void {
    this.character = this.characterService.character;
  }

  level(): void {
    this.characterService.changeLevelBuilder(this.character.level);
    this.character = this.characterService.character;
  }
}
