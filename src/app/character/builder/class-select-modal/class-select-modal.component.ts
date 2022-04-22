import { Class } from 'src/app/_models/character/class';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-class-select-modal',
  templateUrl: './class-select-modal.component.html',
  styleUrls: ['./class-select-modal.component.sass']
})
export class ClassSelectModalComponent implements OnInit {
  event: EventEmitter<any> = new EventEmitter();
  charClass!: Class;

  constructor( private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  selectClass(): void {
    this.event.emit(true);
    this.modalService.hide();
  }

  close(): void {
    this.event.emit(false);
    this.modalService.hide();
  }

}
