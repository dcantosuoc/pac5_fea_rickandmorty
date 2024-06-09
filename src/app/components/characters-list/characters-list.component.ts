import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { CharactersInfo } from 'src/app/models/charactersInfo.inteface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  animations: [
    trigger('fadInOut', [
      state('void', style({ opacity: 0.2 })),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  cardView: boolean = false;
  page: number = 0;
  info: CharactersInfo = {
    count: 0,
    next: '',
    pages: 0,
    prev: '',
  };

  loading: boolean = false;

  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    if (!localStorage.getItem('currentPage')) {
      this.charactersService.getAllCharacters().subscribe((values) => {
        console.log(values);
        this.characters = values.results;
        this.info = values.info;
        this.page = 1;
        this.loading = false;
      });
    } else {
      const currentPage: string | null = localStorage.getItem('currentPage');
      this.charactersService
        .getCharactersPageNumber(currentPage)
        .subscribe((values) => {
          console.log(values);
          this.characters = values.results;
          this.info = values.info;
          this.page = Number(currentPage);
          this.loading = false;
        });
    }
  }

  nextPage(): void {
    if (this.info?.next) {
      this.loading = true;
      this.charactersService
        .getCharactersPage(this.info.next)
        .subscribe((values) => {
          console.log(values);
          this.characters = values.results;
          this.info = values.info;
          this.page = this.page + 1;
          this.loading = false;
          localStorage.setItem('currentPage', this.page.toString());
        });
    }
  }

  prevPage(): void {
    if (this.info?.prev) {
      this.loading = true;
      this.charactersService
        .getCharactersPage(this.info.prev)
        .subscribe((values) => {
          console.log(values);
          this.characters = values.results;
          this.info = values.info;
          this.page = this.page - 1;
          this.loading = false;
          localStorage.setItem('currentPage', this.page.toString());
        });
    }
  }

  getRecord($event: Character): void {
    console.log($event);
    this.router.navigateByUrl('character/' + $event.id);
  }

  setListView(): void {
    this.cardView = false;
  }

  setCardView(): void {
    this.cardView = true;
  }
}
