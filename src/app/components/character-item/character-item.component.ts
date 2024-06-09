import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css'],
})
export class CharacterItemComponent implements OnInit {
  character!: Character;
  loading: boolean = false;

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    this.loading = true;

    this.charactersService
      .getCharacterById(identifier)
      .subscribe((character) => {
        if (!character) {
          return this.router.navigateByUrl('/');
        }

        this.character = character;
        this.loading = false;
        return;
      });
  }

  goHome() {
    this.router.navigateByUrl('/');
  }
}
