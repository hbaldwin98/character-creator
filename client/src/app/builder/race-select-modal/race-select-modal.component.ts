import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Race } from 'src/app/_models/character/race';

@Component({
  selector: 'app-race-select-modal',
  templateUrl: './race-select-modal.component.html',
  styleUrls: ['./race-select-modal.component.sass']
})
export class RaceSelectModalComponent implements OnInit {
  event: EventEmitter<any> = new EventEmitter();
  race!: Race;
  show: boolean = false;

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
