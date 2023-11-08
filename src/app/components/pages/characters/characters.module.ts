import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from '@characters/characters-details/characters-details.component';
import { CharactersListComponent } from '@characters/characters-list/characters-list.component';

import {RouterModule} from '@angular/router';

const myComponent = [CharactersDetailsComponent, CharactersListComponent]

@NgModule({
  declarations: [...myComponent],
  imports: [CommonModule],
  exports:[...myComponent]
})
export class CharactersModule { }
