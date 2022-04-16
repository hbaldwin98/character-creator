import { BsModalService } from 'ngx-bootstrap/modal';
import { Race } from './../../_models/character/race';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-select-modal',
  templateUrl: './race-select-modal.component.html',
  styleUrls: ['./race-select-modal.component.sass']
})
export class RaceSelectModalComponent implements OnInit {
  event: EventEmitter<any> = new EventEmitter();
  race!: Race;

  constructor( private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  selectRace(): void {
    this.event.emit(true);
    this.modalService.hide();
  }

  close(): void {
    this.event.emit(false);
    this.modalService.hide();
  }

}
