import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersListRoutingModule } from '@characters/characters-list/characters-list-routing.module';
import { CharactersListComponent } from '@characters/characters-list/characters-list.component';


@NgModule({
  declarations: [
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    CharactersListRoutingModule
  ]
})
export class CharactersListModule { }
