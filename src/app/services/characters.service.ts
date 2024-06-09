import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';
import { Characters } from '../models/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Characters> {
    return this.http.get<Characters>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  getCharactersPage(url: string): Observable<Characters> {
    return this.http.get<Characters>(url);
  }

  getCharactersPageNumber(page: string | null): Observable<Characters> {
    return this.http.get<Characters>(
      'https://rickandmortyapi.com/api/character/?page=' + page
    );
  }

  getCharacterById(id: string | null) {
    return this.http.get<Character>(
      'https://rickandmortyapi.com/api/character' + '/' + id
    );
  }
}
