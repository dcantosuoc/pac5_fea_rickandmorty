import { Character } from './character.interface';
import { CharactersInfo } from './charactersInfo.inteface';

export interface Characters {
  info: CharactersInfo;
  results: Array<Character>;
}
