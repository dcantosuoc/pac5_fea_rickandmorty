import { Component, Input, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  @Input() item: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: { name: '' },
    location: { name: '' },
    image: '',
    created: '',
  };

  @Input() expand: boolean = false;

  isExpand: boolean = false;

  doExpand(): void {
    this.isExpand = true;
  }

  doReduce(): void {
    this.isExpand = false;
  }
}
