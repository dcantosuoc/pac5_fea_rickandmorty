import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

const routes: Routes = [
  { path: '', component: CharactersListComponent },
  { path: 'character/:id', component: CharacterItemComponent },
  { path: '**', component: CharactersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
