import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() characters: Character[] = [];
  @Output() messageEvent = new EventEmitter<Character>();
  displayedColumns: string[] = ['avatar', 'name', 'gender', 'status'];

  getRecord(row: Character) {
    this.messageEvent.emit(row);
  }
}
