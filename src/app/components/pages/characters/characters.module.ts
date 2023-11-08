import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from '@characters/characters-details/characters-details.component';
import { CharactersListComponent } from '@characters/characters-list/characters-list.component';

import {RouterModule} from '@angular/router';

const myComponents = [CharactersDetailsComponent, CharactersListComponent]

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports:[...myComponents]
})
export class CharactersModule { }
