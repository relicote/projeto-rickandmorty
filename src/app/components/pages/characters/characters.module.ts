import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'

import { CharactersDetailsComponent } from '@characters/characters-details/characters-details.component';
import { CharactersListComponent } from '@characters/characters-list/characters-list.component';
import { CharacterComponent } from '@characters/characters.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const myComponent = [CharactersDetailsComponent,CharactersListComponent,CharacterComponent]

// ESSA COISA QUE TÁ ME MATANDO
@NgModule({
  declarations: [...myComponent],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports:[...myComponent]
})
export class CharactersModule { }
